var _a;
(_a = document.getElementById('toggle-skills')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var skillsSection = document.getElementById('skills');
    if (skillsSection) {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
            this.textContent = 'Toggle Skills';
        }
        else {
            skillsSection.style.display = 'none';
            this.textContent = 'Show Skills';
        }
    }
});
