

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
});