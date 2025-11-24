// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.nav-container');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Language switching functionality
const langButtons = document.querySelectorAll('.lang-btn');
let currentLang = 'en';

// Translation dictionary
const translations = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.portfolio': 'Portfolio',
        'nav.volunteer': 'Volunteer',
        'nav.contact': 'Contact',
        'hero.title': "Hi, I'm <span class='highlight'>Daniel Josiah</span>",
        'hero.subtitle': 'Graphics Designer & Video Editor',
        'hero.description': 'I create compelling visual stories through design and motion. With 15+ projects completed, I specialize in transforming ideas into engaging visual experiences.',
        'hero.cta': 'View My Work',
        'hero.contact': 'Get In Touch',
        'about.title': 'About Me',
        'about.text1': "I'm a passionate creative professional with expertise in graphics design and video editing. My journey in digital creation has led me to explore the intersection of design and storytelling.",
        'about.text2': "With over 15 completed projects in both graphic design and video editing, I've developed a keen eye for detail and a strong understanding of visual communication principles. I believe in creating work that not only looks beautiful but also effectively conveys the intended message.",
        'about.text3': "Since 2024, I've expanded my skills into frontend development, creating interactive web games that combine my design sensibilities with technical implementation. I've completed 3 web game projects that showcase my ability to create engaging user experiences.",
        'skills.design': 'Design',
        'skills.graphic': 'Graphic Design',
        'skills.uiux': 'UI/UX Design',
        'skills.branding': 'Brand Identity',
        'skills.print': 'Print Design',
        'skills.video': 'Video',
        'skills.editing': 'Video Editing',
        'skills.motion': 'Motion Graphics',
        'skills.color': 'Color Grading',
        'skills.audio': 'Audio Editing',
        'skills.frontend': 'Frontend',
        'skills.htmlcss': 'HTML/CSS/JavaScript',
        'skills.webgames': 'Web Games Development',
        'skills.responsive': 'Responsive Design',
        'skills.animation': 'CSS Animations',
        'portfolio.title': 'My Portfolio',
        'volunteer.title': 'Volunteer Work',
        'contact.title': 'Get In Touch',
        'contact.connect': "Let's Connect",
        'contact.description': "I'm always open to discussing new opportunities and creative projects.",
        'contact.name': 'Name',
        'contact.email': 'Email',
        'contact.message': 'Message',
        'contact.submit': 'Send Message',
        'footer.text': 'Creating compelling visual stories through design and motion',
        'footer.copyright': '© 2023 Daniel Josiah. All rights reserved.'
    },
    es: {
        'nav.home': 'Inicio',
        'nav.about': 'Sobre Mí',
        'nav.portfolio': 'Portafolio',
        'nav.volunteer': 'Voluntariado',
        'nav.contact': 'Contacto',
        'hero.title': 'Hola, Soy <span class="highlight">Daniel Josiah</span>',
        'hero.subtitle': 'Diseñador Gráfico & Editor de Video',
        'hero.description': 'Creo historias visuales convincentes a través del diseño y el movimiento. Con más de 15 proyectos completados, me especializo en transformar ideas en experiencias visuales atractivas.',
        'hero.cta': 'Ver Mi Trabajo',
        'hero.contact': 'Ponerse en Contacto',
        'about.title': 'Sobre Mí',
        'about.text1': 'Soy un profesional creativo apasionado con experiencia en diseño gráfico y edición de video. Mi viaje en la creación digital me ha llevado a explorar la intersección entre diseño y narrativa.',
        'about.text2': 'Con más de 15 proyectos completados tanto en diseño gráfico como en edición de video, he desarrollado un ojo agudo para los detalles y una sólida comprensión de los principios de comunicación visual. Creo en crear trabajos que no solo sean hermosos sino que también transmitan efectivamente el mensaje deseado.',
        'about.text3': "Desde 2024, he expandido mis habilidades al desarrollo frontend, creando juegos web interactivos que combinan mi sensibilidad de diseño con implementación técnica. He completado 3 proyectos de juegos web que muestran mi capacidad para crear experiencias de usuario atractivas.",
        'skills.design': 'Diseño',
        'skills.graphic': 'Diseño Gráfico',
        'skills.uiux': 'Diseño UI/UX',
        'skills.branding': 'Identidad de Marca',
        'skills.print': 'Diseño Impreso',
        'skills.video': 'Video',
        'skills.editing': 'Edición de Video',
        'skills.motion': 'Gráficos en Movimiento',
        'skills.color': 'Grado de Color',
        'skills.audio': 'Edición de Audio',
        'skills.frontend': 'Frontend',
        'skills.htmlcss': 'HTML/CSS/JavaScript',
        'skills.webgames': 'Desarrollo de Juegos Web',
        'skills.responsive': 'Diseño Responsivo',
        'skills.animation': 'Animaciones CSS',
        'portfolio.title': 'Mi Portafolio',
        'volunteer.title': 'Trabajo Voluntario',
        'contact.title': 'Ponte en Contacto',
        'contact.connect': 'Conectemos',
        'contact.description': 'Siempre estoy abierto a discutir nuevas oportunidades y proyectos creativos.',
        'contact.name': 'Nombre',
        'contact.email': 'Correo Electrónico',
        'contact.message': 'Mensaje',
        'contact.submit': 'Enviar Mensaje',
        'footer.text': 'Creando historias visuales convincentes a través del diseño y el movimiento',
        'footer.copyright': '© 2023 Daniel Josiah. Todos los derechos reservados.'
    },
    fr: {
        'nav.home': 'Accueil',
        'nav.about': 'À Propos',
        'nav.portfolio': 'Portfolio',
        'nav.volunteer': 'Bénévolat',
        'nav.contact': 'Contact',
        'hero.title': 'Bonjour, Je Suis <span class="highlight">Daniel Josiah</span>',
        'hero.subtitle': 'Designer Graphique & Monteur Vidéo',
        'hero.description': 'Je crée des histoires visuelles convaincantes à travers le design et le mouvement. Avec plus de 15 projets réalisés, je me spécialise dans la transformation d\'idées en expériences visuelles engageantes.',
        'hero.cta': 'Voir Mon Travail',
        'hero.contact': 'Entrer en Contact',
        'about.title': 'À Propos de Moi',
        'about.text1': 'Je suis un professionnel créatif passionné avec une expertise en design graphique et montage vidéo. Mon parcours dans la création numérique m\'a conduit à explorer l\'intersection entre design et narration.',
        'about.text2': 'Avec plus de 15 projets réalisés à la fois en design graphique et en montage vidéo, j\'ai développé un œil attentif aux détails et une solide compréhension des principes de communication visuelle. Je crois en la création de travaux qui sont non seulement beaux mais qui transmettent également efficacement le message souhaité.',
        'about.text3': "Depuis 2024, j'ai élargi mes compétences au développement frontend, créant des jeux web interactifs qui combinent ma sensibilité design avec une mise en œuvre technique. J'ai terminé 3 projets de jeux web qui mettent en valeur ma capacité à créer des expériences utilisateur engageantes.",
        'skills.design': 'Design',
        'skills.graphic': 'Design Graphique',
        'skills.uiux': 'Design UI/UX',
        'skills.branding': 'Identité de Marque',
        'skills.print': 'Design Imprimé',
        'skills.video': 'Vidéo',
        'skills.editing': 'Montage Vidéo',
        'skills.motion': 'Graphismes Animés',
        'skills.color': 'Étalonnage des Couleurs',
        'skills.audio': 'Montage Audio',
        'skills.frontend': 'Frontend',
        'skills.htmlcss': 'HTML/CSS/JavaScript',
        'skills.webgames': 'Développement de Jeux Web',
        'skills.responsive': 'Design Responsive',
        'skills.animation': 'Animations CSS',
        'portfolio.title': 'Mon Portfolio',
        'volunteer.title': 'Travail Bénévole',
        'contact.title': 'Entrer en Contact',
        'contact.connect': 'Connectons',
        'contact.description': 'Je suis toujours ouvert à discuter de nouvelles opportunités et projets créatifs.',
        'contact.name': 'Nom',
        'contact.email': 'Email',
        'contact.message': 'Message',
        'contact.submit': 'Envoyer le Message',
        'footer.text': 'Créer des histoires visuelles convaincantes grâce au design et au mouvement',
        'footer.copyright': '© 2023 Daniel Josiah. Tous droits réservés.'
    }
};

