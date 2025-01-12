// Simple JavaScript example: Skill bar animation 
const skills = document.querySelectorAll('li');

skills.forEach(skill => {
    const progress = parseInt(skill.getAttribute('data-progress')); // Assuming you add data-progress attributes to your li elements
    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    progressBar.style.width = progress + '%';
    skill.appendChild(progressBar);
});