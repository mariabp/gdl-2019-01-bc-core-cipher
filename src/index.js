// let string = document.querySelector('#text');
// let offset = parseInt(document.querySelector('#choice'));
let cipherSubmit = document.querySelector('#ciphersubmit');
// let cipheredText = document.querySelector('#cipheredtext');
let decipherSubmit = document.querySelector('#deciphersubmit');



//botones
cipherSubmit.addEventListener('onclick', cipher.encode());
decipherSubmit.addEventListener('onclick', cipher.decode());