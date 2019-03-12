
let btn = document.getElementById("collect");

let fullName = document.getElementById("fullname");

let email = document.getElementById("email");

let message = document.getElementById("message");

let form = document.querySelector("form");

function valForm() {
    
    // console.log("valForm works!")
    
    let data = {};
    let errors = [];
    
    // FULL NAME HANDLED
    if (fullName.value !== "") {
        data.fullName = fullName.value;
    } else {
        errors.push("Please enter your full name!");
    }
    
    
    // HANDLE THE EMAIL HERE
    if (email.value !== "") {
        data.email = email.value;
    } else {
        errors.push("Please enter your email!");
    }
    
    
    // HANDLE THE MESSAGE HERE
    if (message.value !== "") {
        data.message = message.value;    
    } else {
        errors.push("Please ensure you have written a message!")
    }
    
    
    // PRINTING FEEDBACK OR ERRORS
    if (errors.length === 0) {
        console.log(data);
        //clear text once submitted
        form.reset();
    } else {
        console.log(errors);
    }
}

btn.addEventListener("click", valForm);