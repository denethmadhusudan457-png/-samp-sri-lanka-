const menu=document.getElementById("menuBtn");

const sidebar=document.getElementById("sidebar");

let open=false;

menu.onclick=function(){

if(open){

sidebar.style.left="-240px";

open=false;

}else{

sidebar.style.left="0";

open=true;

}

}

function copyIP(id){

let ip=document.getElementById(id).innerText;

navigator.clipboard.writeText(ip);

alert("Server IP Copied!");

}

function searchServer(){

let input=document.getElementById("search").value.toLowerCase();

let server=document.getElementsByClassName("server");

for(let i=0;i<server.length;i++){

let text=server[i].innerText.toLowerCase();

if(text.indexOf(input)>-1){

server[i].style.display="block";

}else{

server[i].style.display="none";

}

}

}
