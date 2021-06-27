// Get today's date and display it in currentDay <p>
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

function checkOverdue() {
    // Get the current time for comparisons
    var currentTime = moment().format('HH');

    console.log(currentTime)
    
    // Loop through all local storage items
    for (var i = 0; i < localStorage.length; i++){

        // Create variable holding the first two numbers
        let taskTime = (JSON.parse(localStorage.key(i))).substring(0,2);

        // Create variable holding task description and remove quotes
        let taskDescription = localStorage.getItem(localStorage.key(i)).substring(1, (localStorage.getItem(localStorage.key(i)).length - 1))

        // Get the row corresponding to the current time
        var currentRow = $("tr:contains(" + taskTime + ")")

        // Display taskDescription in corresponding fields
        currentRow.find("textarea").text(taskDescription);

        // If currentTime > first two numbers (hour) of entry
        if(currentTime > taskTime) {

            // find the correct row and turn it red
            currentRow.css("background", "red");

        }

        else if(currentTime < taskTime)
            // find the correct row and turn it red
            currentRow.css("background", "#007ba7");

        else if(currentTime === taskTime)
            // Turn the fields green
            currentRow.css("background", "green");
    }
}


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

    // Update Table
    checkOverdue();
})

checkOverdue();