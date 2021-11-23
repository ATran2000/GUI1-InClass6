$(function() {
    // Find the background color of the first list item
    var backgroundColor = $("#one").css("background-color");
    console.log(backgroundColor);

    // Write the background color of the first list item into the page (should get rgb(215, 102, 107))
    $("ul").after("<p>Color was: " + backgroundColor + "</p>");

    // Change the <li> elements, use .css() method to update several CSS prpoperties at the same time
    $("li").css("background-color", "#c5a996");
    $("li").css("border", "white solid 1px");
    $("li").css("color", "black");
    $("li").css("text-shadow", "none");
    $("li").css("font-famility", "Georgia");
});