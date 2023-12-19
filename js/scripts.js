// dichiariamo una variabile 'let' indirizzata alla classe delle img

let switchImg;

/* Inseriamo le singole img in delle variabili con un template Literl con il quale 
integriamo la variabile della classe */
const image1 =  document.querySelector('.canvas').innerHTML = `
<img src="img/01.webp" alt="" ${switchImg}>
`;
const image2 =  document.querySelector('.canvas').innerHTML = `
<img src="img/02.webp" alt="" ${switchImg}>
`;
const image3 =  document.querySelector('.canvas').innerHTML = `
<img src="img/03.webp" alt="" ${switchImg}>
`;
const image4 =  document.querySelector('.canvas').innerHTML = `
<img src="img/04.webp" alt="" ${switchImg}>
`;
const image5 =  document.querySelector('.canvas').innerHTML = `
<img src="img/05.webp" alt="" ${switchImg}>
`;


// array delle img da inserire, posta in variabili
const imgList = [ 
     ` ${image1} ` ,
     ` ${image2} ` ,
     ` ${image3} ` ,
     ` ${image4} ` ,
     ` ${image5} ` 
      ]


document.querySelector('.canvas').innerHTML = (imgList[0])


// Faccio questo per visualizzare tutte le img nel DOM
let counter = 0
let i

// associo variabile ai bottoni
const buttonRight = document.getElementById('button-right');
const buttonLeft = document.getElementById('button-left');




// per andare avanti aggiungiamo l'evento al button
buttonRight.addEventListener('click', function(){

    counter += 1 ;
    console.log(counter)

    //ciclo for che riconosce gli indici dell'array
    for ( i = 0; i < imgList.length; i++){

        if (counter == i){

            document.querySelector('.canvas').innerHTML = (imgList[i])

        
        }

    }

})


buttonLeft.addEventListener('click', function(){

    counter -= 1 
    console.log(counter)

    for (i = imgList.length - 1 ; i >= 0; i--){

        if (counter == i){

            document.querySelector('.canvas').innerHTML = (imgList[i])

        }

    }

})