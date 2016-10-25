//Heading

var heading = document.getElementById('form-signin-heading');
heading.innerHTML = "Por favor inicia sesión";

//Label email
var email = document.getElementsByTagName('inputEmail');
email.innerHTML = "Correo";

//email placeholder
var inputMail = document.getElementById('inputEmail');
inputMail.placeholder = "Correo Electrónico";

//label password
var pass = document.getElementsByTagName('inputPassword');
pass.innerHTML = "Contraseña";

//pass placeholder
var inputPass = document.getElementById('inputPassword');
inputPass.placeholder = "Contraseña";

//remember me
var check = document.querySelector('label span');
check.innerHTML = "Recordarme";

//boton
var button = document.querySelector('button');
button.innerHTML = "Iniciar Sesión";