// Dynamic Greeting Based on Time of Day
function dynamicGreeting() {
    const greetingElement = document.getElementById('greeting');
    const now = new Date();
    const hours = now.getHours();
    
    if (hours < 12) {
        greetingElement.textContent = 'Good Morning!';
    } else if (hours < 18) {
        greetingElement.textContent = 'Good Afternoon!';
    } else {
        greetingElement.textContent = 'Good Evening!';
    }
}

// Animate Skill Progress Bars
function animateSkills() {
    const htmlSkill = document.getElementById('html-skill');
    const cssSkill = document.getElementById('css-skill');
    const jsSkill = document.getElementById('js-skill');

    setTimeout(() => { htmlSkill.style.width = '90%'; }, 500);
    setTimeout(() => { cssSkill.style.width = '80%'; }, 1000);
    setTimeout(() => { jsSkill.style.width = '75%'; }, 1500);
}

// Initialize functions when the page loads
window.onload = function() {
    dynamicGreeting();
    animateSkills();
};
