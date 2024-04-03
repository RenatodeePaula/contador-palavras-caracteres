const textArea = document.querySelector('textarea');
let counter = document.querySelector('#counter');
const switchModeBtn = document.querySelector('#toggle');

let mode = "characters";

switchModeBtn.addEventListener( 'click', () => {
    if(mode === "characters") {
        mode = 'words';
        switchModeBtn.textContent = 'Contar caracteres';        
    } else {
        mode = "characters"
        switchModeBtn.textContent = "Contar palavras";        
    };
    textArea.dispatchEvent(new Event('input'));
});


textArea.addEventListener('input', () => {    
    let count = 0;
    if(mode === "characters") {
        count = textArea.value.length;
        counter.textContent = `${count} caractere(s)`;
       
   } else {
        const words = textArea.value.trim().split(" ");
        count = textArea.value.trim() === '' ? 0 : words.length;
        counter.textContent = `${count} palavra(s)`;
   };
});
