// Input fields
const firstName = document.getElementById('firstName');
const lasttName = document.getElementById('lastName');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const email = document.getElementById('email');

//Form
const form = document.getElementById('myForm');

// Validation colors
const green = '#4CAF50';
const red = '#F44336'

//Validators
function validateLastName() {
    // check if is empty
    if(checkIfEmpty(lasttName)) return;
    if(!checkIfOnlyLetters(lastName)) return;
    return true;
}


function validateFirstName() {
    // check if is empty
    if(checkIfEmpty(firstName)) return;
    if(!checkIfOnlyLetters(firstName)) return;
    return true;
}

function validatePassword() {
   if(checkIfEmpty(password)) return;
   
   if(!meetLength(password, 6, 100)) return;
   return true;
}

//Utility functions
function checkIfEmpty (field) {
    if(isEmpty(field.value.trim())){
        // set field invalid
        setInvalid(field, `${field.name} must not be empty`);
        return true;
    } else {
        // set field valid 
        setValid(field);
        return false;
    }
}

function isEmpty(value) {
    if( value === '') return true;
    return false;
}

function setInvalid( field, message) {
    field.className = 'invalid';
    field.nextElementSibling.innerHTML = message;
    field.nextElementSibling.style.color = red;
}

function setValid(field) {
    field.className = 'valid';
    field.nextElementSibling.innerHTML = '';
    field.nextElementSibling.style.color = green;
}

function checkIfOnlyLetters(field) {
    if(/^[a-zA-Z ]+$/.test(field.value)){
        setValid(field);
        return true;
    } else {
        setInvalid(field, `${field.name} must contain only letters`);
        return false;
    }
}

function meetLength(field, minLength, maxLength) {
    if(field.value.length >= minLength && fild.value.length < maxLength) {
        setValid(field);
        return true;
    } else if(field.value)
}   