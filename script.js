document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeIcon = darkModeToggle.querySelector('i');
    
    // Función para establecer el modo (Dark/Light)
    const setDarkMode = (isDark) => {
        if (isDark) {
            body.classList.add('dark');
            darkModeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            body.classList.remove('dark');
            darkModeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('darkMode', 'disabled');
        }
    };

    // 1. Detección inicial y persistencia con localStorage (incluye prefers-color-scheme)
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedMode === 'enabled' || (savedMode === null && prefersDark)) {
        setDarkMode(true);
    } else {
        setDarkMode(false); 
    }

    // 2. Event Listener para el toggle
    darkModeToggle.addEventListener('click', () => {
        const isDark = body.classList.contains('dark');
        setDarkMode(!isDark);
    });

    // 3. Smooth Scroll para la navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Manejo del Formulario de Contacto (Simulación)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // Mensaje profesional
            alert('¡Propuesta recibida! 📧 El Ingeniero Elián Osiris se pondrá en contacto a la brevedad para discutir la viabilidad del proyecto.');
            this.reset(); // Limpia el formulario
        });
    }

});