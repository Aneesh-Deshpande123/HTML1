let bulb1=document.getElementById("bulb1_id");
let bulb2=document.getElementById("bulb2_id");
let bulbOn=true;
bulb1.onclick=function event(){
    if(bulbOn==true){
        bulbOn=false;
        bulb1.src="bulboff.gif";
        bulb2.textContent="Bulb is off🥺";
    }else{
        bulbOn=true;
        bulb1.src="bulbon.gif";
        bulb2.textContent="Bulb is on😁";
    }
}