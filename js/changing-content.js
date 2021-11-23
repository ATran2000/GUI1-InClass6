$(function() {
    // Find list item "pine" and change text the text to "almonds"
    $("li#two").text("almonds");

    // Select all list items whose class attribute is "hot", and add <em> tag
    $("li.hot").wrapInner("<em></em>");

    // Remove the first list item
    $("li")[0].remove();
});