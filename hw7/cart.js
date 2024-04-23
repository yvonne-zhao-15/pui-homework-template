
// RollClass
class RollClass {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
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

// calculate final price
function calculatePrice(r){
    let finalPrice = ((r.basePrice + glazing[r.glazing]) * packSize[r.size]).toFixed(2);
    return parseFloat(finalPrice);
};

// function to create RollClass instance
function addNewRoll(name, glazing, pack, basePrice){
    let r = new RollClass(name, glazing, pack, basePrice);
    cart.push(r);
    return cart;
};

// update the content of HTML elements based on r
function updateElement(r) {
    const image = r.element.querySelector('.cart-img');
    const name = r.element.querySelector('#text1-name');
    const gla = r.element.querySelector('#text2-glazing');
    const pack = r.element.querySelector('#text3-pack');
    const price = r.element.querySelector('.cart-price');
    const remove = r.element.querySelector('.remove');

    let imgPath = r.type.toLowerCase() + "-cinnamon-roll.jpg";
    image.src = "../assets/products/" + imgPath;
    name.innerText = r.type + " Cinnamon Roll";
    gla.innerText = "Glazing: " + r.glazing;
    pack.innerText = "Pack Size: " + r.size;
    price.innerText = "$ " + calculatePrice(r);
    remove.addEventListener("click", function(){removeItem(r);});
}

// create a clone structure in html for input roll r 
// update the content in DOM
function createElement(r) {
    let template = document.getElementById('template');
    let clone = template.content.cloneNode(true);
    r.element = clone.querySelector('.product');
    let cartList = document.getElementById('cart-list');
    cartList.append(r.element);
    updateElement(r);
};

// sum the price of each item in the cart and display final price
function displayFinalPrice(cart){
    let finalPrice = 0;
    for (const r of cart){
        finalPrice += calculatePrice(r);
    };
    let priceElement = document.getElementById('finalPrice');
    priceElement.innerText = "$ " + finalPrice.toFixed(2);
};

// create a HTML element for each item in cart
function displayItem(){
    for (const r of cart){
        createElement(r);
    };
};

// update the count of cart items on top right of the navigation bar
function updateNumberOfItems(cart){
    let count = document.querySelector('#count');
    count.innerText = cart.length;
}

function removeItem(r){
    cart = cart.filter(item => item !== r);
    let cartList = document.getElementById('cart-list');
    cartList.removeChild(r.element);

    displayFinalPrice(cart);
    updateNumberOfItems(cart);
    localStorage.setItem("cartKey", JSON.stringify(cart));
};

// when the page loads, retrive cart, if not existed, initialize cart
function loadOrInitializeCart(){
    let jsonCart = localStorage.getItem("cartKey");
    console.log(jsonCart);
    let cart;
    // if jsonCart is not null, retrieve cart
    if (jsonCart){ 
        cart = JSON.parse(jsonCart);
    } else{
        // if jsonCart is null, initialize cart and store cart to json
        cart = [];
        localStorage.setItem("cartKey", JSON.stringify(cart));
    }
    return cart;
}

 

// create 4 rolls and add them to cart
// addNewRoll('Original', 'Sugar milk', 1, 2.49);
// addNewRoll('Walnut', 'Vanilla milk', 12, 3.49);
// addNewRoll('Raisin', 'Sugar milk', 3, 2.99);
// addNewRoll('Apple', 'Keep original', 3, 3.49);

let cart = loadOrInitializeCart();

// initial displays
displayFinalPrice(cart);
displayItem();
updateNumberOfItems(cart);
