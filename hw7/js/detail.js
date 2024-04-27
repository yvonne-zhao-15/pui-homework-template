// get cuisineType from url
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const cuisineType = params.get('cuisine');

// update heading and description based on url
function updatePage(cuisineType){
  //header subtitle
  const heading = document.getElementById('heading');
  heading.innerText = cuisines[cuisineType].name;
  // text description
  const description = document.getElementById('text');
  description.innerText = cuisines[cuisineType].description;
  // facts box
  // heading
  const boxHeading = document.getElementById('facts-box-heading');
  boxHeading.innerText = boxHeading.innerText + ' ' + cuisineType;
  // origin
  const origin = document.getElementById('origin');
  origin.innerText = originInfo[cuisineType].origin;
  // flavors
  const flavors = document.getElementById('flavors');
  flavors.innerText = cuisines[cuisineType].flavors;
  // famous dishes
  const dish1 = document.getElementById('dishes1');
  dish1.innerText = cuisines[cuisineType].dishes[0];
  const dish2 = document.getElementById('dishes2');
  dish2.innerText = cuisines[cuisineType].dishes[1]; 
}

// Load YouTube API, code edited from ChatGPT
function start() {
  gapi.client.init({
      'apiKey': 'AIzaSyCACYHeXnER3m10ALSdTm848Ob8xWvIwpI'
  }).then(function() {
      return gapi.client.load('youtube', 'v3');
  }).then(function() {
      console.log('API ready to use');
  }, function(error) {
      console.error('Error loading GAPI client for API', error);
  });
}

gapi.load('client', start);

function searchVideos(keyword, callback, maxResults = 1) {
  var request = gapi.client.youtube.search.list({
      q: keyword,
      part: 'snippet',
      type: 'video',
      maxResults: maxResults
  });

  request.execute(function(response) {
      if (response.items.length > 0) {
          const videoID = response.items[0].id.videoId;
          callback(videoID);  // Call the callback with the video ID
      } else {
          console.log("No videos found.");
          callback(null);
      }
  });
}
// end reference

// when a signature dish is clicked, display the corresponding video of the dish 
function displayVideo(element) {
  console.log(element.textContent);
  const keyword = element.textContent + ' ' + cuisineType;
  searchVideos(keyword, function(videoID) {
      if (videoID) {
          document.getElementById('video').innerHTML = 
              `<iframe src="https://www.youtube.com/embed/${videoID}" frameborder="0" allowfullscreen></iframe>`;
      } else {
          document.getElementById('video').innerHTML = "<p>Video not found.</p>";
      }
  });
}

// render the page based on the cuisineType from url
updatePage(cuisineType);
