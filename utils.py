import hashlib
from stellar_sdk.keypair import Keypair
from stellar_sdk.exceptions import BadSignatureError

CONFIRM_PARAPHRASE = "I ACCEPT THE TRANSACTION"

# server is defined in main
def get_base_fee() -> int:
    try:
        fee = server.fetch_base_fee()
        if isinstance(fee, int):
            return fee
    except Exception:
        pass
    return 100


def memo_check(s):
    return len(s.encode("utf-8")) <= 28


def verify_signature(pubkey, signature):
    fin = pubkey + ":" + CONFIRM_PARAPHRASE
    x = hashlib.sha256()
    x.update(fin.encode())
    x = x.digest()
    key = Keypair.from_public_key(pubkey)
    try:
        key.verify(x, bytes.fromhex(signature))
        return True
    except BadSignatureError:
        return False
