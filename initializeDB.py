from sqlalchemy import create_engine, MetaData, Table, Column, Integer, String, Boolean

meta_txn = MetaData()
txns = Table(
    "txn",
    meta_txn,
    Column("uid", Integer, primary_key=True),
    Column("txid", Integer),  # Txn ID
    Column("description", String),
    Column("price", Integer),
    Column("depositwid", String),
    Column("conditions", String),
    Column("secretproduct", String),
    Column("completed", Boolean),
)

if __name__ == "__main__":
    engine = create_engine("sqlite:///backend.db", echo=True)
    meta_txn.create_all(engine)

# meta_dispute = MetaData()
# dispute = Table(
#     "disputes",
#     meta_dispute,
#     Column("uid", Integer, primary_key=True),
# )
