

const button = document.querySelector("button");
const form = document.querySelector("form");
const emailInp = document.querySelector("input");

button.addEventListener("click", async e => {
    e.preventDefault();

    if (!form.reportValidity()) {
        return;
    }

    // NOW SEND THE POST REQUEST
    // OM SO ORZ
    const response = await fetch("https://hackphs.pythonanywhere.com/", {
        method: "POST",
        
        body: JSON.stringify({ email: emailInp.value }),
    });
    console.log(emailInp.value);
    console.log(response.text());
    button.className = "notified";
});

// om admits orz

const lastPressed = []; // change
const thing = []; // no change



window.addEventListener("keydown", e => {
    lastPressed.push(e.key);
    if (lastPressed.length<5) {
        return;
    }
    let n = lastPressed.length;
    if (lastPressed[n-1]=="c" && lastPressed[n-2]=="x" && ((lastPressed[n-3]=="ArrowDown" && lastPressed[n-4]=="ArrowRight") || (lastPressed[n-3]=="ArrowRight" && lastPressed[n-4]=="ArrowDown")) && lastPressed[n-5]=="c") {
        // BIRD!!
    }
});