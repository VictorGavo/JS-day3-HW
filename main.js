// Function to get Art info when image figure is clicked
/**
 * 
 * Function gets the art info (title, artist_title, medium_display, and date_end) from the API
 */

function getInfo(artId) {
    fetch(`https://api.artic.edu/api/v1/artworks/${artId}?fields=title,artist_title,medium_display,date_end`)
        .then(response => response.json())
        .then(artwork => {
        // Get the modal element
        modal = document.getElementById("artwork-modal");
        
        // Populate the modal with the artwork information
        const title = document.getElementById("artTitle");
        title.innerHTML = artwork.title;
        
        const artist = document.getElementById("artArtist");
        artist.innerHTML = artwork.artistDisplayName;
        
        const medium = document.getElementById("artMedium");
        medium.innerHTML = artwork.medium;
        
        const year = document.getElementById("artYear");
        year.innerHTML = artwork.date;
        
        // Show the modal
        modal.style.display = "block";
        });
}

// Select all images and add event listeners to them.
const images = document.querySelectorAll(".img-fluid");
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function() {
        showModal(i); //imgId
    });
}

   
// Get the modal & the <span> element that closes the modal

let showModal = function(imgId) {
    modal.style.display = "block";
    document.getElementById("artTitle").innerHTML = artTitle;
    document.getElementById("artArtist").innerHTML = artArtist;
    document.getElementById("artMedium").innerHTML = artMedium;
    document.getElementById("artYear").innerHTML = artYear;
}

const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");

// modalClose.addEventListener("click", function () {
//     modal.style.display = "none";
// });