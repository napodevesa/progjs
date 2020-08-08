var resultado = document.getElementById("resultado");


var getData = function ()
{

var num = document.getElementById ("number").value;

	for (var i=1; i < num ; i++)
	{	

		if (esDivisible (i, 3)) {
	 	resultado.innerHTML = document.write("Fizz ");
	 	}

	 	if (esDivisible (i, 5)) {
	 	resultado.innerHTML = document.write("Buzz ");
	 	}

	 	if ((!esDivisible (i, 3)) && (!esDivisible (i, 5))){

		resultado.innerHTML= document.write(i);

	 	}

	 	resultado.innerHTML = document.write ("<br/>")


	}

}

function esDivisible (num, divisor)

{

	if (num % divisor == 0)
	{
		return true;
	} 
	else
	{
		return false;
	}

}

