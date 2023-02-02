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
        const modal = document.getElementById("artwork-modal");
        
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

const images = document.querySelectorAll(".artwork-image");
images.forEach(image => {
  image.addEventListener("click", () => {
    // Get the artId from the image
    const artId = image.getAttribute("data-art-id");
    
    // Get the information for the artwork
    getInfo(artId);
  });
});
   
// Get the modal & the <span> element that closes the modal
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

Image.onclick = function() {
    modal.style.display = "block";
    document.getElementById("artTitle").innerHTML = artTitle;
    document.getElementById("artArtist").innerHTML = artArtist;
    document.getElementById("artMedium").innerHTML = artMedium;
    document.getElementById("artYear").innerHTML = artYear;
}

const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");

modalClose.addEventListener("click", function () {
    modal.style.display = "none";
});