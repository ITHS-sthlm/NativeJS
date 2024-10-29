//Formulär
//Komma åt värden från formulär

//Exempel 1 med radioknappar
//Ta fram referenser(noderna)
const colorForm = document.getElementById('colorForm');
const selectedColorDisplay = document.getElementById('selectedColor');

//funktion för att visa vilken färg som är vald och skriva ut detta på sidan
/* function displaySelectedColor() {
    const selectedColor = document.querySelector(
        'input[name="color"]:checked'
    ).value;
    //kontroll att funktion fungerar
    console.log(selectedColor);
    selectedColorDisplay.textContent = `Ditt val:${selectedColor} `;

} */

// Hitta input-fältet med id 'inputField'
/*  const inputField = document.getElementById('inputField');

 // Lägg till en event listener för 'keydown'-eventet
 inputField.addEventListener('keydown', function(event) {
     // Logga ut vilken knapp som trycktes ned
     console.log(`Du tryckte ned: ${event.key}`);
 });
 */

//Webstorage
//Lagrar information i webbläsaren, antingen permanent (localStorage)
//eller tillfälligt (sessionStorage)

//sessionStorage
//setItem
//lagra data i sessionStorage
sessionStorage.setItem('Work', 'Educator');

//Hämta data från sessionStorage för att exempelvis kunna arbeta med det
console.log(sessionStorage.getItem('Work'));

//Hämta data med en variabel
const userName = sessionStorage.getItem('Work');
console.log(userName);

//localStorage
//Lagrar permanent oavsett om jag stänger ned hela webbläsaren eller inte
localStorage.setItem('Work', 'Educator');
localStorage.setItem('email', 'richard.carlsson@iths.se');

const email = localStorage.getItem('email');
console.log(email);

//lagra javascript objekt in i storage

//Vi skapar ett JS objekt
const user = { name: 'Richard', age: 44 };
localStorage.setItem('user', JSON.stringify(user));

//Vi skapar en variabel som sköter inhämtningen

//Efterssom objektet ovan (userJSON) är i json strängformatet så måste
//vi använda parse för att få ut det i js objekt
const userJSON = localStorage.getItem('user');
console.log(userJSON);

//Parse
const parsedUser = JSON.parse(userJSON);
console.log(parsedUser);

/* console.log(document.querySelectorAll('input[type="checkbox"]')[0].checked); // false
console.log(document.querySelectorAll('input[type="checkbox"]')[1].checked); // true */

console.log(document.querySelector('input[name="nationality"]').value); // danish
