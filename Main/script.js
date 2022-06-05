$(document).ready(function () {
    // Display current day
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY")); 
    // Assign saveBtn click listener for user input
    $(".saveBtn").on("click", function () {
    
        var text = $(this).siblings(".description").val(); 
        var time = $(this).parent().attr("id");

        // Put items in local storage
        localStorage.setItem(time, text);
    })
   
    // Load saved data from LocalStorage
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    function hourSet() {
        // Get current number of hours
        var currentHour = moment().hour(); 

        // Loop over time blocks
        $(".time-block").each(function () {
            var hourBlock = parseInt($(this).attr("id").split("hour")[1]);
            console.log( hourBlock, currentHour)

            // Check current hour
            if (hourBlock < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (hourBlock === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourSet(); 
})