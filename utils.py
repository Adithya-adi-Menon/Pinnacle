def get_base_fee() -> int:
    try:
        fee = server.fetch_base_fee()
        if isinstance(fee, int):
            return fee
    except Exception:
        pass
    return 100

def memo_check(s):
    return len(s.encode('utf-8')) <= 28