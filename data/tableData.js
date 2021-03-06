var tableData = [];

$("#table-submit").on('click', function (param) {
    var newReservation = {
        customerName: $("#reserve-name").val().trim(),
        phoneNumber: $("#reserve-phone").val().trim(),
        customerEmail: $("#reserve-email").val().trim(),
        customerID: $("#reserve-unique-id").val().trim()
    }

    tableData.push(newReservation);

    $.post("/api/tables", newReservation,
        function (data) {
            // If a table is available... tell user they are booked.
            if (data) {
                alert("Yay! You are officially booked!");
            }
            // If a table is available... tell user they on the waiting list.
            else {
                alert("Sorry you are on the wait list");
            }

            // Clear the form when submitting
            $("#reserve-name").val("");
            $("#reserve-phone").val("");
            $("#reserve-email").val("");
            $("#reserve-unique-id").val("");

        });
});