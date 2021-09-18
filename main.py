from utils import get_base_fee, memo_check
from flask import Flask, request, jsonify, make_response
from stellar_sdk import Server, Keypair, TransactionBuilder, Network, Account
from sqlalchemy import create_engine, MetaData, Table, Column, Integer, String
from initializeDB import txns
import json

engine = create_engine("sqlite:///backend.db", echo=True)
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
@app.route("create_account", methods=["POST"])
def create_account():
    return "create_account"


# Change to albedo
# @app.route("/make_payment", methods=["POST"])
# def make_payment():
#     data = request.get_json(force=True)
#     if data is None:
#         return jsonify({"error": "No JSON received"})
#     dictToReturn = {"text": data["text"]}
#     return jsonify(dictToReturn)


@app.route("/make_payment", methods=["POST"])
def make_payment():
    data = request.form
    ins = txns.insert().values(
        id=data["id"],
        description=data["description"],
        price=data["price"],
        depositWID=data["depositWID"],
        conditions=data["conditions"],
        secretproduct=data["secretproduct"],
    )
    result = conn.execute(ins)
    return jsonify(
        id=data["id"],
        destination=eskcrow_keypair.public_key,
        value=data["price"],
        memo="Esckrow Transaction",
    )


@app.route("/send_payment", methods=["POST"])
def send_payment():
    """POST params:
    to: to-public-wallet-address
    value: amount
    tx: transaction_id
    """
    data = request.get_json(force=True)
    if data is None:
        return jsonify({"error": "No JSON received"})
    else:
        base_fee = get_base_fee()
        try:
            transaction = (
                TransactionBuilder(
                    source_account=contract_account,
                    network_passphrase=Network.TESTNET_NETWORK_PASSPHRASE,
                    base_fee=base_fee,
                )
                .add_text_memo(data["TODO"])
                .append_payment_op(data["to"], "10.25", "XLM")
                .build()
            )
        except KeyError as err:
            return make_response({"error": f"Wrong parameter {err}"}, 404)

        transaction.sign(eskcrow_keypair)
        response = server.submit_transaction(transaction)
        print(response)


@app.route("/payment_details/<tx>", methods=["GET"])
def get_payment_details(tx):
    return tx


app.run()
