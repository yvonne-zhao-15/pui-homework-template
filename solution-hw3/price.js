
// set up objects to store information
const roll = {
    glazing: 0,
    packSize: 1,
    basePrice: 2.49,
    finalPrice: 2.49,
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

// compute and display the final price
function displayPrice(roll){
    roll.finalPrice = ((roll.basePrice + roll.glazing) * roll.packSize).toFixed(2);
    document.querySelector('.detail-price').innerText = '$' + roll.finalPrice;
};

// update roll.glazing when dropdown menu for glazing changes
function onSelectGlazingChange(){
    const selectedOption = selectGlazing.options[selectGlazing.selectedIndex];
    roll.glazing = glazing[(selectedOption.text)];
    displayPrice(roll);
};

// update roll.packSize when dropdown menu for packSize changes
function onSelectPackSizeChange(){
    const selectedOption = selectPackSize.options[selectPackSize.selectedIndex];
    roll.packSize = packSize[(selectedOption.text)];
    displayPrice(roll);
};

// set onchange property 
selectGlazing.onchange = onSelectGlazingChange;
selectPackSize.onchange = onSelectPackSizeChange;
