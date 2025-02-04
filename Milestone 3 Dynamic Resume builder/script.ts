(()=>{const resumeForm = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplay = document.querySelector(
    ".resume-preview-content"
) as HTMLElement;

document.getElementById("generate-resume")?.addEventListener("click", () => {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const age = (document.getElementById("age") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const address = (document.getElementById("address") as HTMLInputElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
    const languages = (document.getElementById("languages") as HTMLTextAreaElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;

    const fileInput = document.getElementById("profile-picture") as HTMLInputElement;
    const picture = fileInput.files?.[0] ? URL.createObjectURL(fileInput.files[0]) : null;

    resumeDisplay.innerHTML = `
        ${picture ? `<img src="${picture}" alt="Profile Picture">` : ""}
        <h3>${name}</h3>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <h4>Experience</h4>
        <p>${experience}</p>
        <h4>Skills</h4>
        <p>${skills}</p>
        <h4>Languages</h4>
        <p>${languages}</p>
        <h4>Education</h4>
        <p>${education}</p>
    `;

    document.querySelector(".resume-form")?.classList.add("hidden");

})})();
