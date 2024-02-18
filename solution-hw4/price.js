
// from hw4 writeup
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');
class RollClass {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
};

let testing = 0;

// extract name, price, image path
const rollName = rolls[rollType];
const rollPrice = rollName.basePrice;
const rollImgPath = rollName.imageFile;

// set up objects to store information
let roll = {
    glazing: 0,
    packSize: 1,
    basePrice: rollPrice,
    finalPrice: 2.49,
    glazingName: 'Keep original',
};

const glazing = {
    'Keep original': 0,
    'Sugar milk': 0,
    'Vanilla milk': 0.5,
    'Double chocolate': 1.5,
};

const packSize = {
    '1': 1,
    '3': 3,
    '6': 6,
    '12': 12,
};

// select the dropdown menu
const selectGlazing = document.querySelector('#dropdown1');
const selectPackSize = document.querySelector('#dropdown2');

// populate options in dropdown menu
for (const p in glazing){
    var option = document.createElement('option');
    option.text = p;
    option.value = glazing[p];
    selectGlazing.add(option);
};

for (const p in packSize){
    var option = document.createElement('option');
    option.text = p;
    option.value = packSize[p];
    selectPackSize.add(option);
};


//////////////////////////////////////////////////////////////////
// hw4
const cart = [];

// update DOM elements
const heading = document.getElementById('url-type');
heading.innerText = rollType + ' Cinnamon Roll';

const image = document.getElementById('detail-image');
image.src = "../assets/products/" + rollImgPath;
//////////////////////////////////////////////////////////////////


// compute and display the final price
// update: use rollPrice as baseprice
function displayPrice(roll){
    roll.finalPrice = ((rollPrice + roll.glazing) * roll.packSize).toFixed(2);
    document.querySelector('.detail-price').innerText = '$' + roll.finalPrice;
};

// update roll.glazing when dropdown menu for glazing changes
function onSelectGlazingChange(){
    const selectedOption = selectGlazing.options[selectGlazing.selectedIndex];
    roll.glazingName = selectedOption.text;
    roll.glazing = glazing[(selectedOption.text)];
    console.log(roll.glazing);
    displayPrice(roll);
};

// update roll.packSize when dropdown menu for packSize changes
function onSelectPackSizeChange(){
    const selectedOption = selectPackSize.options[selectPackSize.selectedIndex];
    roll.packSize = packSize[(selectedOption.text)];
    displayPrice(roll);
};

//////////////////////////////////////////////////////////////////
// When users click "add to cart", store information

function onAddToCartClick(){
    let someRoll = new RollClass(rollType, roll.glazingName, roll.packSize, rollPrice);
    console.log('sssss');
    console.log(someRoll);
    cart.push(someRoll);
    console.log('sssss');
    console.log(cart);
};

displayPrice(roll);

// set onchange property 
selectGlazing.onchange = onSelectGlazingChange;
selectPackSize.onchange = onSelectPackSizeChange;

cartButton = document.querySelector('#cart-button');
console.log(cartButton);
cartButton.onclick = onAddToCartClick;



