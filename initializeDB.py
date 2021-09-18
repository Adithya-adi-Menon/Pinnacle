from sqlalchemy import create_engine, MetaData, Table, Column, Integer, String

meta_txn = MetaData()
txns = Table(
    "txn",
    meta_txn,
    Column("id", Integer, primary_key=True),
    Column("description", String),
    Column("price", Integer),
    Column("depositWID", String),
    Column("conditions", String),
    Column("secretproduct", String),
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
