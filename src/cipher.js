"use strict";

window.cipher = {
	
	encode : (offset, string) => {

		let cipheredLetter;
		let cipheredPhrase = "";

		for(let i = 0; i < string.length; i++) {
			
			let currentLetter = string.charAt(i);
	
			let letterCode = currentLetter.charCodeAt(0);
			
			if (letterCode >= 65 && letterCode <= 90) {

				cipheredLetter = String.fromCharCode((letterCode + Math.abs(parseInt(offset)) - 65) % 26 + 65);
	
				cipheredPhrase += cipheredLetter;
				

			} else if (letterCode >= 97 && letterCode <= 122) {

				cipheredLetter = String.fromCharCode((letterCode + Math.abs(parseInt(offset)) - 97) % 26 + 97);
	
				cipheredPhrase += cipheredLetter;

			} else {

				cipheredLetter = String.fromCharCode(letterCode);
	
				cipheredPhrase += cipheredLetter;
				}
			
			}

			return cipheredPhrase;

		},
			

	decode : (offset, string) => {

		let decipheredLetter;
		let decipheredPhrase = "";

		for (let i = 0; i < string.length; i++) {

			let currentLetter = string.charAt(i);
	
			let letterCode = currentLetter.charCodeAt(0);
	
			if (letterCode >= 65 && letterCode <= 90) {

				decipheredLetter = String.fromCharCode((letterCode - Math.abs(parseInt(offset)) - 90) % 26 + 90);

				decipheredPhrase += decipheredLetter;

			} else if (letterCode >= 97 && letterCode <= 122) {

				decipheredLetter = String.fromCharCode((letterCode - Math.abs(parseInt(offset)) - 122) % 26 + 122);

				decipheredPhrase += decipheredLetter;

			} else {

				decipheredLetter = String.fromCharCode(letterCode);

				decipheredPhrase += decipheredLetter;

			}

		}

		return decipheredPhrase;

	},

};