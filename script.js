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

$(document).ready(function() {
    // Add click event listener to links with class music-notation yr-(number)
    $('a[class^="music-notation yr-"]').click(function() {
        // Get the year from the class name of the clicked link
        var year = $(this).attr('class').split(' ')[1].replace('yr-', '');

        // Remove any existing yr-(number) class from pie chart elements and hold divs
        $('.pie, .hold').removeClass(function(index, className) {
            return (className.match(/(^|\s)yr-\d+/g) || []).join(' ');
        });

        // Add the corresponding yr-(number) class to pie chart elements and hold divs
        $('.pie, .hold').addClass('yr-' + year);
    });
});
$(document).ready(function() {
    // Add click event listener to links with class music-notation yr-(number)
    $('a[class^="music-notation yr-"]').click(function() {
        // Get the year from the class name of the clicked link
        var year = $(this).attr('class').split(' ')[1].replace('yr-', '');

        // Remove any existing yr-(number) class from pie chart elements and hold divs
        $('.pie, .hold').removeClass(function(index, className) {
            return (className.match(/(^|\s)yr-\d+/g) || []).join(' ');
        });

        // Add the corresponding yr-(number) class to pie chart elements and hold divs
        $('.pie, .hold').addClass('yr-' + year);
    });

    // Audio time update event listener
    var audio = document.getElementById("musicrev-audio");
    var images = document.querySelectorAll(".note-img");

    audio.addEventListener("timeupdate", updateImages);

    function updateImages() {
        var currentTime = audio.currentTime;

        // Calculate the year based on the current time
        var year = Math.floor(currentTime / 1) + 2011;

        // Remove any existing yr-(number) class from pie chart elements and hold divs
        $('.pie, .hold').removeClass(function(index, className) {
            return (className.match(/(^|\s)yr-\d+/g) || []).join(' ');
        });

        // Add the corresponding yr-(number) class to pie chart elements and hold divs
        $('.pie, .hold').addClass('yr-' + year);
    }
});

$('#note-1').onclick.find('')