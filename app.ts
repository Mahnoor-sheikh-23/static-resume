// Grab the button and the skills section
const toggleSkillsButton = document.getElementById('toggleSkillsButton') as HTMLButtonElement;
const skillsSection = document.getElementById('skills-ul') as HTMLElement;

// Toggle functionality to show/hide the skills section
toggleSkillsButton.addEventListener('click', () => {
  if (skillsSection.style.display === 'none') {
    skillsSection.style.display = 'block';
    toggleSkillsButton.textContent = 'Hide Skills';
  } else {
    skillsSection.style.display = 'none';
    toggleSkillsButton.textContent = 'Show Skills';
  }
});
