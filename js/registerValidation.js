import { setErrorFor, setSuccess } from './form-controller.js';

const form = document.getElementById('login-form');
const name= document.getElementById('name');
const phone= document.getElementById('phone');
const email = document.getElementById('email');
const password = document.getElementById('password');

var isValid = true;

form.addEventListener('submit', (e) => {

    console.log("in");

    e.preventDefault();

    isValid = true;

    checkPhoneNumber();
    checkEmail();
    checkPassword();
    checkName();

    if (isValid) {
        window.alert("Register successfuly");
        window.location.href = "../index.html";
    }

})


// ------------------ Checking validation of the fields --------------------------------------

// the function check phone_valuenumber validate
function checkPhoneNumber() {

    const phone_value= phone.value.trim();

    if (phone_value=== '') {
        isValid &= false;
        setErrorFor(phone, 'Phone number cannot be empty');
        return;
    }

    if (phone_value.length !== 10) {
        isValid &= false;
        setErrorFor(phone, 'Phone number must be 10 digit');
        return;
    }

    if (!phone_value.startsWith('05')) {
        isValid &= false;
        setErrorFor(phone, 'Phone number must start with 05');
        return;
    }

    if (isNaN(phone_value)) {
        isValid &= false;
        setErrorFor(phone, 'Phone number must be only digit');
        return;
    }

    isValid &= true;
    setSuccess(phone);
}

// the function check email validate
function checkEmail() {
    const emailValue = email.value.trim();

    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailValue.match(mailformat)) {
        isValid &= false;
        setErrorFor(email, 'Email not valid');
        return;
    }

    isValid &= true;
    setSuccess(email);

}

// the function check password validate
function checkPassword() {
    const pass = password.value.trim();
   

    if (pass === '') {
        isValid &= false;
        setErrorFor(password, 'Password cannot be empty');
    }

    if (pass.length < 6) {
        isValid &= false;
        setErrorFor(password, 'Must have minimum 6 character');
        return;
    }

    setSuccess(password);
}

// the function check name validate 
function checkName() {
    const storeN = name.value.trim();

    if (storeN === '') {
        setErrorFor(name, 'Name cannot be empty');
        isValid &= false;
        return;
    }

    isValid &= true;
    setSuccess(name);
}

