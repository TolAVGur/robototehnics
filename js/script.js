$(document).ready(function () {

    $('#nav2 ul li').hoverIntent(
        function () {
            $(this).find('ul').slideDown(50);
        },
        function () {
            $(this).find('ul').slideUp(50);
        }
    );

});