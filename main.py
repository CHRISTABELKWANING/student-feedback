from fastapi import FastAPI
from fastapi import HTMLResponse

app = FastAPI()

@app.get("/", response_class=HTMLResponse)
def home():
    with open("index.html", "r", encoding="utf-8") as file:
        return file.read()

@app.post("/feedback")
def feedback():
    #Receive the data

    #Process the data

    #Send a response

    return {
        "message": "Feedback submitted successfully!"
    }