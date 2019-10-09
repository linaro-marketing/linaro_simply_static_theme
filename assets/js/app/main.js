var universal_nav_toggled = false;
$('#universal_nav_toggle').on('click', function(){
    universal_nav_toggled = !universal_nav_toggled;
});

$(document).on("scroll", function () {
    if ($(document).scrollTop() > 0) {
        $("#universal_nav_sticky").hide();
        if (universal_nav_toggled === true) {
            $('#universal_nav_toggle').trigger('click');
        }
    }
    if ($(document).scrollTop() == 0) {
        universal_nav_toggled = false;
        $("#universal_nav_sticky").slideDown("fast");
    }
});