// Function to change language
function changeLanguage(lang) {
    currentLang = lang;
    
    // Update active language button
    langButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
}

// Add event listeners to language buttons
langButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        changeLanguage(lang);
    });
});

// Portfolio filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        const filter = this.getAttribute('data-filter');
        
        // Filter portfolio items
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Animate stats counting
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        
        let current = 0;
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current);
        }, 16);
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animate stats if in about section
            if (entry.target.id === 'about') {
                animateStats();
            }
            
            // Animate skills list items with stagger
            if (entry.target.id === 'about') {
                const skillItems = document.querySelectorAll('.skill-list li');
                skillItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, index * 100);
                });
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Observe section titles
    document.querySelectorAll('.section-title').forEach(el => {
        observer.observe(el);
    });
    
    // Observe about section
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        observer.observe(aboutSection);
    }
    
    // Observe portfolio items
    document.querySelectorAll('.portfolio-item').forEach(el => {
        observer.observe(el);
    });
    
    // Observe timeline items
    document.querySelectorAll('.timeline-item').forEach(el => {
        observer.observe(el);
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name') || document.getElementById('name').value;
    const email = formData.get('email') || document.getElementById('email').value;
    const message = formData.get('message') || document.getElementById('message').value;
    
    // In a real application, you would send this data to a server
    // For now, we'll just show a success message
    alert(`Thank you for your message, ${name}! I will get back to you soon at ${email}.`);
    this.reset();
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Set initial language
    changeLanguage('en');
    
    // Add loading animation
    document.body.style.opacity = 0;
    window.requestAnimationFrame(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = 1;
    });
});