
function myFunction(){
   
   var uname=document.getElementById("user").value;
   var uemail=document.getElementById("email").value;
   var upsw=document.getElementById("psw").value;
   var ucpsw=document.getElementById("conf-psw").value;

   var usercheck= /^[a-zA-Z]{3,15}$/;
   var useremail= /^[a-zA-Z_]{3,}@[a-zA-Z]{3,}[.]{1}[a-zA-Z.]{2,6}$/;
   var userpsw= /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{6,15}$/;

   // username
   if (usercheck.test(uname)){
        document.getElementById("error_user").innerHTML=" "; 
   }
   else{
      document.getElementById("error_user").innerHTML="*Username is required";
      return false; 
   }

   // email
   if (useremail.test(uemail)){
           document.getElementById("error_email").innerHTML=" "; 
   }
   else{
    document.getElementById("error_email").innerHTML="*Email is required"; 
    return false;
   }

   // password
   if (userpsw.test(upsw)){
      document.getElementById("error_psw").innerHTML=" "; 
   }
   else{
   document.getElementById("error_psw").innerHTML="*Password must be at least 6 characters, must have at least 1 number and one alphabet."; 
   return false;
    }


    // confirm password
   if (ucpsw.match(upsw)){
   document.getElementById("error_cpsw").innerHTML=" "; 
   }
   else{
   document.getElementById("error_cpsw").innerHTML="*password is not match";
    return false;
   }


}

//    if(uname==""){
//        document.getElementById("error_user").innerHTML="*Name is required";
//        return false;
//    }
//    if(uemail==""){
//     document.getElementById("error_email").innerHTML="*Email is required";
//     return false;
//    }

//    if(upsw==""){
//     document.getElementById("error_psw").innerHTML="*Password is required";
//     return false;
//    }

//     if(upsw.length <= 6){
//         document.getElementById("error_psw").innerHTML="*Password atleast 6 character";
//     return false;
//     }

//     if(upsw!=ucpsw){
//         document.getElementById("error_cpsw").innerHTML="*password are not same";
//         return false;
//     }
  
//    if(ucpsw==""){
//     document.getElementById("error_cpsw").innerHTML="*password required";
//     return false;
//    }
