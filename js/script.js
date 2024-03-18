/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

/* <div class="boxes"></div>
    <span> numero </span> */

document.querySelector('.btn').addEventListener ('click',function(){
    console.log('clickPlay');
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

/*
Il computer deve generare 16 numeri casuali: le bombe. 
Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

*/

let list = [];
console.log(list); 

for(let i = 0; i <= 100;i++){
    let arrayNumbers = (i + 1);  
    // console.log(i);
    list.push(arrayNumbers);
}

// numeri random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
/*
let isFound = false;
let randomNumber ;

while ( isFound === false){
    randomNumber = getRandomInt(min,max);

    if(blacklist.includes(randomNumber) ===false){
        isFound = true; 
    }
    return randomNumber;
}
*/