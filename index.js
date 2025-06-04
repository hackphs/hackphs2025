

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