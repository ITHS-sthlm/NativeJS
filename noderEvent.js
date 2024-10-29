//DOM
//Document = filen
//Object = Elementen, taggarna
//Model = Layout

/* Varför ska arbeta med DOM? */
//1. Dynamisk innehållsuppdatering
/* Genom javascript ändra innehållet på webbsidan utan att den behöver laddas om
samt skapar en mer användavänlig upplevelse */

//2. Interaktivitet
/* Vi skapar en interaktion med användaren, knapptryck = kommer till en ny miljö */

//3. Evenemangshantering
/* Vi anpassa oss efter en användares beteénde, mouseover känner exemplevis av
vart användaren har en benägenhet att fokusera på, på websidan*/

//4. Dynamisk styling
/* Ändra styling på vår sida beroende på event eller annat */

//5. Asynkron kommuniktion
/* Vill ladda in innehåll (noder) när sidan har laddats klart */

//6. Hantera data
/* Vi kanske har ett formulär där användaren skriver in något särskilt och vi vill
agera utefter dom förutsättningarna */

//7. Animering
/* Vi kanske skapar spel eller grafiska detaljer på sidan */

//DOM Manipulation
//Vi har 5st metoder nå våra noder på

/* //1 getelementbyid
const title = document.getElementById('main-heading');
console.log(title);

//2 getelementsbytagname (array liknande)
const listItem1 = document.getElementsByTagName('li');
console.log(listItem1);

//3 classname (array liknande)
const listItem2 = document.getElementsByClassName('list-group-item');
console.log(listItem2);

//4 queryselector (array liknande men väljer ut första item på listan)
const container = document.querySelector('li');
console.log(container);

//4 queryselector (array liknande men väljer ut första item på listan)
const container2 = document.querySelectorAll('li');
console.log(container2); */

//DOM Styling
const title = document.querySelector('#main-heading');
title.style.color = 'blue';

//Loopa igenom noder och styla om
const listItems = document.querySelectorAll('.list-group-item');

/* listItems.style.fontSize = '2rem';
 */

//Vi kör en for loop för att gå igenom hela "arrayen" och gör ändringen på varje item
for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = '2rem';
}

//Skapa element, tänk på följande: 1. välj ut elementet, 2. skapa ett elemnt med create 3. använda det med append
//Väljer ut
/* const ul = document.querySelector('ul');
const li = document.createElement('li');

ul.append(li);
 */
//Väljer först ut ul och li från vårt dokument

//Modifiera text
/* li.innerText = 'Hejsan';

//Lägg till ett attribut "setAttribute"
li.setAttribute('class', 'list-group-item');

//Ta bort attributet
li.removeAttribute('class');
 */
//DOM Traversing
//Parent node
/* const ul = document.querySelector('ul'); */
/* console.log(ul.parentNode.parentNode);
console.log(ul.parentElement); */

//Child nodes
/*
console.log(ul.childNodes);
ul.childNodes[3].style.color = 'red';
 */
//Demonstrerar med färg vilken nod som jag vill ändra bakgrundsfärg på

//Events
//Varför?

//1. Interaktivitet
/* Evenemang och lyssnare gör det möjligt att skapa interaktivitet
på webbsidor.
Användare kan interagera med olika element på sidan, som att
klicka på knappar, skicka formulärdata eller svepa över bilder
 för att se förhandsgranskningar. */

//2. Responsiva gränssnitt i realtid
/* Evenemang och lyssnare gör det möjligt för webbsidor att reagera direkt på användarens åtgärder.
Det innebär att webbapplikationen kan uppdatera sig i realtid
utan att användaren behöver ladda om sidan.
Detta skapar en smidig och snabb användarupplevelse. */

//3.Validering
/* Genom att använda händelselyssnare kan vi validera användarens
inmatning när de fyller i formulär. Till exempel kan vi kontrollera om användaren har fyllt
i alla obligatoriska fält innan de skickar formuläret. */

//4. Beteénde analys
/* Med evenemang kan vi övervaka och förstå hur användare beter sig på webbsidan. Detta gör det möjligt att samla in användardata och användarvanor
för att anpassa och förbättra användarupplevelsen. */

//5. Hantera element
/* Lyssnare och events används för att hantera olika
användargränssnittselement, som knappar, menyer och dialogrutor.
Genom att lyssna på händelser som klick eller muspekaren över kan du anpassa elementens beteende och reagera på användarens åtgärder. */

//6. Spel
/* Utmärkt för att skapa interaktiva spel */

//addeventListener
//Plocka ut referenser, dvs komma åt noderna och lägga dessa i variabler

const grandParent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

//Loggar ut eventet som sker vid klick inom div som heter grandparent
/* grandParent.addEventListener('click', (e) => {
    console.log(e.target);
}); */

//Exempel fär vi ändrar bakgrundsfärg vid klick
/* grandParent.addEventListener('click', bg);

function bg() {
    child.style.backgroundColor = 'pink';
}
 */

//en global lyssnare som gör något för oss
/* addEventListener('scroll', onKeyDown);

function onKeyDown() {
    console.log('en knapp har tryckts');
    child.style.backgroundColor = 'pink';
}
 */

//Mouseover event
/* const element = document.getElementById('elementToChangeColor');

element.addEventListener('mouseover', function () {
    element.style.backgroundColor = 'blue';
});

element.addEventListener('mouseout', function () {
    element.style.backgroundColor = 'red';
});
 */

//Vi gör en global lyssnare som identifierear vart muspekaren befinner sig

/* addEventListener('mousemove', onMouseMove);

function onMouseMove(event) {
    console.log(event.clientX, event.clientY); //Koordinaterna
} */
