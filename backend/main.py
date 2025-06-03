# this is to run on hackphs.pythonanywhere.com -- literally just a POST endpoint lollers

import json, os, markupsafe
from flask import Flask, request, make_response
# from flask_cors import CORS, cross_origin

app = Flask(__name__)

emails = set()

if not os.path.exists("emails.json"):
    with open ("emails.json",'w') as f: f.write("[]")

@app.route("/",methods=["GET"])
def add_registration():
    global emails
    try:
        email = request.args["email"]

        if email in emails:
            return "L", 200 # L --> not added
        with open ("emails.json",'r') as f: emails = set(json.load(f))
        emails.add(email)
        with open ("emails.json",'w') as f: json.dump(list(emails),f)
    except:
        return "LA", 200
    return "W",200 # W --> added

if __name__ == "__main__":
    app.run("127.0.0.1",8000)
