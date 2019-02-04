"use strict";

let cipherSubmit = document.querySelector('#ciphersubmit');
let decipherSubmit = document.querySelector('#deciphersubmit');
let resetButton = document.querySelector('#reset');

let stringId = document.querySelector('#text');
let offsetId = document.querySelector('#choice');

let offset = document.getElementById('choice').value;
let string = document.getElementById('text').value;

let cipheredText = document.querySelector('#cipheredtext');

cipherSubmit.addEventListener('click', validateFormCipher);
decipherSubmit.addEventListener('click', validateFormDecipher);
resetButton.addEventListener('click', resetForm);

function validateFormCipher() {
	validateFormText();
	if (validateFormText() === true) {
		cipheredText.innerHTML = cipher.encode(offset, string);
	}
}

function validateFormDecipher() {
	validateFormText();
	if (validateFormText() === true) {
		cipheredText.innerHTML = cipher.decode(offset, string);
	}
}

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

function resetForm() {
	offsetId.value = 1;
	stringId.value = "";
	stringId.placeholder = "Escribe aquí lo que quieras cifrar o descifrar...";
	cipheredText.innerHTML = "Aquí aparecerá tu resultado...";
	stringId.style.backgroundColor = "rgba(121, 116, 185, 1)";
	offsetId.style.backgroundColor = "rgba(121, 116, 185, 1)";
}