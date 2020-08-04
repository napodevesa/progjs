
var vp = document.getElementById("villas");
var papel = vp.getContext ("2d");
var mapa = "tile.png"

var fondo = new Image();
fondo.src = mapa;
fondo.addEventListener("load", dibujar);

var vaca = new Image();
vaca.src = "vaca.png";
vaca.addEventListener("load", dibujarVaca);

var pollo = new Image();
pollo.src = "pollo.png";
pollo.addEventListener("load", dibujarPollo);

var cerdo = new Image();
cerdo.src = "cerdo.png";
cerdo.addEventListener("load", dibujarCerdo);


function dibujar ()
{

papel.drawImage(fondo,0,0);

}

function dibujarVaca ()
{

papel.drawImage(vaca,10,10);

}

function dibujarPollo ()
{

papel.drawImage(cerdo,10,20);

}

function dibujarCerdo ()
{

papel.drawImage(pollo,30,15);

}


/*
function aleatorio (min, max)
{

	var resultado;

	resultado = Math.floor(Math.random() * (max-min+1))+min;

	return resultado;
}

*/



