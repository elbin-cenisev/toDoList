// Add moment.js date (just day and date)
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));


// EventListener for save button in each row
$("#timeTable").on("click", '.saveButton', function() {

    // Get the row that you are on
    var currentRow = $(this).closest("tr");

    // Get the <th> text (i.e 9AM, 10AM)
    let time = currentRow.find("th").text();

    // Get the user input from "textarea" in that same row
    let userInput = currentRow.find("textarea").val();
    
    // Save time and task in local storage
    localStorage.setItem(JSON.stringify(time), JSON.stringify(userInput));

})
