const live=document.getElementById("liveQuery");

const box=document.getElementById("queryBox");

live.onchange=function(){

if(this.checked){

box.style.display="block";

}else{

box.style.display="none";

}

}
