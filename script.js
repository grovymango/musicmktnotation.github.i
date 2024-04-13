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

document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("musicrev-audio");
    var images = document.querySelectorAll(".note-img");

    audio.addEventListener("timeupdate", function() {
        updateImages();
        updateAmounts(); // Call the function to update amounts based on audio timestamp
    });

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

    // Define the arrays for amounts here
    const concerts = ['3.51 ','3.87 ','4.52 ','4.73 ','4.96 ','6.28 ','7.89 ','8.77 ','9.43 ','1.47 ','4.72 ','13.49 ','18.76'];
    const physicals = ['7.40 ', '6.80 ', '6.10 ', '5.30 ', '5.10 ', '4.90 ', '4.60 ', '4.10 ', '3.90 ', '3.70 ', '4.30 ', '4.50 ', '5.10'];
    const streams = ['0.60 ', '0.90 ', '1.30 ', '1.80 ', '2.60 ', '4.40 ', '6.20 ', '8.80 ', '10.70 ', '12.70 ', '15.70 ', '17.50 ', '19.30'];
    const downloads = ['4.00 ', '4.20 ', '4.10 ', '3.80 ', '3.60 ', '3.00 ', '2.50 ', '1.60 ', '1.40 ', '1.20 ', '1.10 ', '0.90 ', '0.90'];
    const perfrights = ['1.30 ', '1.40 ', '1.60 ', '1.70 ', '1.80 ', '2.10 ', '2.20 ', '2.50 ', '2.40 ', '2.20 ', '2.30 ', '2.50 ', '2.70'];
    const synchron = ['0.30 ', '0.30 ', '0.30 ', '0.30 ', '0.30 ', '0.30 ', '0.40 ', '0.40 ', '0.40 ', '0.40 ', '0.50 ', '0.60 ', '0.60'];

    function updateAmounts() {
        var currentTime = audio.currentTime;
        // Calculate the year based on the current time
        var year = Math.floor(currentTime / 1) + 2011;

        // Extract the index based on the year
        var index = year - 2011;

        // Set text for each element
        $('#Year').text(year);
        $('#concert-amount').text(concerts[index]);
        $('#physicals-amount').text(physicals[index]);
        $('#streams-amount').text(streams[index]);
        $('#downloads-amount').text(downloads[index]);
        $('#perf-rights-amount').text(perfrights[index]);
        $('#synchron-amount').text(synchron[index]);
    }
});
