$(document).ready(function() {

    $('.main').load('../pages/home.html');

    $('#ref-inicio').click(() => {
        $('.main').load('../pages/home.html');
    });

    $('#ref-preferences').click(() => {
        $('.main').load('../pages/preferences.html');
    });

    $('#ref-register').click(() => {
        $('.main').load('../pages/register.html');
    });



});