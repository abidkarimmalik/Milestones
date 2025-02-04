(function () {
    var _a;
    var resumeForm = document.getElementById("resume-form");
    var resumeDisplay = document.querySelector(".resume-preview-content");
    (_a = document.getElementById("generate-resume")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        var _a, _b;
        var name = document.getElementById("name").value;
        var age = document.getElementById("age").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var address = document.getElementById("address").value;
        var experience = document.getElementById("experience").value;
        var skills = document.getElementById("skills").value;
        var languages = document.getElementById("languages").value;
        var education = document.getElementById("education").value;
        var fileInput = document.getElementById("profile-picture");
        var picture = ((_a = fileInput.files) === null || _a === void 0 ? void 0 : _a[0]) ? URL.createObjectURL(fileInput.files[0]) : null;
        resumeDisplay.innerHTML = "\n        ".concat(picture ? "<img src=\"".concat(picture, "\" alt=\"Profile Picture\">") : "", "\n        <h3>").concat(name, "</h3>\n        <p><strong>Age:</strong> ").concat(age, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <p><strong>Address:</strong> ").concat(address, "</p>\n        <h4>Experience</h4>\n        <p>").concat(experience, "</p>\n        <h4>Skills</h4>\n        <p>").concat(skills, "</p>\n        <h4>Languages</h4>\n        <p>").concat(languages, "</p>\n        <h4>Education</h4>\n        <p>").concat(education, "</p>\n    ");
        (_b = document.querySelector(".resume-form")) === null || _b === void 0 ? void 0 : _b.classList.add("hidden");
    });
})();
