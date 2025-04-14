// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.
// Prima di scrivere il codice impostate il ragionamento nei commenti!
// Bonus:
// Applicare de controlli sull'input dell'utente


/* Raccolta dati
-chiedere all'utente il numero di chilometri
-chiedere all'utente quanti hanni ha

Esecuzione logica
-trasformo chilometri con parseFloat
-trasformo l'età con parseInt

-calcolo il costo del biglietto

-verifico quanti anni ha l'utente

Calcolo lo sconto da applicare
-SE è minorenne sconto del 20%
-SE è over 65 sconto del 40%
ALTRIMENTI sconto è 0%

-Preparo il valore da stampare settando il formato a € 2,10
*/


// Variabili
let cost;
let stringa;
let partialCost;
let discount;
let msgOutput;
let goot;
console.log(cost);
// Raccolta dati da utente

const userAge = prompt("Inserisci la tua età");
const kmCost = 0.21;



// Converto i prompt in numeri
const userAgeInt = parseInt(userAge);

console.log(userAgeInt);


// Controllo l'età inserita sia stata messa in cifre
if (isNaN(userAgeInt)) {

    msgOutput = `Inserisci un'età in cifre`;
}
else {

    if (userAgeInt <= 18) {
        if (userAgeInt < 14) {
            msgOutput = `Sei un po' troppo minorenne, torna quando sarai più grande`;
            goot = false;
        }
        else {
            discount = 20 / 100;
            stringa = `Dato che hai ${userAgeInt} anni abbiamo applicato uno sconto del 20% `;
            goot = true;
        }
    }

    else if (userAgeInt > 65) {
        if (userAgeInt <= 120) {
            discount = 40 / 100;
            stringa = `Dato che hai ${userAgeInt} anni abbiamo applicato uno sconto del 40% `;
            goot = true;
        }
        else {
            msgOutput = `Sei un po' troppo anziano`;
            goot = false;
        }
    }
    else {
        discount = 1;
        stringa = `Dato che hai ${userAgeInt} anni non abbiamo potuto applicare nessuno sconto`;
        goot = true;
    }


    if (goot == true) {
        const userKm = prompt("Inserisci quanti chilometri dovrai percorrere");
        const userKmFloat = parseFloat(userKm);
        console.log(userKmFloat);

        if (isNaN(userKmFloat)) {

            msgOutput = `Inserisci una distanza in cifre`;

        }
        else {



            cost = kmCost * userKmFloat * discount;
            const finalcost = cost.toFixed(2);
            msgOutput = `${stringa} e il costo del biglietto è €${finalcost} `;

        }
    }



}

console.log(msgOutput);






