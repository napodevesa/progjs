var teclas = { UP:38, LEFT:37, RIGHT:39, DOWN:40};

console.log(teclas);

document.addEventListener("keyup",dibujarTeclado);

function dibujarTeclado(evento){

//console.log("tecla");
console.log(evento.keyCode);

}