let string = document.querySelector('#text');
let offset = document.querySelector('#choice');
let cipherSubmit = document.querySelector('#ciphersubmit');
let cipheredText = document.querySelector('#cipheredtext');

cipherSubmit.addEventListener('onclick', cipher.encode());
decipherSubmit.addEventListener('onclick', cipher.decode());