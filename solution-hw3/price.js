
// hardcode price adaptations for glazing and packSize options
const glazing = [0, 0, 0.5, 1.5];
const packSize = [1, 3, 5, 10];

// set up the object roll with its properties
const roll = {
    glazing: 0,
    packSize: 1,
    basePrice: 2.49,
    finalPrice: 2.49,
};

// add value attribute to options based on their index
// editted from ChatGPT https://chat.openai.com/ 
const glazing_options = document.querySelectorAll('#dropdown1 option');
const packSize_options = document.querySelectorAll('#dropdown2 option');
glazing_options.forEach((option, index) =>{
    option.value = index;
});
packSize_options.forEach((option, index) => {
    option.value = index;
});

// select the options that user chooses
let selectGlazing = document.querySelector('#dropdown1');
let selectPackSize = document.querySelector('#dropdown2');

// compute and display the final price
function displayPrice(roll){
    roll.finalPrice = ((roll.basePrice + roll.glazing) * roll.packSize).toFixed(2);
    document.querySelector('.detail-price').innerText = '$' + roll.finalPrice;
};

// update roll.glazing
function onSelectGlazingChange(){
    glazingIndex = parseInt(selectGlazing.value);
    roll.glazing = glazing[glazingIndex];
    displayPrice(roll);
};

// update roll.packSize
function onSelectPackSizeChange(){
    packSizeIndex = parseInt(selectPackSize.value);
    roll.packSize = packSize[packSizeIndex];
    displayPrice(roll);
};
