from fastapi import FastAPI, Form
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/", response_class=HTMLResponse)
def home():
    with open("index.html", "r", encoding="utf-8") as file:
        return HTMLResponse(content=file.read())

@app.post("/submit-feedback")
def feedback():
    def feedback(recommend: str = Form(...)):
        return {"recommend" : recommend}
    
    #Receive the data

    #Process the data

    #Send a response

    return {
        "message": "Feedback submitted successfully"
    }