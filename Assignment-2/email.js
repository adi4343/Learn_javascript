function myFunction() {
    document.getElementById("nxt").innerHTML="<input type='File'>";
}
function abc(){
      
      var b = document.getElementById("subject").value;
      var a=document.getElementById("email").value;
      var c=document.getElementById("myfile").value;
      var c=document.getElementById("Message").value;

      document.getElementById("form-container").style.display='none';
      

    //   document.write("<h2>"+b+"</h2>"+"<br>"+c);
    //   document.write(a+"<br>");
    document.getElementById("result-container").style.display = "block";
    document.getElementById("result-container").innerHTML = '<h2>' + b + '</h2>' + '<br>' + c;


}
