var imagenes = [];
imagenes ["Cauchin"]= "vaca.png";
imagenes ["Pokacho"]= "pollo.png";
imagenes ["Tocinauro"]= "cerdo.png"; 


var cauchin = new Pakiman ("Cauchin", 100, 30, "verde"); //la variable cauchin es un nuevo objeto de tipo Pakiman 
var pokacho = new Pakiman ("Pokacho", 80, 50, "rojo");
var tocinauro = new Pakiman ("Tocinauro", 120, 40, "azul");

pokacho.mostrar ();
cauchin.mostrar ();
tocinauro.mostrar ();
