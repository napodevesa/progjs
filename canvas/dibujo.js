var texto2 = document.getElementById("texto_color");
var boton2 = document.getElementById("botoncito2");
boton2.addEventListener("click", dibujoPorClick);

var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d") ;


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){

	lienzo.beginPath(); //inicia
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath(); //cierra
}


function dibujoPorClick() {

	var lineas = parseInt(texto.value);
	var l = 0;
	var yinicial;
	var xfinal;
	colorcito= texto2.value;
	var espacio = ancho / lineas;

	for(l=0;l < lineas; l++){
		dibujarLinea (colorcito , 0, yinicial, xfinal, 300);
		yinicial= espacio * l ;
		xfinal = espacio * (l+1) ;
		colorcito= colorcito ;
		
	}
}

dibujarLinea ("black", 0, 0, 0, 300);
dibujarLinea ("black", 0, 300, 300, 300);
dibujarLinea ("black", 300, 0, 300, 300);
dibujarLinea ("black", 0, 0, 300, 0);




