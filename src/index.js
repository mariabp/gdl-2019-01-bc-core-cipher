"use strict";

let cipherSubmit = document.querySelector('#ciphersubmit'); // Llamo al elemento del botón CIFRAR en el HTML
let decipherSubmit = document.querySelector('#deciphersubmit');// Llamo al elemento del botón DESCIFRAR en el HTML
let resetButton = document.querySelector('#reset');// Llamo al elemento del botón RESET en el HTML

const circleButton = document.querySelector('#circle');
const squareButton = document.querySelector('#square');
const starButton = document.querySelector('#star');
const keys = document.querySelectorAll('.keys');

let cipheredText = document.querySelector('#cipheredtext');// Llamo al elemento donde aparece el resultado esperado en el HTML

let stringId = document.querySelector('#text');// Llamo al elemento del HTML donde el usuario ingresa texto

/*

validateForm es la función llamada al dar click en el botón de cifrar o descifrar.

Su trabajo es validar el texto ingresado; Si el número de caracteres es menor que uno,
cambia su placeholder a una advertencia así como el color de su fondo a rojo, y por último, 
vuelve a dejar vacío el valor del campo donde se ingresa el texto.

Si pasa la prueba condicional anterior, entonces el color del fondo se cambia a su predeterminado (esto es por si se 
equivocaron antes y el fondo del campo está ya de color rojo), y después corre la función
cipher.decode o cipher.encode dependiendo del botón al cual se le dio el click.

*/

let offset = 0;

function validateForm(event) {

	let string = stringId.value;

	if (offset === 0) {
		cipheredText.innerHTML = 'Es necesario que elijas un tipo de cifrado (círculo, cuadro o estrella).';
		cipheredText.style.backgroundColor = "rgb(248, 126, 126)";
		return;
	}

	if (string.length < 1) {	
		stringId.placeholder = "¡Es necesario que escribas algo!";
		stringId.style.backgroundColor = "rgb(248, 126, 126)";
		stringId.value = "";

	} else if (event.target === cipherSubmit) {
		stringId.style.backgroundColor = "rgba(121, 116, 185, 1)";
		cipheredText.innerHTML = cipher.encode(offset, string);

	} else {
		stringId.style.backgroundColor = "rgba(121, 116, 185, 1)";
		cipheredText.innerHTML = cipher.decode(offset, string);
	}

}

const setOffsetTo = (event) => {

	let eventId = event.currentTarget.id;
	cipheredText.style.backgroundColor = "rgb(158, 154, 216)";
	cipheredText.innerHTML = "Aquí aparecerá tu resultado...";
	
	if (eventId === "circle") {
		offset = 15;
	}

	if (eventId === "square") {
		offset = 20;
	}
	
	if (eventId === "star") {
		offset = 25;
	}


	let eventIdDiv = document.querySelector(`#${eventId}`);

	keys.forEach((element) => {
		
		element.style.backgroundColor = "rgb(149, 145, 201)";
		element.style.boxShadow = "inset 0px 0px 0px 0px rgba(0, 0, 0, 0)";

	});

	eventIdDiv.style.backgroundColor = "rgb(128, 124, 184)";
	eventIdDiv.style.boxShadow = "inset 0px 0px 4px 2px rgba(0, 0, 0, 0.5)";

};

/*

Función que es llamada al darse click en botón RESET.

Primero cambia el valor de offset a 1 otra vez.

Después regresa a ser un campo vacío el elemento donde el usuario ingresa el texto.

Cambia la frase del placeholder por la misma del HTML para que se vea como recién cargada.

Cambia la frase del elemento donde aparece el resultado por la misma del HTML para que se vea 
como recién cargada.

Cambia el color del background del elemento donde el usuario ingresa el texto, al color inicial 
para que se vea como recién cargada.

Cambia el color del background del elemento donde el usuario selecciona el desplazamiento, 
al color inicial para que se vea como recién cargada.

*/

function resetForm() {

	offset = 0;
	stringId.value = "";
	stringId.placeholder = "Escribe aquí lo que quieras cifrar o descifrar...";
	cipheredText.innerHTML = "Aquí aparecerá tu resultado...";
	cipheredText.style.backgroundColor = "rgb(158, 154, 216)";
	stringId.style.backgroundColor = "rgba(121, 116, 185, 1)";
	
	keys.forEach((element) => {
		
		element.style.backgroundColor = "rgb(149, 145, 201)";
		element.style.boxShadow = "inset 0px 0px 0px 0px rgba(0, 0, 0, 0)";

	});

}

cipherSubmit.addEventListener('click', validateForm);// Botón Cifrar
decipherSubmit.addEventListener('click', validateForm);// Botón Descifrar
resetButton.addEventListener('click', resetForm);// Botón Reset

circleButton.addEventListener('click', setOffsetTo);
squareButton.addEventListener('click', setOffsetTo);
starButton.addEventListener('click', setOffsetTo);