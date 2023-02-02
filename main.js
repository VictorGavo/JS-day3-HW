// Function to get Art info when image figure is clicked
/**
 * 
 * Function gets the art info (title, artist_title, medium_display, and date_end) from the API
 */

function getInfo(artId) {
    fetch(`https://api.artic.edu/api/v1/artworks/${artId}?fields=title,artist_title,medium_display,date_end`)
        .then(response => {
            // response.json().then(function(data) {
            //     displayData(data);
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        })
};
   
// Get the modal
var modal = document.getElementById("myModal");
if (!modal) {
  console.error("Element with id 'myModal' not found.");
}

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
if (!btn) {
  console.error("Element with id 'myBtn' not found.");
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
if (!span) {
  console.error("Element with class 'close' not found.");
}

// When the user clicks on the button, open the modal and display the art information
if (btn && modal) {
  btn.onclick = function() {
    modal.style.display = "block";
    document.getElementById("art-info").innerHTML = "The Mona Lisa is a 16th century oil painting created by Leonardo da Vinci.";
  };
}

// When the user clicks on <span> (x), close the modal
if (span && modal) {
  span.onclick = function() {
    modal.style.display = "none";
  };
}

// When the user clicks anywhere outside of the modal, close it
if (modal) {
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}