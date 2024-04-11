document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("musicrev-audio");
    var images = document.querySelectorAll(".note-img");

    audio.addEventListener("timeupdate", updateImages);

    function updateImages() {
        var currentTime = audio.currentTime;
        images.forEach(function(image) {
            var start = parseFloat(image.getAttribute("data-start"));
            var end = parseFloat(image.getAttribute("data-end"));
            if (currentTime >= start && currentTime < end) {
                image.classList.add("active");
            } else {
                image.classList.remove("active");
            }
        });
    }
});
