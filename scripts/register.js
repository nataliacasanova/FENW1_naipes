

$("#buttonSend").click(function (e) {

    var form = $("#register-form");

    if(!form[0].checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
    }
    $("form").addClass('was-validated');

});
