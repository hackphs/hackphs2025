// epic code goes here

/** @type {HTMLFormElement} */
const form = document.querySelector("form#email-add");

/** @type {HTMLInputElement} */
const emailInp = document.querySelector("form#email-add input");

const submit = document.querySelector("form#email-add button");
submit.addEventListener("click", e => {
    e.preventDefault();
    console.log(emailInp.value);
    emailInp.checkValidity();
    if (!form.reportValidity()) return;

    // Make a POST request with the email to the backend (https://hackphs.pythonanywhere.com)
    // We'll get one of two responses (just a string): L or W
    // Our post content should be a json with email = [the email]
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

    const a = fetch("https://hackphs.pythonanywhere.com?email=" + emailInp.value);
    a.catch((reason) => {
        console.log("shit");
    });
    a.then(() => {
        console.log("good");
    })

});