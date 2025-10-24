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
        // document.body.style.overflow = "hidden";
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

document.querySelector(".button.register").style = `font-size:${20 + Math.min(0.5 * (Date.now() - (new Date("9/12/2025")))/(1000*60*60*24),20)}pt`;

const lerp = (a,b,amount) => a+(b-a)*amount;
const lerp3 = (a,b,amount) => [lerp(a[0],b[0],amount),lerp(a[1],b[1],amount),lerp(a[2],b[2],amount)]

/**
 * @param {number} scroll 0-1 = proportion of how scrolled the page is
 */
function updateBGColor(scroll) {
    const bg = document.querySelector("html");
    
    const startTop = [184,193,215];
    const midTop = [13, 27, 99];
    const endTop = [4,11,48];

    const startBot = [247,177,176];
    const midBot = [125, 70, 28];
    const endBot = [12,24,87];
    let top=0, bot=0;
    if (scroll < 0.333333) {
        top = lerp3(startTop,midTop,scroll*3);
        bot = lerp3(startBot,midBot,scroll*3);
    }
    else {
        top = lerp3(midTop,endTop,(scroll-0.333333)*3/2);
        bot = lerp3(midBot,endBot,(scroll-0.333333)*3/2);
    }
    bg.style.setProperty("--grad-1",`rgb(${top[0]} ${top[1]} ${top[2]})`);
    bg.style.setProperty("--grad-2",`rgb(${bot[0]} ${bot[1]} ${bot[2]})`);
}

function updateBG() {
    const h = document.body.scrollHeight - window.innerHeight;
    console.log(window.scrollY,h);
    updateBGColor(window.scrollY/h);
    document.body.style.setProperty("--scroll",Math.max(0,window.scrollY/h));
}

window.addEventListener("scroll",updateBG);
setInterval(updateBG,200);

function makeStars() {
    const n = 30;

    /** @type {HTMLDivElement|null} */
    const starsContainer = document.querySelector("#stars");
    if (!starsContainer) return;
    for (let i=0;i<n;i++) {
        const star = document.createElement("div");
        star.classList.add("star");

        star.style.setProperty("--x-pos",Math.random());
        star.style.setProperty("--y-pos",Math.random());
        star.style.setProperty("--offset",Math.random()*10);
        star.style.setProperty("--spd",Math.random()+1);

        starsContainer.appendChild(star);
    }
}

makeStars();

addEventListener("load",()=>setTimeout(()=>document.querySelector("#bg").classList.remove("no"),100));