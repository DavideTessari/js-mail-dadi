// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

// Genero un numero random da 1 a 6
const numbPlayer = parseInt(Math.floor((Math.random() * 6) + 1));
console.log(numbPlayer);

const numbComputer = parseInt(Math.floor((Math.random() * 6) + 1));
console.log(numbComputer);

// Determinare il vincitore
let winner;
if (numbPlayer > numbComputer) {
    winner = 'player';
    alert('il giocatore ha vinto' + ' ' + numbPlayer)
} else if (numbComputer > numbPlayer){
    winner = 'computer';
    alert('il computer ha vinto' + ' ' + numbComputer)
} else {
    alert('pareggio!!')
}
  
// Stampare i risultati
console.log(winner);
