"use strict";

window.cipher = {
	encode : () => {

		let cipheredLetter = '';
		let cipheredPhrase = '';

		for (let i = 0; i < string.value.length; i++) {
			let currentLetter = string.value.charAt(i);
	
			let letterCode = currentLetter.charCodeAt(0);
	
			if (letterCode >= 65 && letterCode <= 90) {
				cipheredLetter = String.fromCharCode(
					(letterCode + Math.abs(parseInt(offset.value)) - 65) % 26 + 65
				);
	
				cipheredPhrase += cipheredLetter;
			} else if (letterCode >= 97 && letterCode <= 122) {
				cipheredLetter = String.fromCharCode(
					(letterCode + Math.abs(parseInt(offset.value)) - 97) % 26 + 97
				);
	
				cipheredPhrase += cipheredLetter;
			} 
				else {
				cipheredLetter = String.fromCharCode(letterCode);
	
				cipheredPhrase += cipheredLetter;
			}
		}

		cipheredText.innerHTML = cipheredPhrase;
		cipheredPhrase = "";

	},

	decode : () => {

		let decipheredLetter = '';
		let decipheredPhrase = '';

		for (let i = 0; i < string.value.length; i++) {
			let currentLetter = string.value.charAt(i);
	
			let letterCode = currentLetter.charCodeAt(0);
	
			if (letterCode >= 65 && letterCode <= 90) {
				decipheredLetter = String.fromCharCode(
					(letterCode - Math.abs(parseInt(offset.value)) - 90) % 26 + 90
				);
	
				decipheredPhrase += decipheredLetter;
			} else if (letterCode >= 97 && letterCode <= 122) {
				decipheredLetter = String.fromCharCode(
					(letterCode - Math.abs(parseInt(offset.value)) - 122) % 26 + 122
				);
	
				decipheredPhrase += decipheredLetter;
			} else {
				decipheredLetter = String.fromCharCode(letterCode);
	
				decipheredPhrase += decipheredLetter;
			}
		}
	
		cipheredText.innerHTML = decipheredPhrase;
		decipheredPhrase = "";
		
	}
	
};