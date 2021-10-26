function myFunction() {
    var a = document.getElementById("user").value;
    var b = document.getElementById("psw").value;
    document.getElementById("container").style.display = 'none';
    document.write("Welcome " + a + " " + b)
}