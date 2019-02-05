'use strict';

let cipherSubmit = document.querySelector('#ciphersubmit'); // -->Llamo al elemento del botón CIFRAR en el HTML
let decipherSubmit = document.querySelector('#deciphersubmit');// -->Llamo al elemento del botón DESCIFRAR en el HTML
let resetButton = document.querySelector('#reset');// -->Llamo al elemento del botón RESET en el HTML

let offsetId = document.querySelector('#choice');// -->Llamo al elemento del HTML donde el usuario elige desplazamiento
let stringId = document.querySelector('#text');// -->Llamo al elemento del HTML donde el usuario ingresa texto


let offset = document.getElementById('choice').value;// -->Llamo al valor ingresado por el usuario en el desplazamiento
let string = document.getElementById('text').value;// -->Llamo al valor ingresado por el usuario en el campo correspondiente al texto

let cipheredText = document.querySelector('#cipheredtext');//-->Llamo al elemento donde aparece el resultado esperado en el HTML

cipherSubmit.addEventListener('click', validateFormCipher);// --> Botón Cifrar
decipherSubmit.addEventListener('click', validateFormDecipher);// --> Botón Descifrar
resetButton.addEventListener('click', resetForm);// --> Botón Reset


//Función que al darse click en botón, 
//verifica que este ingresado algun texto y de ser correcto, imprime el resultado de la funcion encode
function validateFormCipher() {
	validateFormText();
	if (validateFormText() === true) {
		cipheredText.innerHTML = cipher.encode(offset,string);
	}
}

//Función que al darse click en botón, 
//llama a la funcion validateFormText, y compara su resultado a que sea true.
//De ser así, imprime el resultado de la funcion decode en el elemento cipheredText en el HTML
function validateFormDecipher() {
	validateFormText();
	if (validateFormText() === true) {
		cipheredText.innerHTML = cipher.decode(offset, string);
	}
}

//Función que es llamada por validateForm al darse click en botón descifrar.
//Su función es validar el texto ingresado: si es menor que uno,
//cambia el placeholder, el color del blackground, y
//el campo donde se ingresa el texto vuelve a estar vacío. De lo contrario,
//el color del background se queda del mismo color y retorna true, lo cual 
//permite que la función anterior sea completada exitosamente.
function validateFormText() {
	if (stringId.value.length < 1) {	
		stringId.placeholder = "¡Es necesario que escribas algo!";
		stringId.style.backgroundColor = "rgb(248, 126, 126)";
		stringId.value = "";
	} else {
		stringId.style.backgroundColor = "rgba(121, 116, 185, 1)";
		return true;
	}
}

//Función que es llamada al darse click en botón RESET
//Primero cambia el valor de offset a 1 otra vez;
//Después regresa a ser un campo vacío el elemento donde el usuario ingresa el texto;
//Cambia la frase del placeholder por la misma del HTML para que se vea como recién cargada;
//Cambia la frase del elemento donde aparece el resultado por la misma del HTML para que se vea como recién cargada;
//Cambia el color del background del elemento donde el usuario ingresa el texto, 
//al color inicial para que se vea como recién cargada;
//Cambia el color del background del elemento donde el usuario selecciona el desplazamiento, 
//al color inicial para que se vea como recién cargada;
function resetForm() {
	offsetId.value = 1;
	stringId.value = "";
	stringId.placeholder = "Escribe aquí lo que quieras cifrar o descifrar...";
	cipheredText.innerHTML = "Aquí aparecerá tu resultado...";
	stringId.style.backgroundColor = "rgba(121, 116, 185, 1)";
	offsetId.style.backgroundColor = "rgba(121, 116, 185, 1)";
}