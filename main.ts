document.getElementById('toggle-skills')?.addEventListener('click', function() {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
            (this as HTMLButtonElement).textContent = 'Toggle Skills';
        } else {
            skillsSection.style.display = 'none';
            (this as HTMLButtonElement).textContent = 'Show Skills';
        }
    }
});
