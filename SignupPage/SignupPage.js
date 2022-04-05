

function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}


function ValidateForm(){
    var fname = document.forms["Signupform"]["fname"].value.trim();
    var lname = document.forms["Signupform"]["lname"].value.trim();
    var uname = document.forms["Signupform"]["uname"].value.trim();
    var pwd = document.forms["Signupform"]["psw"].value.trim();
    var pwd1=pwd.toString();
    if(fname == ""){
    printError("fnameErr","Enter Details");
    return false;
    }
    else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(fname) == false) {
            printError("fnameErr", "Please enter a valid name");
            return false;
        } 
        else {
            printError("fnameErr", "");
        }
    }

    if(lname == ""){
        printError("lnameErr","Enter Details");
        return false;
        }
        else {
            var regex = /^[a-zA-Z\s]+$/;                
            if(regex.test(lname) == false) {
                printError("lnameErr", "Please enter a valid name");
                return false;
            } 
            else {
                printError("lnameErr", "");
            }
        }

    if(uname == ""){
        printError("unameErr","Enter Details");
        return false;
        }
        else {
                var regex = /^[a-zA-Z\s]+$/;                
                if(regex.test(uname) == false) {
                    printError("unameErr", "Please enter a valid name");
                    return false;
                } 
                else {
                    printError("unameErr", "");
                }
    }

    if(pwd==""){
    printError("pswdErr","Enter Details");
    return false;
    }
    else{
     var minNumberofChars = 6;
    var maxNumberofChars = 16;
    //var passw= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]$/;
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
