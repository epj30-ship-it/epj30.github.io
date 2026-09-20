// ========================================
// PORTFOLIO WEBSITE JAVASCRIPT
// ========================================


// Welcome message in the browser console

console.log("Welcome to Emily Jepsen's portfolio!");


// Project links

const projectLinks = document.querySelectorAll(".project-link");


projectLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        if (link.getAttribute("href") === "#") {

            event.preventDefault();

            alert("Project link coming soon!");

        }

    });

});


// Smooth scrolling for navigation links

const navigationLinks = document.querySelectorAll("nav a");


navigationLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        console.log(
            "Navigating to " + link.textContent
        );

    });

});
