
var vp = document.getElementById("villas");
var papel = vp.getContext ("2d");


var vaca = { url: "vaca.png", cargaOK: false};

var fondo = { url: "tile.png", cargaOK: false };


fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);


vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVaca);


function cargarFondo()
{

fondo.cargaOk = true;
dibujar (fondo);

}

function cargarVaca()
{

vaca.cargaOk = true;
dibujar (vaca);


}


function dibujar ()
{

	if (fondo.cargaOk==true){

		papel.drawImage (fondo.imagen,0,0);
	}
}




/*
function aleatorio (min, max)
{

	var resultado;

	resultado = Math.floor(Math.random() * (max-min+1))+min;

	return resultado;
}

*/



