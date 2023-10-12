//Skapar en tom array där vi lagrar allt som matas in på webbsidan
const cart = [];

//Skapar referenser i form av variabler av de element som finns
//på webbsidan för att sedan manipulera dom
const itemList = document.getElementById('item-list');
const totalDisplay = document.getElementById('total');
const itemNameInput = document.getElementById('item-name');
const itemPriceInput = document.getElementById('item-price');
const addItemButton = document.getElementById('add-item');

//skapar en funktion som visar upp alla produkterna
//på webbsidan
function displayCart() {
    //Rensar kundkorgen vid varje ny session
    itemList.innerHTML = '';
    let total = 0;

    //Loopa igenom alla produkterna i vår kundvagn
    for (const item of cart) {
        //Varje item/produkt ska itereras fram i en lista på webbsidan
        const listItem = document.createElement('li');

        //Nedan gör så att vi visar upp varje produkt och pris
        //i listan
        listItem.textContent = `${item.name} - ${item.price} Kr ${item.quantity} st`;

        //Använder append för att addera ett nytt listelement varje
        //gång som en ny produkt läggs till
        itemList.appendChild(listItem);

        //Nu räknar vi ihop summan av kundkorgen med variabeln som nu
        //är tom som som heter total och ligger ovanför
        total += item.price * item.quantity;
    }
    //Nedan lägger till totalpriset synligt på webbsidan
    totalDisplay.textContent = total.toFixed(2);
}

//Med nedan funktion kan vi lägga till produkten vid knapptryck samt
//kolla om produkten redan lagts till
function addItemToCart(name, price) {
    //Kollar om produkten redan har lagts till
    const existingItem = cart.find((item) => item.name === name);

    //Vi kör ett if statement för att göra åtgärder om namnet matchar eller
    //inte
    if (existingItem) {
        //Om namnet matchar ökar vi antalet i varukorgen
        existingItem.quantity++;
    } else {
        //Om inte produkten redan finns i listan så lägger vi till den med
        //push
        cart.push({ name, price, quantity: 1 });
    }

    //Uppdatera displayCart
    displayCart();
}

//Vi arbetar med event listener för att "lyssna" på förändringar
//I vårt fall så vill vi "lyssna" på om någon trycker på knappen och
//om så är fallet så ska vi köra displayCart()

addItemButton.addEventListener('click', () => {
    //Vi vill få in name och price från inputfälten
    const itemName = itemNameInput.value;
    const itemPrice = itemPriceInput.value;

    //Vi kikar på om båda inputfälten har ett värde
    if (itemName && itemPrice) {
        //Lägger till produkten i vår korg och sen rensar
        //inputs
        addItemToCart(itemName, itemPrice);
        itemName.value = '';
        itemPrice.value = '';
    }
});
