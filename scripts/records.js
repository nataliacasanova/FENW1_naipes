var URL = "http://fenw.etsisi.upm.es:10000";

$(document).ready(async function() {
    getRecords();
});

function getRecords() {
    $.ajax({
        url: `${URL}/records`,
        success: function(response) {
            var recordsList = $("#records_body");
            for (item of response) {
                var tr = $('<tr>');
                console.log(response);

                item.recordDate = formatDate(item.recordDate);

                Object.keys(item).forEach(key => {
                    var td = $('<td>');
                    td.append(item[key]);
                    tr.append(td);
                });
                recordsList.append(tr);
            }

        },
        error: function() {
            console.log("No se ha podido obtener la información");
        }

    });
}

function formatDate(item) {

    var d = new Date(item);
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();

    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }
    var date = day + "/" + month + "/" + year;

    return date;

}