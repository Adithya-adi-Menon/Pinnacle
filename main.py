from utils import get_base_fee, memo_check, verify_signature
from flask import Flask, request, jsonify, make_response, session
from stellar_sdk import Server, Keypair, TransactionBuilder, Network, Account
from sqlalchemy import create_engine, MetaData, Table, Column, Integer, String
from initializeDB import txns
import json

engine = create_engine(
    "sqlite:///backend.db", echo=True, connect_args={"check_same_thread": False}
)
conn = engine.connect()


app = Flask(__name__)
server = Server("https://horizon-testnet.stellar.org")

# TODO change this into env variable in prod
# Loading esckrow account
with open("eskcrow.json") as f:
    eskcrow = json.load(f)

eskcrow_keypair = Keypair.from_secret(eskcrow["secret"])
contract_account = server.load_account(eskcrow_keypair.public_key)
if not isinstance(contract_account, Account):
    raise ValueError("Could not load contract account")


@app.route("/")
def main_page():
    return "Pinnacle Eskcrow api"


# TODO
# @app.route("create_account", methods=["POST"])
# def create_account():
#     return "create_account"


# Change to albedo
# @app.route("/make_payment", methods=["POST"])
# def make_payment():
#     data = request.get_json(force=True)
#     if data is None:
#         return jsonify({"error": "No JSON received"})
#     dictToReturn = {"text": data["text"]}
#     return jsonify(dictToReturn)


@app.route("/account")
def account_details():
    data = request.get_json(force=True)

    if data is None:
        return jsonify({"error": "No JSON received"})

    if "pubkey" in data:
        pub_key = data["pubkey"]
        session["pub_key"] = pub_key
    else:
        pub_key = session.get("pub_key", None)

    if not pub_key:
        return make_response({"error": "wallet not connected"}, 403)
    try:
        details = server.accounts().account_id(pub_key).call()
        return details
    except Exception as err:
        return make_response({"error": f"Invalid pub_key"}, 403)


@app.route("/generate_payment", methods=["POST"])
def generate_payment():
    """POST params
    description:
    price:
    depositwid:
    conditions:
    secretproduct:
    """
    data = request.get_json(force=True)

    if data is None:
        return jsonify({"error": "No JSON received"})

    try:
        stmt = txns.insert().values(
            description=data["description"],
            price=data["price"],
            depositwid=data["depositwid"],
            conditions=data["conditions"],
            secretproduct=data["secretproduct"],
        )
        res = conn.execute(stmt)
    except Exception as err:
        return make_response({"error": f"Something went wrong {err}"}, 400)

    return jsonify(
        uid=res.inserted_primary_key[0],
        destination=eskcrow_keypair.public_key,
        value=data["price"],
        memo="Esckrow Transaction",
    )


@app.route("/update_payment", methods=["POST"])
def update_payment():
    """POST params:
    uid: Unique record ID
    txid: Transaction ID"""
    data = request.get_json(force=True)
    if data is None:
        return jsonify({"error": "No JSON received"})

    try:
        txns.update().where(txns.c.uid == data["uid"]).values(txid=data["txid"])
    except Exception as err:
        return make_response({"error": f"Something crashed while writing to DB {err}"}, 400)

    return jsonify({"sucess": 200})


@app.route("/send_payment", methods=["POST"])
def send_payment():
    """POST params:
    uid: unique_id
    hash_msg: CONFIRM_PARAPHRASE signed by the buyer
    pub_key: buyer's public key
    """
    data = request.get_json(force=True)
    if data is None:
        return jsonify({"error": "No JSON received"})
    else:
        if not (resp := get_payment_details(data["uid"], remove_secret=False)):
            return jsonify({"error": "Transaction not found"})

        if not (txn_old := resp.get_json()):
            return jsonify({"error": "Internal parsing error (THIS SHOULD NEVER EVER HAPPEN)"})

        if not verify_signature(data["pub_key"], data["hasg_msg"]):
            return make_response({"error": "Invalid signature"}, 403)

        base_fee = get_base_fee()
        try:
            transaction = (
                TransactionBuilder(
                    source_account=contract_account,
                    network_passphrase=Network.TESTNET_NETWORK_PASSPHRASE,
                    base_fee=base_fee,
                )
                .add_text_memo("test transaction")
                .append_payment_op(txn_old["depositWID"], txn_old["price"], "XLM")
                .build()
            )
        except KeyError as err:
            return make_response({"error": f"Wrong parameter {err}"}, 403)

        transaction.sign(eskcrow_keypair)
        response = server.submit_transaction(transaction)

        stmt = txns.update().where(txns.c.uid == txn_old["uid"]).values(completed=True)
        res = conn.execute(stmt)
        if res.rowcount <= 0:
            return jsonify({"error": "Internal error, Table corruption"})

        return jsonify(txn_old)


@app.route("/payment_details/<uid>", methods=["GET"])
def get_payment_details(uid, remove_secret=True):
    sel = txns.select().where(txns.c.uid == uid)
    if res := conn.execute(sel).fetchone():
        out = {txns.c[i].key: res[i] for i in range(len(txns.columns))}
        if remove_secret and not out["completed"]:
            out.pop("secretproduct")
        return jsonify(out)
    else:
        return make_response({"error": f"No transaction found"}, 500)


app.run(debug=True)
conn.close()
