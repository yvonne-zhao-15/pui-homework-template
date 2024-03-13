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

let cart = loadOrInitializeCart();

// update the count of cart items on top right of the navigation bar
function updateNumberOfItems(cart){
    let count = document.querySelector('#count');
    count.innerText = cart.length;
}

updateNumberOfItems(cart);