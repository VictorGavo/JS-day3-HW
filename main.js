// Function to get Art info when image figure is clicked
/**
 * 
 * Function gets the art info (title, artist_title, medium_display, and date_end) from the API
 * Function assigns the data to the modal
 */
const artworkArray = [
    {id: 75644, image: "art1.jpg"},
    {id: 189595, image: "art2.jpg"},
    {id: 102164, image: "art3.jpg"},
    {id: 56682, image: "art4.jpg"},
    {id: 144969, image: "art5.jpg"},
    {id: 43060, image: "art6.jpg"},
    {id: 184324, image: "art7.jpg"},
    {id: 183077, image: "art8.jpg"},
]

function getInfo(artId) {
    const artimage = artworkArray.find(artwork => artwork.id === Number(artId));
    console.log(artimage);
    fetch(`https://api.artic.edu/api/v1/artworks/${artId}?fields=title,artist_title,medium_display,date_display`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(artwork => {
        // Get the modal element
        const modal = document.getElementById("artwork-modal");
        
        // Populate the modal with the artwork information
        const title = document.getElementById("artTitle");
        title.innerHTML = `Title: ${artwork.data.title}`;
        
        const artist = document.getElementById("artArtist");
        artist.innerHTML = `Artist: ${artwork.data.artist_title}`;
        
        const medium = document.getElementById("artMedium");
        medium.innerHTML = `Medium: ${artwork.data.medium_display}`;
        
        const year = document.getElementById("artYear");
        year.innerHTML = `Year: ${artwork.data.date_display}`;

        const artworkImage = document.getElementById("artwork-image");
        artworkImage.src = `Images/${artimage["image"]}`;
        
        // Show the modal
        modal.style.display = "block";

        // modal close listener once modal is displaying
        const modalClose = document.querySelector("#artwork-modal > div > span");
        
        modalClose.addEventListener("click", function () {
            modal.style.display = "none";
        });
        })
        .catch(error => {
            console.error("An error has occurred:", error);
        
        });
}

// Select all images and add event listeners to them.
window.onload = function () {
    const images = document.querySelectorAll("img");

    images.forEach(img => img.addEventListener("click", function() {
        const artId = this.getAttribute("artId");
        getInfo(artId);
    }));
}

// When the User clicks outside of the modal, the modal should close
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("artwork-modal");
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    })
})