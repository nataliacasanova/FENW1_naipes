
var randoms = [];
var first_click;
var points, correct, total;
var first_image ,first_id;
var add;
var images, time, matches;

$(document).ready(function() {

   setInit();

    var board = $("#board");
    var table = $('<table>');
    table.attr('class', 'table-sm');
    var tblBody = $('<tbody>');

    var num_rows = Math.ceil(images / 8);
    var num_columns = 8;
    var count = 0;

    for (var i = 0; i < num_rows; i++) {
        const $tr = $('<tr>');

        for (var j = 0; j < num_columns; j++) {

            if (count < images) {
                let $tdRow = $('<td>');
                let $tdImg = $('<img>');

                $tdImg.attr('src', '/assets/img/' + reverso);
                $tdImg.attr('class', 'cardImg img-fluid');
                $tdImg.attr('id', 'card_img_' + count);
                $tdImg.attr('data-card', count);

                $tdRow.append($tdImg);
                $tr.append($tdRow);
                count++;
            }
        }
        tblBody.append($tr);
    }
    table.append(tblBody);
    board.append(table);

});


$(document).on('click', '.cardImg', function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();


    var currentId = '#' + e.target.id;
    var currentCard;

    if (!first_click) {

        for (var i = 0; i < cards.length; i++) {
            currentCard = $(currentId);
            currentCard.attr('src', '/assets/img/' + randoms[Number(currentCard.attr('data-card'))]);
        }

        first_image = randoms[Number(currentCard.attr('data-card'))];
        first_id = Number(currentCard.attr('data-card'));
        first_click = true;

    } else if (first_click) {

        for (var i = 0; i < cards.length; i++) {
            currentCard = $(currentId);
            currentCard.attr('src', '/assets/img/' + randoms[Number(currentCard.attr('data-card'))]);
        }

        if (first_image == randoms[Number(currentCard.attr('data-card'))]) {

            points += 15;
            $("#points").html(points);
            correct++;
            checkMatches();


        } else {
            points -= 5;
            contdownSecondClick(first_id, currentId);
            $("#points").html(points);
        }
        first_click=false;

    }
});

function contdownSecondClick(first_id, currentId) {

    setTimeout(function() {

        first_id = '#card_img_' + first_id;
        var card = $(first_id);
        card.attr('src', '/assets/img/' + reverso);
        var current = $(currentId);
        current.attr('src', '/assets/img/' + reverso);

        first_click = false;

    }, 700);
}

function startContdown() {
        countDown = time;
    add = setInterval(function() {
       countDown = countDown - 1;
        if (countDown == 0) {
            clearInterval(add);
            getTotal();
            $( function() {
                $("#total_dialog").html(total);
                $("#dialog").dialog({
                    autoOpen: true,
                    modal: true,
                    title: "¡Atención!",
                    buttons: {
                    "Cerrar": function () {
                        setInit();
                    $(this).dialog("close");
                    },
                }
            });
            });
        }
        $("#time").html(countDown);
    }, 1000);
}

function suffle(cards) {

    for(var j=0;j<(images/2);j++){
        i = Math.floor(Math.random() * 5);
        randoms[j] = cards[i];
    }

    randoms = randoms.concat(randoms); 
    
    var currentIndex = randoms.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = randoms[currentIndex];
      randoms[currentIndex] = randoms[randomIndex];
      randoms[randomIndex] = temporaryValue;
    }
    return randoms;
}

function setInit() {

    images = localStorage.getItem("images");
    time = localStorage.getItem("time");
    matches = Math.round(images / 2);

    first_click = false;
    points = 0;
    correct = 0;
    total = 0;

    $(".cardImg").attr('src', '/assets/img/' + reverso);
    $("#points").html(0);
    $("#total").html(0);
    $("#time").html(time);
    randoms = suffle(cards);
    clearInterval(add);
    
    if(time != "s/t"){
        startContdown();
    }

}

function getTotal() {

    switch (Number(images)) {
        case 26:
            total = 25 + points;
            break;
        case 32:
            total = 50 + points;
            break;
        case 20:
            total = points;
            break;
    }

    switch (Number(time)) {
        case 60:
            total = total + 100;
            break;
        case 90:
            total = total + 75;
            break;
        case 120:
            total = total + 50;
            break;
        case 150:
            total = total + 25;
            break;
    }

    console.log("total: " + total);

    $("#total").html(total);

}

function checkMatches(){

    if(correct == matches){
        clearInterval(add);
        getTotal();
        $( function() {
            $("#total_dialog").html(total);
            $("#dialog").dialog({
                autoOpen: true,
                modal: true,
                title: "¡Atención!",
                buttons: {
                "Cerrar": function () {
                    setInit();
                $(this).dialog("close");
                }
            }
        });
        });
    }
}
