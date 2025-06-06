const button = document.querySelector("button");
const form = document.querySelector("form");
const emailInp = document.querySelector("input");

button.addEventListener("click", e => {
    e.preventDefault();
    emailInp.setCustomValidity("");
    emailInp.checkValidity();
    if (!form.checkValidity() || emailInp.value == "") {
        if (emailInp.value == "") emailInp.setCustomValidity("Must enter an email");
        else if (emailInp.value.length > 100) emailInp.setCustomValidity("Email is too long");
        else emailInp.setCustomValidity("");
        form.reportValidity();
        return;
    }
    button.setAttribute("disabled", "");
    fetch("https://hackphs.pythonanywhere.com/", {
        method: "POST",
        body: JSON.stringify({ email: emailInp.value }),
    }).then(data => data.text().then(text => {
        setTimeout(button.removeAttribute.bind(button, "disabled"), 5000);
        if (text == "E") return;
        button.className = "notified";
        emailInp.addEventListener("input", () => { button.className = "unnotified"; });

        if (emailInp.value == "storby@hackphs.tech") {
            document.body.className = "sunset";
            setTimeout(() => document.body.className = "night", 14500);
        }
    }));
});

// om admits orz

const lastPressed = []; // change
const thing = []; // no change

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/** @type {Keyframe[]} */
const birdFly = [
    { top: "0px", right: "-200px", display: "block" },
    {
        top: "30px",
        right: "33%",
        offset: 0.4
    },
    {
        top: "25px",
        right: "33%",
        offset: 0.65
    },
    {
        top: "90px",
        right: "32%"
    }
];

let flown = false;
window.addEventListener("keydown", e => {
    lastPressed.push(e.key);
    console.log(e);
    let n = lastPressed.length;
    if (n < 5) return;
    if (flown) return;
    const birdy = document.querySelector("#birdy");

    if (lastPressed[n - 1] == "c" && lastPressed[n - 2] == "x" && ((lastPressed[n - 3] == "ArrowDown" && lastPressed[n - 4] == "ArrowRight") || (lastPressed[n - 3] == "ArrowRight" && lastPressed[n - 4] == "ArrowDown")) && lastPressed[n - 5] == "c") {
        console.log("fdashkjfaskj");
        flown = true;
        birdy.style.display = "block";
        birdy.animate(birdFly, {
            duration: 3000,
            iterations: 1,
            fill: "forwards"
        });
        sleep(2000).then(() => { document.querySelector("h1").style.setProperty("color", "rgba(62,151,192,255)"); });
    }
});