

function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}


function ValidateForm(){
    var name = document.forms["Loginform"]["uname"].value.trim();
    var pwd = document.forms["Loginform"]["psw"].value.trim();
    var pwd1=pwd.toString();
    if(name == ""){
    printError("nameErr","Enter Details");
    return false;
    }
    else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) == false) {
            printError("nameErr", "Please enter a valid name");
            return false;
        } 
        else {
            printError("nameErr", "");
        }
    }
    if(pwd==""){
    printError("pswdErr","Enter Details");
    return false;
    }
    else{
     var minNumberofChars = 6;
    var maxNumberofChars = 16;
    var passw= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]$/;
    if(pwd.length < minNumberofChars ||pwd.length > maxNumberofChars){
        printError("pswdErr","Password length must be 7-15");
        console.log(pwd);
        return false;
    }
    if(pwd1.match(/[a-z]/g) &&
    pwd1.match(/[A-Z]/g) &&
    pwd1.match(/[0-9]/g) &&
    pwd1.match(/[^a-zA-Z\d]/g)){
    printError("pswdErr","");
        
    }
    else{
        printError("pswdErr","password should contain atleast one number and one special character");
        console.log(pwd.value);
        return false;
    	}
    }
  
}
