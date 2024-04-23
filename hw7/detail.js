
const dish = document.querySelectorAll('.dishes');

function updateMainContent(content){

};

dish.forEach(function(element) {
    element.addEventListener('click', function() {
      // Function to execute when the element is clicked
      console.log('Element clicked:', element.textContent);
      if (element.textContent.trim() === "Stincky Mandarin Fish"){
        document.getElementById('description').innerHTML = `
            <div style="font-weight:bold"> Stincky Mandarin Fish </div>
            <iframe src="https://www.youtube.com/embed/SmUIJk7sFqw" frameborder="0" allowfullscreen></iframe>`
      } else{
        document.getElementById('description').innerHTML = `
            <div style="font-weight:bold"> Fried Hairy Tofu </div>
            <iframe src="https://www.youtube.com/embed/vKUKDWwnJYs" frameborder="0" allowfullscreen></iframe>`
      }
      

      // updateMainContent(element.textContent);
    });
});