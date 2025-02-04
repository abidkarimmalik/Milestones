document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("toggle-skills");
    var skills = document.getElementById("skills");
    if (skills)
        skills.style.display = "block"; // Ensure skills are initially visible
    if (toggleButton && skills) {
        toggleButton.addEventListener("click", function () {
            if (skills.style.display === "none") {
                skills.style.display = "block";
            }
            else {
                skills.style.display = "none"; // Correct assignment operator
            }
        });
    }
});
