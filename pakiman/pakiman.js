class Pakiman
{
	constructor (n, vida, atak)
	{
		this.imagen = new Image();
		this.nombre = n;
		this.vida = vida;
		this.ataque = atak;
		//this.tipo = "tierra";	this es una referencia a la instancia cauchin
		this.imagen.src = imagenes [this.nombre];
	}

	hablar()
	{
		alert (this.nombre)
	}

	mostrar()
	{ 	
		document.body.appendChild(this.imagen);
		document.write ("<p>");
		document.write("<strong>"+this.nombre + "</strong> \n <br/>")
		document.write("VIDA: "+ this.vida +  "\n <br/> ")
		document.write("ATAQUE: "+this.ataque + "\n <br/> <hr/>")
		document.write ("</p>");

	}

}