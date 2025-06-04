

const button = document.querySelector("button");
const form = document.querySelector("form");
const emailInp = document.querySelector("input");

button.addEventListener("click", async e => {
    e.preventDefault();

    if (!form.reportValidity()) return;

    // NOW SEND THE POST REQUEST
    const response = await fetch("https://hackphs.pythonanywhere.com/", {
        method: "POST",
        body: JSON.stringify({ email: emailInp.value }),
    });
    if (emailInp.value == "storby@hackphs.tech") {
        document.body.className = "sunset";
        setTimeout(() => document.body.className = "night", 14500);
    }

    button.className = "notified";
});

// om admits orz

const lastPressed = [];

window.addEventListener("keydown", e => {
    lastPressed.push(e.key.toLowerCase());
    // if (lastPressed.length < 5) return;

    document.querySelector("#birdy").style.setProperty("--rep", "1");
});