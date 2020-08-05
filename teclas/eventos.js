var teclas = { UP:38, LEFT:37, RIGHT:39, DOWN:40};

var texto2 = document.getElementById("texto_color");
var boton2 = document.getElementById("botoncito2");
boton2.addEventListener("click", dibujarTeclado);

var texto2_diam = document.getElementById("texto_diam");
var boton2_diam = document.getElementById("botoncito_diam");
boton2.addEventListener("click", dibujarTeclado);


document.addEventListener("keydown",dibujarTeclado);
document.addEventListener("keyup",dibujarTeclado);

var c = document.getElementById("area_dibujo");
var ancho = c.width;
var lienzo = c.getContext("2d");

var x = 150;
var y = 150;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){

	lienzo.beginPath(); //inicia
	lienzo.strokeStyle = color;
	lienzo.lineWidth = texto2_diam.value;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath(); //cierra
}


function dibujarTeclado(evento){

	var colorcito = texto2.value;
	var movimiento= 5;

	if (evento.keyCode==teclas.UP){
		dibujarLinea(colorcito, x, y, x, y-movimiento, lienzo);
		y = y - movimiento;
		
	}
	if (evento.keyCode==teclas.DOWN){
		dibujarLinea(colorcito, x, y, x, y+movimiento, lienzo);
		y = y + movimiento;
	}
	if (evento.keyCode==teclas.LEFT){
		dibujarLinea(colorcito, x, y, x-movimiento, y, lienzo);
		x = x - movimiento;
	}
	if (evento.keyCode==teclas.RIGHT){

		dibujarLinea(colorcito, x, y, x+movimiento, y, lienzo);
		x = x + movimiento;
	} 

}


dibujarLinea (texto_color.value, 0, 0, 0, 300, lienzo);
dibujarLinea (texto_color.value, 0, 300, 300, 300, lienzo);
dibujarLinea (texto_color.value, 300, 0, 300, 300, lienzo);
dibujarLinea (texto_color.value, 0, 0, 300, 0,lienzo);


