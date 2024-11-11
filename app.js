// Grab the button and the skills section
var toggleSkillsButton = document.getElementById('toggleSkillsButton');
var skillsSection = document.getElementById('skills-ul');
// Toggle functionality to show/hide the skills section
toggleSkillsButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleSkillsButton.textContent = 'Hide Skills';
    }
    else {
        skillsSection.style.display = 'none';
        toggleSkillsButton.textContent = 'Show Skills';
    }
});
