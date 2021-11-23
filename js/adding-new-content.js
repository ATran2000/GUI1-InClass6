$(function() {
	// Inserted "Just Updated" (as a paragraph)
    $("h2").after("<p>Just Updated!</p>");
    
    // Add a plus symbol (+) before all list items whose class attribute contains value "hot"
    $("li.hot").prepend("+");

    // Create and add a new list item "gluten-free soy sauce"
    $("ul").append("<li><em>gluten-free</em> soy sauce</li>");
});