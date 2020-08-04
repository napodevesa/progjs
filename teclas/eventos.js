var teclas = { UP:38, LEFT:37, RIGHT:39, DOWN:40};


dibujarLinea ("black", 149, 149, 151, 151, lienzo);

var texto2 = document.getElementById("texto_color");
var boton2 = document.getElementById("botoncito2");
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
	lienzo.lineWidth = 5;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath(); //cierra
}

dibujarLinea ("black", 149, 149, 151, 151, lienzo);

function dibujarTeclado(evento){

	var colorcito = texto_color.value;
	var movimiento= 10;

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
dibujarLinea ("black", 0, 300, 300, 300, lienzo);
dibujarLinea ("black", 300, 0, 300, 300, lienzo);
dibujarLinea ("black", 0, 0, 300, 0,lienzo);
