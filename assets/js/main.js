
$(document).ready(function() {
    AOS.init({
        // uncomment below for on-scroll animations to played only once
        // once: true  
    }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

$("#sendEmail").on("click", function() {
    console.log($("#txtbody").val().replace(/ /g, "%20"))
})

function replaceWhiteSpaces(str) {
    str = str.replace(" ", "%20");
    console.log(str);
}

var mor=false;
$(".more-details").on("click", function () {
    var txt = $(".more-details").text();
    console.log(txt);
    if(!mor){
        $(".more-details").text("Less details");
        mor = true;
    }
    else {
        $(".more-details").text("More details");
        mor = false;
    }
})

var mor2=false;
$(".more-details2").on("click", function () {
    var txt = $(".more-details2").text();
    console.log(txt);
    if(!mor2){
        $(".more-details2").text("Less details");
        mor2 = true;
    }
    else {
        $(".more-details2").text("More details");
        mor2 = false;
    }
})

var mor3=false;
$(".more-details3").on("click", function () {
    var txt = $(".more-details3").text();
    console.log(txt);
    if(!mor3){
        $(".more-details3").text("Less details");
        mor3 = true;
    }
    else {
        $(".more-details3").text("More details");
        mor3 = false;
    }
}
)
document.getElementById("wonderktich-P").style.display = "none";
document.getElementById("littlelibrary-P").style.display = "none";
document.getElementById("Imageaggr-P").style.display = "none";
document.getElementById("royal-P").style.display = "none";
document.getElementById("smart-P").style.display = "none";
document.getElementById("master-P").style.display = "none";
$(".wonderktich-P").on("click", function () {
    console.log("hi");
    document.getElementById("main-P").style.display = "none";
    document.getElementById("wonderktich-P").style.display = "block";
    document.getElementById("littlelibrary-P").style.display = "none";
    document.getElementById("Imageaggr-P").style.display = "none";
    document.getElementById("royal-P").style.display = "none";
    document.getElementById("smart-P").style.display = "none";
    document.getElementById("master-P").style.display = "none";
})
$(".littlelibrary-P").on("click", function () {
    console.log("hi");
    document.getElementById("main-P").style.display = "none";
    document.getElementById("wonderktich-P").style.display = "none";
    document.getElementById("littlelibrary-P").style.display = "block";
    document.getElementById("Imageaggr-P").style.display = "none";
    document.getElementById("royal-P").style.display = "none";
    document.getElementById("smart-P").style.display = "none";
    document.getElementById("master-P").style.display = "none";
})
$(".Imageaggr-P").on("click", function () {
    console.log("hi");
    document.getElementById("main-P").style.display = "none";
    document.getElementById("wonderktich-P").style.display = "none";
    document.getElementById("littlelibrary-P").style.display = "none";
    document.getElementById("Imageaggr-P").style.display = "block";
    document.getElementById("royal-P").style.display = "none";
    document.getElementById("smart-P").style.display = "none";
    document.getElementById("master-P").style.display = "none";
})
$(".master-P").on("click", function () {
    console.log("hi");
    document.getElementById("main-P").style.display = "none";
    document.getElementById("wonderktich-P").style.display = "none";
    document.getElementById("littlelibrary-P").style.display = "none";
    document.getElementById("Imageaggr-P").style.display = "none";
    document.getElementById("royal-P").style.display = "none";
    document.getElementById("smart-P").style.display = "none";
    document.getElementById("master-P").style.display = "block";
})
$(".royal-P").on("click", function () {
    console.log("hi");
    document.getElementById("main-P").style.display = "none";
    document.getElementById("wonderktich-P").style.display = "none";
    document.getElementById("littlelibrary-P").style.display = "none";
    document.getElementById("Imageaggr-P").style.display = "none";
    document.getElementById("royal-P").style.display = "block";
    document.getElementById("smart-P").style.display = "none";
    document.getElementById("master-P").style.display = "none";
})
$(".smart-P").on("click", function () {
    console.log("hi");
    document.getElementById("main-P").style.display = "none";
    document.getElementById("wonderktich-P").style.display = "none";
    document.getElementById("littlelibrary-P").style.display = "none";
    document.getElementById("Imageaggr-P").style.display = "none";
    document.getElementById("royal-P").style.display = "none";
    document.getElementById("smart-P").style.display = "block";
    document.getElementById("master-P").style.display = "none";
})
$(".proItem").on("click", function () {
    console.log("hi");
    document.getElementById("main-P").style.display = "block";
    document.getElementById("wonderktich-P").style.display = "none";
    document.getElementById("littlelibrary-P").style.display = "none";
    document.getElementById("Imageaggr-P").style.display = "none";
    document.getElementById("royal-P").style.display = "none";
    document.getElementById("smart-P").style.display = "none";
    document.getElementById("master-P").style.display = "none";
})