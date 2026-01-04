from fastapi import FastAPI
from .db import db

app = FastAPI()

@app.get("/health")
def health_check():
    return {"status": "ok"}
