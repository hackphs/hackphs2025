

const button = document.querySelector("button");
const form = document.querySelector("form");
const emailInp = document.querySelector("input");

button.addEventListener("click", async e => {
    e.preventDefault();
    emailInp.checkValidity();
    if (!form.checkValidity() || emailInp.value == "") {
        if (emailInp.value == "") emailInp.setCustomValidity("Must enter an email");
        else emailInp.setCustomValidity("");
        emailInp.reportValidity();
        form.reportValidity();
        return;
    }

    // NOW SEND THE POST REQUEST
    const response = await fetch("https://hackphs.pythonanywhere.com/", {
        method: "POST",
        body: JSON.stringify({ email: emailInp.value }),
    });

    button.className = "notified";

    setTimeout(() => {
        emailInp.addEventListener("change", () => { button.className = "unnotified"; });
    }, 500);

    if (emailInp.value == "storby@hackphs.tech") {
        document.body.className = "sunset";
        setTimeout(() => document.body.className = "night", 14500);
    }

    button.className = "notified";
});

// om admits orz

const lastPressed = []; // change
const thing = []; // no change

function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}
window.addEventListener("keydown", e => {
    lastPressed.push(e.key);
    if (lastPressed.length<5) {
        //return;
    }
    let n = lastPressed.length;
    if (lastPressed[n-1]=="c" && lastPressed[n-2]=="x" && ((lastPressed[n-3]=="ArrowDown" && lastPressed[n-4]=="ArrowRight") || (lastPressed[n-3]=="ArrowRight" && lastPressed[n-4]=="ArrowDown")) && lastPressed[n-5]=="c") {
        document.querySelector("#birdy").style.setProperty("--rep", "1");
        document.querySelector("#birdy").style.setProperty("display", "inline");
        sleep(2000).then(() => {document.querySelector("h1").style.setProperty("color", "rgba(62,151,192,255)");});
        
    }
})

const birdFly = [
    { top: "0px", right: "-200px" },
    { top: "50px", right: "32%" },
    { top: "90px", right: "32%" }
];

const birdFlyTiming = {
    duration: 3000,
    iterations: 1
};

let flown = false;

window.addEventListener("keydown", e => {
    //lastPressed.push(e.key.toLowerCase());
    // if (lastPressed.length < 5) return;

    // //document.querySelector("#birdy").style.setProperty("--rep", "1");
    if (flown) return;
    const birdy = document.querySelector("#birdy");
    flown = true;
    birdy.animate(birdFly, birdFlyTiming);
    setTimeout(() => {
        birdy.style.top = birdFly[birdFly.length - 1].top;
        birdy.style.right = birdFly[birdFly.length - 1].right;
    }, 3000);
});