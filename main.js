const firstName = prompt("Inserisci il tuo nome");
const lastName = prompt("Inserisci il tuo cognome");
const favouriteColor = prompt("Inserisci il tuo colore preferito");
const yearOfBirth = prompt("Inserisci il tuo anno di nascita");
const age = prompt("Inserisci la tua età");

const number = "21";

document.getElementById("password").innerHTML = (firstName + lastName + favouriteColor + number)

//BONUS
document.getElementById("password_bonus").innerHTML = (firstName + lastName + favouriteColor + (parseInt(age) + 21))