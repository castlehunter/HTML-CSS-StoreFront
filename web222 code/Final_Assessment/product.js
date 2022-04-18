function validateForm() {
    var valid = [validateDesc(), validateUsername(), validateStatus()];
    for (var i = 0; i < 3; i++) {
        if (valid[i] == false) {
            return false;
        }
    }
    alert("Validation passed!");
    return true;
}


// function validateForm() {
//     var valid = validateDesc();
//     if (valid == false) {
//         return false;
//     }
//     alert("Validation passed!");
//     return true;
// }

function clearErrors() {
    document.querySelector(".error1").innerHTML = "";
    document.querySelector(".error2").innerHTML = "";
    document.querySelector(".error3").innerHTML = "";
}

function validateDesc() {
    var validChecker = true;
    var caseChecker = true;
    var input = document.signup.desc.value.trim();

    if (input.charAt(0) != input.charAt(0).toUpperCase()) {
        document.querySelector(".error1").innerHTML = "Product Description: The first character must be capital.";
        validChecker = false;
    } else {
        document.querySelector(".error1").innerHTML = ""
        for (var i = 0; i < input.length; i++) {
            if (input.charAt(i).toUpperCase() < "A" || input.charAt(i).toUpperCase() > "Z") {
                document.signup.desc.focus();
                caseChecker = false;
            }
        }
        if (caseChecker == false) {
            document.querySelector(".error1").innerHTML = ""
            document.querySelector(".error1").innerHTML = "Product Description: Only alphabet allowed."
            validChecker = false;
        } else {
            document.querySelector(".error1").innerHTML = ""
            if (input.length < 20) { // check length of textarea
                document.signup.desc.focus();
                document.querySelector(".error1").innerHTML = "Product Description: Must be at least 20 characters."
                validChecker = false;
            }
        }
    }
    return validChecker;
}

function validateUsername() {
    var input = document.signup.username.value.trim();

    if (input.charAt(0).toUpperCase() < "A" || input.charAt(0).toUpperCase() > "Z") {
        document.signup.username.focus();
        document.querySelector(".error2").innerHTML = "Supplier Username: Must start with an alphabet."
        return false;
    } else {
        document.querySelector(".error2").innerHTML = ""
        if (input.length < 6) { // check length of textarea
            document.signup.username.focus();
            document.querySelector(".error2").innerHTML = "Supplier Username: Must be at least 6 characters."
            return false;
        } else {
            document.querySelector(".error2").innerHTML = ""
        }
    }
    return true;
}

function validateStatus() {
    var boxes = document.signup.status;
    var count = 0;

    for (var i = 0; i < boxes.length; i++) {
        if (boxes[i].checked == true) { count++; }
    }

    if (count == 0) {
        document.querySelector(".error3").innerHTML = "Supplier Status: Must select at least one of the check boxes."
        return false;
    } else {
        document.querySelector(".error3").innerHTML = "";
    }

    return true;
}