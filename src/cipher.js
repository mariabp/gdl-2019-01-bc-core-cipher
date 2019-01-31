let message = document.querySelector('#text');
let offset = document.querySelector('#choice');
let cipheredText = document.querySelector('#cipheredtext');
let output = "";

window.cipher = {
    encode : (message, offset) => {
      for (let i = 0; i < message.length; i++) {
        let result = message[i];
        let code = message.charCodeAt(i);
        result = String.fromCharCode((code - 65 + offset) % 26 + 65);
        output += result;
        cipheredText.innerHTML = output;
      }
    },
     
    decode : (message, offset) => {
      for (let i = 0; i < message.length; i++) {
        let result = message[i];
        let code = message.charCodeAt(i);
        
        result = String.fromCharCode((code - 65 - offset) % 26 + 65);

      output += result;
    }

    return output;
  }
  

  
};




