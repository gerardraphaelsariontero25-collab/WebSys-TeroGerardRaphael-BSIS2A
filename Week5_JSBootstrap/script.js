let themeButton = document.getElementById("themeToggle");

themeButton.addEventListener("click", function() {
 document.body.classList.toggle("dark-mode");
 localStorage.setItem("theme",
document.body.classList.contains("dark-mode") ? "dark" : "light");
});
 
// Apply saved theme on page load
if (localStorage.getItem("theme") === "dark")
{
 document.body.classList.add("dark-mode");
}

document.addEventListener("keydown", function(event) {
    if (event.key.toLowerCase() === "b") {
        document.body.classList.toggle("dark-mode");
    }
});
