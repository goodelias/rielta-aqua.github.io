$(document).ready(function() {
    $('.nav-bar').click(function() {
        $('.navigation').animate({
            width: "toggle",
        }, {
            duration: 100,
            specialEasing: {
                width: "linear",
            }
        });
    });
});