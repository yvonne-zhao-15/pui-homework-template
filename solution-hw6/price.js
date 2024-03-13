
// from hw4 writeup - start
// parse url parameters
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');
// RollClass
class RollClass {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
};
// from hw4 writeup - end

// extract name, price, image path from url
const rollName = rolls[rollType];
const rollPrice = rollName.basePrice;
const rollImgPath = rollName.imageFile;

// set up objects to store information

// initialized to default values, store current roll info
// properties are updated when user select an option in dropdown menu
// Opt stands for option, and Adp stands for price adaptation
let currRoll = {
    glazingOpt: 'Keep original',
    glazingAdp: 0, 
    packSizeOpt: '1',
    packSizeAdp: 1,
    basePrice: rollPrice,
    finalPrice: rollPrice,
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
    '6': 5,
    '12': 10,
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

////////////////////////////
// hw4
const cart = [];

// update heading and img src based on url
const heading = document.getElementById('url-type');
heading.innerText = rollType + ' Cinnamon Roll';
const image = document.getElementById('detail-image');
image.src = "../assets/products/" + rollImgPath;
////////////////////////////


// compute and display the final price
// update: use rollPrice as baseprice
function displayPrice(currRoll){
    currRoll.finalPrice = ((currRoll.basePrice + currRoll.glazingAdp) * currRoll.packSizeAdp).toFixed(2);
    document.querySelector('.detail-price').innerText = '$' + currRoll.finalPrice;
};

// update currRoll.glazingOpt and .glazingAdp
// when dropdown menu for glazing changes
function onSelectGlazingChange(){
    const selectedOption = selectGlazing.options[selectGlazing.selectedIndex];
    currRoll.glazingOpt = selectedOption.text;
    currRoll.glazingAdp = glazing[currRoll.glazingOpt];
    displayPrice(currRoll);
};

// update currRoll.packSizeOpt and .packSizeAdp 
// when dropdown menu for packSize changes
function onSelectPackSizeChange(){
    const selectedOption = selectPackSize.options[selectPackSize.selectedIndex];
    currRoll.packSizeOpt = selectedOption.text;
    currRoll.packSizeAdp= packSize[currRoll.packSizeOpt];
    displayPrice(currRoll);
};

// When users click "add to cart", store curr roll information
function onAddToCartClick(){
    let someRoll = new RollClass(rollType, currRoll.glazingOpt, currRoll.packSizeOpt, rollPrice);
    cart.push(someRoll);
    console.log(cart);
};

// set onchange property for 2 dropdown menu and 'add to cart' button
selectGlazing.onchange = onSelectGlazingChange;
selectPackSize.onchange = onSelectPackSizeChange;
cartButton = document.querySelector('#cart-button');
cartButton.onclick = onAddToCartClick;

// display initial price
displayPrice(currRoll);


