//Formulär
//Komma åt värden från formulär

//Exempel 1 med radioknappar
//Hämta referenser från vårt HTML dokument
/* const colorForm = document.getElementById('colorForm');
const selectedColorDisplay = document.getElementById('selectedColor');

//funktion för att kunna visa den valda färgen
function displaySelectedColor() {
    //selectedColor gör en inhämtning från våra inputs (value) och
    //kikar på om någon är ":checked"
    const selectedColor = document.querySelector(
        'input[name="color"]:checked'
    ).value;
    //Av ren rutin så loggar jag först innan jag använder datan/värdena för att
    //se att allt fungerar
    console.log(selectedColor);
    //Här använder vi textContent (manipulation av nod) för att visa upp
    //vilken färg vi valt
    selectedColorDisplay.textContent = `Ditt val: ${selectedColor}`;
}

//Funktionen ovan fungerar ej om vi ej på något sätt "kickar" igång den
//i det här så har vi använt oss av addEventListener
colorForm.addEventListener('change', displaySelectedColor);
 */

//Exempel 2 med radioknappar
//Hämtar referenser
//Vid formulärhantering glöm ej att hämta HELA formuläret också
/* const nameForm = document.getElementById('nameForm');
//Hämtar input
const nameInput = document.getElementById('name');
//Hämtar det id (p-tagg) som ska rendera ut det värdet vi skrivit in
const displayedName = document.getElementById('displayedName');

//Funktion för att hantera formuläret när det SKICKAS
nameForm.addEventListener('submit', function (event) {
    //Förhindra att sidan laddas om när formuläret ska skickas
    event.preventDefault();
    //använder en variabel "enteredName" som inhämtar inputens värde
    const enteredName = nameInput.value;
    //Loggar som vanligt allt för att hitta fel
    console.log(enteredName);
    //Visa namnet på sidan
    displayedName.textContent = `Ditt namn är: ${enteredName}`;
});
 */

//Webstorage
//Lagrar information i webbläsaren, antingen permanent (localStorage)
//eller tillfälligt (sessionStorage)

//sessionStorage
//setItem
//lagra data i sessionStorage
/* sessionStorage.setItem('Work', 'Educator');
 */ //getItem
//Hämta data från sessionStorage för att exempelvis kunna arbeta med det
/* console.log(sessionStorage.getItem('Work'));
 */
//Hämta data med en variabel
/* const userName = sessionStorage.getItem('Work');
//Nu kan vi inhämta variabel userName och jobba med objektet
//men, i nedan fall loggar vi endast detta
console.log(userName);
 */

//localStorage
//Lagrar permanent oavsett o jag stänger ned hela webbläsaren eller inte
//Spara någon localStorage
/* localStorage.setItem('email', 'richard.carlsson@iths.se'); */
/* const email = localStorage.getItem('email');
console.log(email); */

//lagra javascript objekt in i storage
//då måste konvertera javascript objektet till strängform för att det
//ska kunna lagras

//Vi skapar ett JS objekt
/* const user = { name: 'Richard', age: '18' };
 */ //Vi konverterar vårt js objekt innan vi lagrar det i localstorage
/* localStorage.setItem('user', JSON.stringify(user)); */

//Vi skapar en variabel som sköter inhämtningen
/* const userJSON = localStorage.getItem('user');

//Efterssom objektet ovan (userJSON) är i json strängformatet så måste
//vi använda parse för att få ut det i js objekt
const parsedUser = JSON.parse(userJSON);
console.log(parsedUser); */

//Vid formulär och localStorage
//Anteckningsblock

//Hämta referenser till mitt HTML dokument
const noteInput = document.getElementById('note');
const saveButton = document.getElementById('saveNote');
const noteList = document.getElementById('noteList');

//Funktion för att hämta och visa sparade anteckningar från localStorage
function displaySavedNotes() {
    //noteList.innerHTML = ''; //Rensa listan för att unbdvika duplicerade anteckningar
    //Itererar allt som är lagrat i JSON objektet som finns i localStorage
    for (let i = 0; i < localStorage.length; i++) {
        //hämta nyckeln i storage
        const key = localStorage.key(i);
        //hämtar värdena kopplat till nyckeln med hjälp av getItem
        const noteText = localStorage.getItem(key);
        //Samtidigt som iterationen pågår så kan vi skapa listan med en gång
        const listItem = document.createElement('li');
        //Sätter texten till mina itererade list objekt, annars får vi bara tomma li tillbaka
        listItem.textContent = noteText;
        //Lägger till listobjektet i listan med append (kom ihåg "skapar list noder" så behöver vi create samt append )
        noteList.append(listItem);
    }
}

//En ny funktion med en lyssnare som lyssnar på spara knappen
//Vi vill med denna funktionen också ta in de värdena som finns i textarea fältet
saveButton.addEventListener('click', function () {
    //lagrar värdet från textfältet i variablen noteText
    const noteText = noteInput.value;
    //Med en if-sats så kan vi utesluta att vi lagrar tomma värden
    if (noteText) {
        const timestamp = new Date().getTime; //Skapar ett unikt nyckelvärde
        //nu ska vi lagra vår text(värdet) i vårt localstorage
        localStorage.setItem(timestamp, noteText); //Sparar anteckningen
        //Rensa textfältet efter att anteckningen sparats
        noteInput.value = '';
        displaySavedNotes(); //förutom att lagra det i localstorage som vi gör i denna
        //funktion så vill vi ju att varje objekt ska listas ut på websidan med hjälp
        //av vår funktion ovan
    }
});

//visa sparade anteckningar när sidan laddas
displaySavedNotes();
