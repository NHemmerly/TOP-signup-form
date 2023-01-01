//Script for validating password fields are the same 

function validateForm(e) {
    if (password.value != confirmPassword.value) {
        e.preventDefault();
        error.firstChild.innerText += "Passwords do not match";
    } 
}

const confirm = document.getElementById("form1");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const error = document.querySelector(".error");

confirm.addEventListener('submit', validateForm);


