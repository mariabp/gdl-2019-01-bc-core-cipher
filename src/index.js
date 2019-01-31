function checkMessage() {
    if (message.value.length < 1) {
      message.placeholder = "¡Por favor escribe un mensaje más largo!";
    } else {
    
      cipher.encode(message, offset);
    }
}