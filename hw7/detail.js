
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