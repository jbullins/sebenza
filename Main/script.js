$(document).ready(function () {
    //display current day
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY")); 
    //Assign saveBtn click listener for user input
    $(".saveBtn").on("click", function () {
    $()
        var text = $(this).siblings(".description").val(); 
        var time = $(this).parent().attr("id");

        //Put items in local storage
        localStorage.setItem(time, text);
    })

})