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
/* Vi kanske har et formulär där användaren skriver in något särskilt och vi vill
agera utefter dom förutsättningarna */

//7. Animering
/* Vi kanske skapar spel eller grafiska detaljer på sidan */

//DOM Manipulation
//Vi har 5st metoder nå våra noder på

//1.
//document.getElementById(går efter element som har unika id)
/* const title = document.getElementById('main-heading');
console.log(title); */

//2.
//document.getElementsByTagName("array-like" med element)
/* const listItem = document.getElementsByTagName('li');
console.log(listItem); */

//3.
//document.getElementsByClassName("array-like" med element)
/* const listItem = document.getElementsByClassName('list-group-item');
console.log(listItem); */

//4.
//document.querySelector("array-like" med element, väljer ut första item på listan)
/* const container = document.querySelector('div');
console.log(container); */

//4.
//document.querySelectorAll(Visar endast element och är inom en array)
/* const container = document.querySelectorAll('div');
console.log(container);
 */

//DOM Styling
/* const title = document.querySelector('#main-heading');

//Inline styling med JS, går endast med ett element i taget
title.style.color = 'blue';
 */

//Efterssom vissa metoder/funktioner är array-like så kan vi loopa
//igenom och styla noder

/* const listItems = document.querySelectorAll('.list-group-item'); */

//Går ej
//listItems.style.fontSize = '2rem';

//Vi kör en for loop som går igenom hela "arrayen" och gör ändringen på varje item
/* for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = '2rem';
} */

//Skapa element, tänk på följande: 1. välj ut elementet, 2. skapa ett elemwnt med create 3. använda det med append
//Väljer först ut ul och li från vårt dokument
/* const ul = document.querySelector('ul');
const li = document.createElement('li');

ul.append(li); */

//Modifiera text
/* li.innerText = 'Hejsan';
 */
//Om vi nu vill styla vårt nya listobjekt med samma styling som bootstrap orginalet
//så kan vi arbeta med attributet
/* li.setAttribute('class', 'list-group-item'); */

//Ta bort attributet
/* li.removeAttribute('class') */

//DOM Traversing
//Parent node
/* const ul = document.querySelector('ul'); */
/* console.log(ul.parentNode.parentNode);
console.log(ul.parentElement); */

//Child nodes
/* console.log(ul.childNodes);
console.log(ul.children); */

//Demonstrerar med färg vilken nod som jag vill ändra bakgrundsfärg på
/* console.log(ul.childNodes);
ul.childNodes[9].style.backgroundColor = 'red';
 */

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

//addEventListener
/* const grandParent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');
 */
//Loggar ut eventet som sker vid click inom diven som heter grandparent
/* grandParent.addEventListener('click', (e) => {
    console.log(e);
}); */
//Loggar ut eventet som sker vid click inom diven som heter grandparent
/* grandParent.addEventListener('click', (e) => {
    console.log(e.target);
}); */

//vid click i grandParent så kallar vi på en funktion som heter bg
/* grandParent.addEventListener('click', bg);
//bg låter oss styla bakgrunden till annan bakgrundsfärg
function bg() {
    child.style.backgroundColor = 'pink';
} */

//En global lyssnare utan elementobjekt
/* addEventListener('click', onKeyDown);
 */ //Exempelfunktion med onKeyDown
/* function onKeyDown() {
    console.log('En knapp har tryckts ned');
    child.style.backgroundColor = 'pink';
}
 */

/* function alertBtn() {
    alert('Hejsan svejsan');
}
 */

/* const element = document.getElementById('elementToChangeColor');
 */
//Lägger vi till en lyssnare för mouseover
/* element.addEventListener('mouseover', function () {
    //Ändra färgen när musen sveper över elementet
    element.style.backgroundColor = '#e74c3c';
});
 */
//Lägger vi till en lyssnare för mouseout
/* element.addEventListener('mouseout', function () {
    //Ändra färgen när musen sveper över elementet
    element.style.backgroundColor = '#000';
}); */


//Vanlig metod (global) för att kunna "lyssna" men också se vart besökarna orienterar sig någonstans
//och då kan vi även analysera detta, varför osv?
/* addEventListener('mousemove', onMouseMove);
function onMouseMove(event) {
    console.log(event.clientX, event.clientY); // Koordinat
}
 */
