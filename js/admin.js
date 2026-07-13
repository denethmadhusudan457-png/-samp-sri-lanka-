function login(){

let pass=document.getElementById("password").value;

if(pass==="MR456H2"){

document.getElementById("loginBox").style.display="none";

document.getElementById("dashboard").style.display="block";

}else{

document.getElementById("msg").innerHTML="Wrong Password";

}

}
