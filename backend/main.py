# this is to run on hackphs.pythonanywhere.com -- literally just a POST endpoint lollers

import json, os, markupsafe
from flask import Flask, request, make_response

app = Flask(__name__)

emails = set()

if not os.path.exists("emails.json"):
    with open ("emails.json",'w') as f: f.write("[]")

@app.route("/",methods=["POST"])
def add_registration():
    global emails
    try:
        email = request.get_json().get("email")

        if email in emails:
            return "L", 200, {"Access-Control-Allow-Origin": "*"} # L --> not added
        with open ("emails.json",'r') as f: emails = set(json.load(f))
        emails.add(email)
        with open ("emails.json",'w') as f: json.dump(list(emails),f)
    except:
        return "E", 200, {"Access-Control-Allow-Origin": "*"}
    return "W", 200, {"Access-Control-Allow-Origin": "*"} # W --> added

# OMFG IT WORKS 
# I FEEL SO SMART
# I DID EXACTLY WHAT CHROME TOLD ME TO DO WOWOWOWOOWOWOW SO BIGGUS BRAINUS HAJKFDHKHAKJFHJK KJHFAKJDSAHKJFHKSDJHJKFHDKSJHKF GENIUS MOMENT