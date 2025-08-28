const button = document.querySelector("button");
const form = document.querySelector("form");
const emailInp = document.querySelector("input");

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

const allEqual = (a, b) => {
    if (a.length != b.length) return false;
    for (let i = 0; i < a.length; i++) if (a.at(i) != b.at(i)) return false;
    return true;
}

window.addEventListener("keydown", e => {
    lastPressed.push(e.key);
    let n = lastPressed.length;
    if (n < 5) return;
    const birdy = document.querySelector("#birdy");

    if (lastPressed[n - 1] == "c" && lastPressed[n - 2] == "x" && ((lastPressed[n - 3] == "ArrowDown" && lastPressed[n - 4] == "ArrowRight") || (lastPressed[n - 3] == "ArrowRight" && lastPressed[n - 4] == "ArrowDown")) && lastPressed[n - 5] == "c") {
        if (flown) return;
        flown = true;
        birdy.style.display = "block";
        birdy.animate(birdFly, {
            duration: 3000,
            iterations: 1,
            fill: "forwards"
        });
        sleep(2000).then(() => { document.querySelector("h1").classList.add("but-blue") });
    }
    if (n < 10) return;

    if (allEqual(lastPressed.slice(n - 10), ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"])) {
        document.body.style.overflow = "hidden";
        document.querySelectorAll("body *").forEach(el => el.animate([
            { transform: "rotate(0deg)" },
            { transform: "rotate(360deg)" }
        ], { duration: 2000 }));
    }
});

document.querySelectorAll("dialog").forEach(el => el.addEventListener("close", () => {
    window.onbeforeunload = null;
    window.location.hash = '';
}));

if (window.location.hash != '') {
    try { document.querySelector(window.location.hash).showModal(); }
    catch (e) { }
}