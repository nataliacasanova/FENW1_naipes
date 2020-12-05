const cards = [
    'bastos1.jpg',
    'bastos12.jpg',
    'copas1.jpg',
    'copas12.jpg',
    'oros1.jpg',
    'oros12.jpg'
];



const reverso = 'reverso.jpg';

function loadHome() {
    $('.main').load('../pages/home.html');
}

function loadPreferences() {
    $('.main').load('../pages/preferences.html');
    $('script[src="../scripts/preferences.js"]').remove();
    $('<script>').attr('src', '../scripts/preferences.js').appendTo('head');
}

function loadRegister() {
    $('.main').load('../pages/register.html');
}

function loadLogin() {
    $('.main').load('../pages/login.html');
}

function loadGame() {
    $('.main').load('../pages/play.html');
    $('<script>').attr('src', '../scripts/play.js').appendTo('head');
}


function loadRecords() {
    $('.main').load('../pages/records.html');
    $('<script>').attr('src', '../scripts/records.js').appendTo('head');
}

$(document).ready(function() {
    loadHome();
});

$('a.nav-link').click(function() {

    let id = $(this).attr('id');
    switch (id) {
        case 'inicio':
            loadHome();
            break;
        case 'preferences':
            loadPreferences();
            break;

        case 'register':
            loadRegister();
            break;

        case 'login':
            loadLogin();
            break;

        case 'play':
            loadGame();
            break;
        case 'records':
            loadRecords();
            break;
    }
});
