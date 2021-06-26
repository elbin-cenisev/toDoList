// Get today's date and display it in currentDay <p>
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

console.log($("tr:contains('10')").css("background", "red"));

function checkOverdue() {
    // Get the current time for comparisons
    var currentTime = moment().format('HH');

    // Loop through all local storage items
    for (var i = 0; i < localStorage.length; i++){

        // Create variable holding the first two numbers
        let taskTime = (JSON.parse(localStorage.key(i))).substring(0,2);
        console.log(taskTime);

        // If currentTime > first two numbers (hour) of entry
        if(currentTime > taskTime) {
            
            // find the correct row and turn it red
            $("tr:contains(" + taskTime + ")").css("background", "red")

        }

        // If currentTime < first two numbers of entry
            // Turn the fields green

        // If currentTime = first two numbers of entry
            // Turn the fields green
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

})

checkOverdue();