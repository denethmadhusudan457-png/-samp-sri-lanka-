function login(){

let password=document.getElementById("password").value;

if(password==="MR456H2"){

window.location.href="index.html";

}else{

document.getElementById("msg").innerHTML="Wrong Password!";

}

}
