let output="";



window.cipher = {
    encode : (string, offset) => {
    
      for (let i = 0; i < string.length; i++) {
        let result = string[i];
        let code = string.charCodeAt(i);
        result = String.fromCharCode((code - 65 + offset) % 26 + 65);
        output += result;
        cipheredText.innerHTML = output;
        
      }
     
      return output;
     },
     
    decode : (string, offset) => {
      
      for (let i = 0; i < string.length; i++) {
        let result = string[i];
        let code = string.charCodeAt(i);
          result = String.fromCharCode((code + 65 - offset) % 26 + 65);
     
        output += result;
        cipheredText.innerHTML = output;
      }
     
      return output;
     }
  
  
};