
let cipheredLetter = '';
let cipheredPhrase = '';
let decipheredLetter = '';
let decipheredPhrase = '';

window.cipher = {
    encode : (offset, string) => {
      for (let i = 0; i < string.length; i++) {
        let currentLetter = string.charAt(i);
    
        let letterCode = currentLetter.charCodeAt(0);
    
        if (letterCode >= 65 && letterCode <= 90) {
          cipheredLetter = String.fromCharCode(
            (letterCode + offset - 65) % 26 + 65
          );
    
          cipheredPhrase += cipheredLetter;
        } else if (letterCode >= 97 && letterCode <= 122) {
          cipheredLetter = String.fromCharCode(
            (letterCode + offset - 97) % 26 + 97
          );
    
          cipheredPhrase += cipheredLetter;
        } 
          else {
          cipheredLetter = String.fromCharCode(letterCode);
    
          cipheredPhrase += cipheredLetter;
        }
      }
    
      return cipheredPhrase;
    },
     
    decode : (offset, string) => {
      for (let i = 0; i < string.length; i++) {
        let currentLetter = string.charAt(i);
    
        let letterCode = currentLetter.charCodeAt(0);
    
        if (letterCode >= 65 && letterCode <= 90) {
          decipheredLetter = String.fromCharCode(
            (letterCode - offset - 90) % 26 + 90
          );
    
          decipheredPhrase += decipheredLetter;
        } else if (letterCode >= 97 && letterCode <= 122) {
          decipheredLetter = String.fromCharCode(
            (letterCode - offset - 122) % 26 + 122
          );
    
          decipheredPhrase += decipheredLetter;
        } else {
          decipheredLetter = String.fromCharCode(letterCode);
    
          decipheredPhrase += decipheredLetter;
        }
      }
    
      return decipheredPhrase;
    }
  
  
  
};





