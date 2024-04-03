const textArea = document.querySelector('textarea');
let counter = document.querySelector('#counter');
const switchModeBtn = document.querySelector('#toggle');

let mode = "characters";

switchModeBtn.addEventListener( 'click', () => {
    if(mode === "characters") {
        mode = 'words';
        switchModeBtn.textContent = 'Contar caracteres';        
    } else {
        let count = 0;

        mode = "characters"
        switchModeBtn.textContent = "Contar palavras";        
    };
    textArea.dispatchEvent(new Event('input'));
});


textArea.addEventListener('input', () => {    
    if(mode === "characters") {
        let count = 0;

        count = textArea.value.length;
        counter.textContent = `${count} caractere(s)`;
       
   } else {
    let count = 0
    const words = textArea.value.trim().split(" ");
    count = textArea.value.trim() === '' ? 0 : count = words.length;
    counter.textContent = `${count} palavra(s)`;
   };
});
