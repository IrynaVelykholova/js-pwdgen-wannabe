//ESERCIZIO FLORIAN

const firstName = "Mario";
const lastName = "Rossi";
const address = "Via Roma 23, Milano";
const yearOfBirth = 1968;


const fullName = firstName + " " + lastName
//const fullName = `${firstName} ${lastName}`;


console.log(firstName, lastName, address, yearOfBirth)
//concatenazione semplice
console.log("L'utente " + firstName + " " + lastName + " abita in " + address + " ed è nato nel " + yearOfBirth);
console.log("L'utente" + fullName + " abita in " + address + " ed è nato nel " + yearOfBirth);

//template literal
console.log(`L'utente ${firstName} ${lastName} abita in ${address} ed è nato nel ${yearOfBirth}`)
console.log(`L'utente ${fullName} abita in ${address} ed è nato nel ${yearOfBirth}`)

//numeri
const userAge = 2023 - yearOfBirth;
console.log(firstName + yearOfBirth); //Mario1968
console.log("2023" + yearOfBirth); //20231968
console.log(yearOfBirth + "2023"); //19682023
console.log("2023" - yearOfBirth); //55 (perchè simbolo - non ha utilità)
console.log(yearOfBirth - "2023"); //-55
console.log(firstName - yearOfBirth); //NaN not a number

//dice tipo di variabile
console.log ( typeof firstName ); //string
console.log ( typeof yearOfBirth ); //number

//con il let
let età = 2023 - yearOfBirth;
età = "cinquanta" //modifica let 

//prompt
// const firstName = prompt("Inserisci il tuo nome");
// const lastName = prompt("Inserisci il tuo cognome");
// const address = prompt("Inserisci il tuo indirizzo");
// const yearOfBirth = prompt("Inserisci il tuo anno di nascita");

// si può mettere anche parseInt(yearOfBirth) -> forza il numero