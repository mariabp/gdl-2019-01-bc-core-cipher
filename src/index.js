"use strict";

let cipherSubmit = document.querySelector('#ciphersubmit'); // Llamo al elemento del botón CIFRAR en el HTML
let decipherSubmit = document.querySelector('#deciphersubmit');// Llamo al elemento del botón DESCIFRAR en el HTML
let resetButton = document.querySelector('#reset');// Llamo al elemento del botón RESET en el HTML

let offsetId = document.querySelector('#offsetnumber');// Llamo al elemento del HTML donde el usuario elige desplazamiento
let stringId = document.querySelector('#text');// Llamo al elemento del HTML donde el usuario ingresa texto

let cipheredText = document.querySelector('#cipheredtext');// Llamo al elemento donde aparece el resultado esperado en el HTML

cipherSubmit.addEventListener('click', validateForm);// Botón Cifrar
decipherSubmit.addEventListener('click', validateForm);// Botón Descifrar
resetButton.addEventListener('click', resetForm);// Botón Reset

/*

validateForm es la función llamada al dar click en el botón de cifrar o descifrar.

Su trabajo es validar el texto ingresado; Si el número de caracteres es menor que uno,
cambia su placeholder a una advertencia así como el color de su fondo a rojo, y por último, 
vuelve a dejar vacío el valor del campo donde se ingresa el texto.

Si pasa la prueba condicional anterior, entonces el color del fondo se cambia a su predeterminado (esto es por si se 
equivocaron antes y el fondo del campo está ya de color rojo), y después corre la función
cipher.decode o cipher.encode dependiendo del botón al cual se le dio el click.

*/

function validateForm(event) {

	let offset = offsetId.value;
	let string = stringId.value;

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
	offsetId.value = 1;
	stringId.value = "";
	stringId.placeholder = "Escribe aquí lo que quieras cifrar o descifrar...";
	cipheredText.innerHTML = "Aquí aparecerá tu resultado...";
	stringId.style.backgroundColor = "rgba(121, 116, 185, 1)";
	offsetId.style.backgroundColor = "rgba(121, 116, 185, 1)";
}