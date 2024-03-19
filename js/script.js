/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

/* <div class="boxes"></div>
    <span> numero </span> */

    // creo la mia variabile prendendo l'id
const elLevel = document.getElementById('level');

//elLevel.addEventListener('change', play);

//creo la funzione principale del gioco
function play(){

    const elBox = document.getElementById('boxWrapper');
    //azzero il box ogni volta che vene chiamata la funzione
    elBox.innerHTML= '';

    let cellsPerRow ; //numero di celle che mi servono per lato ^2
    let cellsNumber = setLevel (); // creo una funzione per il livello scelto dall'utente

    cellsPerRow = Math.sqrt(cellsNumber);

    //creo i quadrati (boxes)
    for(let i = 1; i <= cellsNumber ; i++){
        let box = generateBoxes(cellsPerRow, i);
        elBox.appendChild(box);
        console.log(box)
    }
}

// creo la funzione per ritornare il valore della select
function setLevel(){
    let level = elLevel.value;
    console.log(level);
    let cellsNumber;
    switch (level){
        case 'easy':
            cellsNumber = 100;
            break;
        case 'medium':
            cellsNumber = 81;
            break;
        case 'hard':
            cellsNumber = 49;
            break;
    }
    return cellsNumber;
}

/**
 * drawBox
 * funzione che crea elemento html div (boxes)
 * aggiungere l'evento click ad ogni box
 * @param {*} dim (dimensioni)
 * @param {*} content (contenuto)
 * @returns 
 */

function generateBox(dim, content){
    const newBox = document.createElement('div');
    newBox.classList.add('boxes');
    newBox.style.setProperty('--ms-box-dim', `calc(500px / ${dim})`);
    newBox.innerHTML = `
    <span> ${content} </span>
    `;
}









/*document.querySelector('.btn').addEventListener ('click',function(){
    //console.log('clickPlay');
   clickPlay(100);
})

function clickPlay (numberBoxes){
    const box = document.getElementById('boxWrapper');
    console.log(box);
    box.innerHTML = '';

    for (let i = 0; i < numberBoxes ; i++){

    const newBox = document.createElement('div');
    newBox.classList.add('boxes');

    newBox.addEventListener('click', function(){
        newBox.classList.add('clicked');
    });

    const spanContent = document.createElement('span');
    spanContent.append(i + 1);

    newBox.appendChild(spanContent);
    box.appendChild(newBox);
}
}
*/
/*
Il computer deve generare 16 numeri casuali: le bombe. 
Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

*/

/*let list = [];
console.log(list); 
let numberBombs;

for(let i = 0; i <= 100; i++){
    let arrayNumbers = (i + 1);  
    // console.log(i);
    list.push(arrayNumbers);
}

function generateUniqueRandomNumber(min, max,arrayLength){
    let check = false;
    let randomNumber;
    let blacklist = [];
    console.log(blacklist);
    while (blacklist.length <= arrayLength){
        randomNumber = getRndInteger (min,max);
        
    } if (blacklist.includes(randomNumber) === false){
        blacklist.push (randomNumber);
        check = true;
    }
    return randomNumber;
}
*/

// numeri random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}