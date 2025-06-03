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
    // We'll get one of three responses (just a string): L, E or W
    // Our post content should be a json with email = [the email]
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

    fetch("https://hackphs.pythonanywhere.com", {
        method: "POST",
        body: { "email": emailInp.value }
    })

    // Then replace the unnotified class on the button with notified

});