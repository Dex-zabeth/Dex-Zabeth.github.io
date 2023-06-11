
const nameEl = document.querySelector("#name");
const emailEl = document.querySelector("#email");
const companyNameEl = document.querySelector("#company-name");
const messageEl = document.querySelector("#message");
let valid = false;
const form = document.querySelector("#submit-form");

function checkValidations() {
    let letters = /^[a-zA-Z\s]*$/;
    const name = nameEl.value.trim();
    const email = emailEl.value.trim();
    const companyName = companyNameEl.value.trim();
    const message = messageEl.value.trim();
    if (name === "") {
        document.querySelector(".name-error").classList.add("error");
        document.querySelector(".name-error").innerText =
            "Please fill out this field!";
    } else {
        if (!letters.test(name)) {
            document.querySelector(".name-error").classList.add("error");
            document.querySelector(".name-error").innerText =
                "Please enter only characters!";
        
        } else {
        
        }
    }
    if (email === "") {
        document.querySelector(".email-error").classList.add("error");
        document.querySelector(".email-error").innerText =
            "Please fill out this field!";
        
    } else {
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            document.querySelector(".email-error").classList.add("error");
            document.querySelector(".email-error").innerText =
                "Please enter a valid email address!";
          
        } else {
          
        }
    }
  
}

function sendEmail(name, email, companyName, message) {
    window.location.href = 'mailto:Joshua.Michalik@triosstudent.com&subject=(companyName+name+email)&body=message';
}

function reset() {
    nameEl.value = "";
    emailEl.value = "";
    companyNameEl.value = "";
    messageEl.value = "";
    document.querySelector(".name-error").innerText = "";
    document.querySelector(".email-error").innerText = "";
}
