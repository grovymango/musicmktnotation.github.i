$(document).ready(function() {
    var audio = document.getElementById("musicrev-audio");
    var images = $(".note-img");
    var imageIndex = 0;

    audio.addEventListener("play", function() {
        imageIndex = 0; // Reset imageIndex to 0 when audio starts playing
        showImage();
    });

    function showImage() {
        if (imageIndex < images.length) {
            images.removeClass("active");
            $("#" + images[imageIndex].id).addClass("active");
            imageIndex++;
            setTimeout(showImage, 1000); // Change this value to adjust the duration of each image
        }
    }
});