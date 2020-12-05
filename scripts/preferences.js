$().ready(function() {

    $('#success').hide();

    $('#preferences_form').submit(function(e) {

        localStorage.setItem('images', $("select#inputImages").val());
        localStorage.setItem('time', $("select#inputTime").val());

        $('#success').slideDown("slow");

        setTimeout(function() {
            $('#success').slideUp();
        }, 700);

        e.preventDefault();
    });

});