function myFunction(){
   
    var uname=$('#user').val();
    var uemail=$('#email').val();
    var upsw=$('#psw').val();
    var ucpsw=$('#conf-psw').val();
    
    var usercheck= /^[a-zA-Z]{3,15}$/;
    var useremail= /^[a-zA-Z_]{3,}@[a-zA-Z]{3,}[.]{1}[a-zA-Z.]{2,6}$/;
    var userpsw= /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{6,15}$/;
    

// username
    if (uname==""){
        $("#error_user").show();
        $("#error_user").text("*please enter password");
        return false;
    }
    else{
        var usercheck= /^[a-zA-Z]{3,15}$/;
        if(!usercheck.test(uname)){
            $("#error_user").show();
            $("#error_user").text("please enter valid name");
            return false;
        }
    }
    
    // mail    
        if (uemail==""){
            $("#error_email").show();
            $("#error_email").text("*please enter email");
            return false;
        }
        else{
            var useremail= /^[a-zA-Z_]{3,}@[a-zA-Z]{3,}[.]{1}[a-zA-Z.]{2,6}$/;
            if(!useremail.test(uemail)){
                $("#error_email").show();
                $("#error_email").text("please enter valid email");
                return false;
            }
        }
// password
        if (upsw==""){
            $("#error_psw").show();
            $("#error_psw").text("*please enter password");
            return false;
        }
        else{
            var userpsw= /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{6,15}$/;
            if(!userpsw.test(upsw)){
                $("#error_psw").show();
                $("#error_psw").text("please enter valid password");
                return false;
            }
        }

// conf-password
        if(ucpsw==""){
            $("#error_cpsw").show();
            $("#error_cpsw").text("*please enter password");
            return false;
        }
        else{
            if(!ucpsw.match(upsw)){
                $("#error_cpsw").show();
                $("#error_cpsw").text("please enter same password");
                return false;
            }
        }


    return true;
 
 
 }