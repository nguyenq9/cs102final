function validateForm(){
    if(document.forms[0].myEmail.value == ""){
        alert("Please enter an e-mail address!");
        return false;
    }
    if(document.forms[0].myUsername.value == ""){
        alert("Please enter a username!");
        return false;
    }
    if(document.forms[0].myPassword.value == ""){
        alert("Please enter a password!");
        return false;
    }
    return true && alert("Thank you for making an account!");
}