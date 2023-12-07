//MILESTONE 1
// - Creiamo il markup statico
// - Costruiamo il container e inseriamo un'immagine grande al centro
// - Avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.


//MILESTONE 2
//Rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
//Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
//Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.


const containerImg = document.querySelector('.containerImg');
console.log('container Img', containerImg, containerImg);

const arrayImgHtml = [
    '<img class="dimension-foto d-block" src="img/01.webp" alt="">',
    '<img class="dimension-foto d-none" src="img/02.webp" alt="">',
    '<img class="dimension-foto d-none" src="img/03.webp" alt="">',
    '<img class="dimension-foto d-none" src="img/04.webp" alt="">',
    '<img class="dimension-foto d-none" src="img/05.webp" alt="">'
];

console.log(arrayImgHtml), typeof arrayImgHtml;

for (let i = 0; i < arrayImgHtml.length; i++){
    containerImg.innerHTML += containerImg [i];
}