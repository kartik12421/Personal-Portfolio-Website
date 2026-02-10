document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;
    const themeSwitcherLabel = document.querySelector('label[for="theme-switcher"]');

    // Check for saved theme in local storage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.className = currentTheme;
        if (currentTheme === 'light-mode') {
            themeSwitcher.checked = true;
            themeSwitcherLabel.textContent = 'Dark Mode';
        }
    }

    themeSwitcher.addEventListener('change', () => {
        if (themeSwitcher.checked) {
            body.className = 'light-mode';
            themeSwitcherLabel.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'light-mode');
        } else {
            body.className = 'dark-mode';
            themeSwitcherLabel.textContent = 'Light Mode';
            localStorage.setItem('theme', 'dark-mode');
        }
    });

    // Image modal functionality for certifications
    const imageModal = document.getElementById('imageModal');
    if (imageModal) {
        imageModal.addEventListener('show.bs.modal', event => {
            const button = event.relatedTarget;
            const imgSrc = button.getAttribute('data-img-src');
            const enlargedImage = imageModal.querySelector('#enlargedImage');
            enlargedImage.src = imgSrc;
        });
    }

    // Typewriting effect
    const typewriterTextElement = document.getElementById('typewriter-text');
    if (typewriterTextElement) {
        const texts = ["Web Developer", "MERN Developer", "Full-Stack Web Developer", "Backend Developer"];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeWriter() {
            const currentText = texts[textIndex];
            if (isDeleting) {
                typewriterTextElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typewriterTextElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentText.length) {
                setTimeout(() => isDeleting = true, 1000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }

            const typingSpeed = isDeleting ? 50 : 100;
            setTimeout(typeWriter, typingSpeed);
        }

        typeWriter();
    }
});
