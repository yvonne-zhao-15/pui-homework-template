const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const cuisineType = params.get('cuisine');

class CuisineClass {
  constructor(cuisineType){
      this.type = cuisineType;
  }
};

// update heading and description based on url
function updatePage(cuisineType){
  //heading
  const heading = document.getElementById('heading');
  heading.innerText = cuisines[cuisineType].name;
  // text description
  const description = document.getElementById('description');
  description.innerText = cuisines[cuisineType].description;
  // facts box
  // heading
  const boxHeading = document.getElementById('facts-box-heading');
  boxHeading.innerText = boxHeading.innerText + ' ' + cuisineType;
  // origin
  const origin = document.getElementById('origin');
  origin.innerText = cuisines[cuisineType].origin;
  // flavors
  const flavors = document.getElementById('flavors');
  flavors.innerText = cuisines[cuisineType].flavors;
  // famous dishes
  const dish1 = document.getElementById('dishes1');
  dish1.innerText = cuisines[cuisineType].dishes[0];
  const dish2 = document.getElementById('dishes2');
  dish2.innerText = cuisines[cuisineType].dishes[1]; 

}

updatePage(cuisineType);


const dish = document.querySelectorAll('.dishes');

function updateMainContent(content){

};

dish.forEach(function(element) {
    element.addEventListener('click', function() {
      // Function to execute when the element is clicked
      console.log('Element clicked:', element.textContent);
      if (element.textContent.trim() === "Stincky Mandarin Fish"){
        document.getElementById('description').innerHTML = `
            <div style="font-weight:bold"> <span class="nav-name">Anhui</span> > Stincky Mandarin Fish </div>
            <iframe src="https://www.youtube.com/embed/SmUIJk7sFqw" frameborder="0" allowfullscreen></iframe>`
      } else{
        document.getElementById('description').innerHTML = `
            <div style="font-weight:bold"> <span class="nav-name">Anhui</span> > Fried Hairy Tofu </div>
            <iframe src="https://www.youtube.com/embed/vKUKDWwnJYs" frameborder="0" allowfullscreen></iframe>`
      }
      // updateMainContent(element.textContent);
    });
});

const AnhuiElements = document.querySelectorAll(".nav-name");
AnhuiElements.forEach(function(Anhui) {
    Anhui.addEventListener('click', function(){
    document.getElementById('description').innerText = 'Anhui cuisine, or simply Hui cuisine, is originated over 1,000 years ago from Huizhou, the current Shexian County at the foot of Yellow Mountain in Anhui Province. Anhui cuisine is one of the eight Chinese cuisines. The ingredients are mostly from the wild, and the flavor is light. Anhui cuisine attaches importance to dietetic invigoration with natural ingredients. The representative dishes and Anhui cuisine desserts include Stinky Mandarin Fish, Fried Hairy Tofu, Steamed Partridge, Stewed Bamboo Shoots of Wenzheng Mountain, Huangshan Stewed Pigeon, Li Hongzhang Chop Suey, etc.'
    });
});