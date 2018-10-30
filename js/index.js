//jQuery Slider 

$(document).ready(() => {
    var speed = 500; //fade speed
    var autoSwitch = true; //auto next slide
    var autoSwitchSpeed = 2000; //slide speed

    //add first active class
    $(".slide").first().addClass("active");
    //hide all
    $(".slide").hide();
    //show active
    $(".active").show();
    
    //onclick next
    $("#next").click(() => {
        nextslide();
    });
    
    //onclick previous
    $("#previous").click(() => {
        previousslide();
    });

    //autoswitch, set interval
    if(autoSwitch) {
        setInterval(() => {
            nextslide();
        }, autoSwitchSpeed);
    }

    //next slide function
    function nextslide() {
        $(".active").removeClass("active").addClass("oldActive");
        if($(".oldActive").is(":last-child")) {
            $(".slide").first().addClass("active");
        } else {
            $(".oldActive").next().addClass("active");
        }
        $(".oldActive").removeClass("oldActive");
        $(".slide").fadeOut(speed);
        $(".active").fadeIn(speed);
    }

    function previousslide() {
        $(".active").removeClass("active").addClass("oldActive");
        if($(".oldActive").is(":first-child")) {
            $(".slide").last().addClass("active");
        } else {
            $(".oldActive").prev().addClass("active");
        }
        $(".oldActive").removeClass("oldActive");
        $(".slide").fadeOut(speed);
        $(".active").fadeIn(speed);
    }
});