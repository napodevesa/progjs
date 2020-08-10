const express = require("express"); //require = npm install librerías
const aplicacion = express();
 
aplicacion.get("/", inicio);


function inicio (peticion, resultado)
{
	resultado.send("Este es el home");
}

function inicio (peticion, resultado)
{
	resultado.send("Estos son los cursos");
}
 
aplicacion.listen(8989);