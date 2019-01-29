window.cipher = {
  // ... 
};

const encode = (message, offset) => {
  let output = "";
/*Como se que esta poniendo cada caracter?,*/
  for (let i = 0; i < message.length; i++) {
    let result = message[i];
    let code = message.charCodeAt(i);
    if (code >= 65 && code <= 90)
      result = String.fromCharCode((code - 65 + offset) % 26 + 65);

    output += result;
  }

  return output;
};




