// Mail

// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Per la soluzione di questo esercizio NON è consentito utilizzare .includes di js!
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?

// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


// Lista email
const emailList = ['pippofranco01@gmail.com', 'pippofranco02@gmail.com', 'pippofranco03@gmail.com', 'pippofranco04@gmail.com', 'pippofranco05@gmail.com', 'pippofranco06@gmail.com', 'pippofranco07@gmail.com', 'pippofranco08@gmail.com', 'pippofranco09@gmail.com', 'pippofranco10@gmail.com'];
// Chiedo l’email all'utente
const userEmail = prompt('Scrivi la tua email');

// Controllare che sia nella lista di chi può accedere,
let emailAccess = false;
// Scorrere l'elenco delle email
for (let i = 0; i < emailList.length; i++) {
    const email = emailList[i];
    // Per ogni email:
    // Controllo se l'email attuale nel ciclo è uguale a quella dell'utente
    if(email === userEmail) {
    emailAccess = true;
    }
}
// Alla fine del ciclo se nella variabile vedo che l'email è presente in lista stampo 'Sei invitato 😎'
// altrimenti stampo 'Non sei invitato 😥'
if (emailAccess === true) {
    alert('Sei invitato 😎');
} else {
    alert('Non sei invitato 😥');
}