var y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var g = 1.622;
var a = g;
var dt = 0.006683;
var timer;
var fueltimer;
var fuel=150;
var alturamaxima= 70;
var minfuel=0;
activo = false;




window.onload = function(){
    document.getElementById("info").onclick = function () {
		document.getElementsByClassName("divinfo")[0].style.display = "block";
		document.getElementsByClassName("divinfodentro")[0].style.display = "block";
		document.getElementsByClassName("hidem")[0].style.display = "block";
		document.getElementsByClassName("divabout")[0].style.display = "none";
		document.getElementsByClassName("divaboutdentro")[0].style.display = "none";
		document.getElementsByClassName("divpaused")[0].style.display = "none";
		document.getElementsByClassName("divpauseddentro")[0].style.display = "none";
		stop();
	}
	
	
	
	    document.getElementById("about").onclick = function () {
		document.getElementsByClassName("divabout")[0].style.display = "block";
		document.getElementsByClassName("divaboutdentro")[0].style.display = "block";
		document.getElementsByClassName("hidem")[0].style.display = "block";
		document.getElementsByClassName("divinfo")[0].style.display = "none";
		document.getElementsByClassName("divinfodentro")[0].style.display = "none";
		document.getElementsByClassName("divpaused")[0].style.display = "none";
		document.getElementsByClassName("divpauseddentro")[0].style.display = "none";
		stop();
	}
	    document.getElementById("pause").onclick = function () {
		document.getElementsByClassName("divpaused")[0].style.display = "block";
		document.getElementsByClassName("divpauseddentro")[0].style.display = "block";
		document.getElementsByClassName("hidem")[0].style.display = "block";
		document.getElementsByClassName("divabout")[0].style.display = "none";
		document.getElementsByClassName("divaboutdentro")[0].style.display = "none";
		document.getElementsByClassName("divinfo")[0].style.display = "none";
		document.getElementsByClassName("divinfodentro")[0].style.display = "none";
		stop();
	}
	document.getElementById("hidem").onclick = function () {
		document.getElementsByClassName("divinfo")[0].style.display = "none";
		document.getElementsByClassName("divinfodentro")[0].style.display = "none";
		document.getElementsByClassName("divabout")[0].style.display = "none";
		document.getElementsByClassName("divpauseddentro")[0].style.display = "none";
		document.getElementsByClassName("divpaused")[0].style.display = "none";
		document.getElementsByClassName("divaboutdentro")[0].style.display = "none";
		document.getElementsByClassName("hidem")[0].style.display = "none";

		start();
	}
	document.getElementById("preiniciar").onclick = function () {
		document.location.reload();
		}
	document.getElementById("divllegadadentro").onclick = function () {
	document.location.reload();
		}
	
	
	//Empezar a mover nave
	start();
	
	document.onkeydown = motorOn;
	document.onkeyup = motorOff;
	document.onmousedown = motorOn;
	document.onmouseup = motorOff;

document.getElementById("dificultad1").onclick = function ()  {
	g = 1.622;
	fuel = 150;
	document.getElementsByClassName("divpaused")[0].style.display = "none";
	document.getElementsByClassName("divpauseddentro")[0].style.display = "none";
	document.getElementsByClassName("hidem")[0].style.display = "none";
	v = 0; y = 0;
	start();
}
document.getElementById("dificultad2").onclick = function () {
	g = 5.622;
	fuel = 100;
	document.getElementsByClassName("divpaused")[0].style.display = "none";
	document.getElementsByClassName("divpauseddentro")[0].style.display = "none";
	document.getElementsByClassName("hidem")[0].style.display = "none";
	v = 0; y = 0;
	start();
}

document.getElementById("dificultad3").onclick = function () {
	g = 10.622;
	fuel= 80;
	document.getElementsByClassName("divpaused")[0].style.display = "none";
	document.getElementsByClassName("divpauseddentro")[0].style.display = "none";
	document.getElementsByClassName("hidem")[0].style.display = "none";
	v = 0; y = 0;
	start();
}

}






function start(){
	timer=setInterval(function(){ moverNave(); }, dt*1000);
}

function stop(){
	clearInterval(timer);
}

function moverNave(){
	v +=a*dt;
	document.getElementById("velocidad").innerHTML=v.toFixed(2);
	document.getElementById("velocidadfinal").innerHTML=v.toFixed(2);
	y +=v*dt;
	document.getElementById("altura").innerHTML=(alturamaxima - y).toFixed(2);
		document.getElementById("fuel").innerHTML=fuel;
	
	//mover hasta que top sea un 70% de la pantalla
	if (y<alturamaxima){ 
		document.getElementById("nave").style.top = y+"%"; 
		
	} else { 
			stop();
			if (v>10 || y <= 0){
		
		document.getElementsByClassName("divllegada")[0].style.display = "block";
		document.getElementsByClassName("divllegadadentro")[0].style.display = "block";
		
		if(activo == false)
			aterrizar();
			document.getElementById("navef").src = "img/explo.gif";
		}else {
		
		document.getElementsByClassName("divllegada")[0].style.display = "block";
		document.getElementsByClassName("divllegadadentro")[0].style.display = "block";
							stop();
			
}stop();
			
		
	}
}

function motorOn(){
	if (fueltimer==null && fuel>0 && !activo){
		fueltimer=setInterval(function(){ restarFuel(); }, 100 	);
		a = -g;
		document.getElementById("navef").src = "img/nave-aplicacionpq.png";
	}
}
 
function motorOff(){
clearInterval(fueltimer);
fueltimer=null;
a = g;
if(!activo)
	document.getElementById("navef").src = "img/nave-aplicacionpqsf.png";

}
function restarFuel(){
	 if(fuel>minfuel)
	 fuel -= 1;
}

function aterrizar(){
	motorOff();
	activo=true;
	clearInterval(fueltimer);
}





