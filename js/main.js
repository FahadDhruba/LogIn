
/* --------------------------Page Location Starts-------------------------- */
document.getElementById("message").innerHTML =
  "Page location is " + window.location.href;
/* -------------------------------Page Location Ends------------------------- */
/* ---------------------------------Functions Starts------------------------------ */
function validate() {
  /* -------------------------------Declerring Variables-------------------------- */
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  /* --------------------------------Declering A Statement-------------------------------- */
  if (username == "admin" && password == "user") {
    alert("logged in");
    /* ------------------------------Redirecting To-------------------------------------- */
   return window.location.href = 'https://drive.google.com';

  }
  else {
    document.getElementById("errmsg").innerHTML ="Invalid Information";
    document.getElementById("username").focus();
    document.getElementById("username").value= "";
    document.getElementById("password").value= "";
  }



}
  /* --------------------------------------Functions Ends-------------------------- */