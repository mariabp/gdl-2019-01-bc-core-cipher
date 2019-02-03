"use strict";

let cipherSubmit = document.querySelector('#ciphersubmit');
let decipherSubmit = document.querySelector('#deciphersubmit');
let resetButton = document.querySelector('#reset');

let string = document.querySelector('#text');
let offset = document.querySelector('#choice');
let cipheredText = document.querySelector('#cipheredtext');

//botones
cipherSubmit.addEventListener('click', validateFormCipher);
decipherSubmit.addEventListener('click', validateFormDecipher);
resetButton.addEventListener('click', resetForm);

function validateFormCipher() {
	validateFormText();
	if (validateFormText() === true) {
		cipher.encode();
	}
}

function validateFormDecipher() {
	validateFormText();
	if (validateFormText() === true) {
		cipher.decode();
	}
}

function validateFormText() {
	if (string.value.length < 1) {	
		string.placeholder = "¡Es necesario que escribas algo!";
		string.style.backgroundColor = "rgb(248, 126, 126)";
		string.value = "";
	} else {
		string.style.backgroundColor = "rgba(121, 116, 185, 1)";
		return true;
	}
}

function resetForm() {
	offset.value = "1";
	string.value = "";
	string.placeholder = "Escribe aquí lo que quieras cifrar o descifrar...";
	cipheredText.innerHTML = "Aquí aparecerá tu resultado...";
	string.style.backgroundColor = "rgba(121, 116, 185, 1)";
	offset.style.backgroundColor = "rgba(121, 116, 185, 1)";
}