document.addEventListener('DOMContentLoaded', () => {
  // -----------------------
  // Menú toggle (igual que antes)
  // -----------------------
  const menuToggle = document.querySelector('.header__menu-toggle');
  const mainMenu = document.getElementById('main-menu');

  if (menuToggle && mainMenu) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      mainMenu.classList.toggle('is-open');
    });
  }

  // -----------------------
  // Theme switch (igual que antes)
  // -----------------------
  const themeSwitch = document.getElementById('checkbox');
  if (themeSwitch) {
    themeSwitch.addEventListener('change', () => {
      if (themeSwitch.checked) {
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
      } else {
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
      }
    });

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
      document.body.classList.add('light-mode');
      themeSwitch.checked = true;
    }
  }

  // -----------------------
  // Traducciones (completas y con claves entre comillas donde hace falta)
  // He incluido variantes comunes de claves para mayor compatibilidad.
  // -----------------------
  const translations = {
    "es": {
      "home": "Home",
      "about": "Sobre mí",
      "curriculum": "Currículum",
      "contact": "Contacto",

      // index
      "main-title": "Eleve tu negocio digital a otro nivel",
      "main-title-highlight": "con un Front-end de calidad!",
      "main-text": "¡Hola! Soy Wilmer Gulcochia Sanchez, un desarrollador Full Stack y Analista de Datos apasionado por la tecnología. Con mi experiencia en Java, React, HTML, CSS y JavaScript, me especializo en transformar ideas en soluciones digitales funcionales y atractivas para pequeños negocios y diseñadores. ¿Listo para que construyamos algo increíble juntos?",
      "social-media-title": "Acceder a mis redes sociales",
      "linkedin-btn": "LinkedIn",
      "github-btn": "GitHub",
      "instagram-btn": "Instagram",
      "footer-text": "© 2025 Wilmer Gulcochia Sanchez.",

      // about (variantes incluidas)
      "about-title": "Sobre mí",
      "about-text-1": "¡Hola! Soy Wilmer Gulcochia Sanchez, un desarrollador Full Stack y Analista de Datos apasionado por la tecnología. Me especializo en transformar ideas en soluciones digitales funcionales y atractivas. Mi experiencia abarca Java, React, HTML, CSS y JavaScript, lo que me permite construir desde interfaces de usuario dinámicas hasta robustos sistemas de backend. Siempre estoy buscando nuevos desafíos y oportunidades para aprender y crecer en el mundo del desarrollo de software.",
      "about-text-2": "Fuera del código, disfruto explorando nuevas tecnologías, contribuyendo a proyectos de código abierto y compartiendo conocimientos con la comunidad. Creo firmemente en la importancia de un aprendizaje continuo y en la aplicación de las mejores prácticas para entregar productos de alta calidad. Si estás buscando un profesional dedicado y con ganas de hacer la diferencia, ¡me encantaría conectar!",
      "about-text1": "¡Hola! Soy Wilmer Gulcochia Sanchez, un desarrollador Full Stack y Analista de Datos apasionado por la tecnología. Me especializo en transformar ideas en soluciones digitales funcionales y atractivas. Mi experiencia abarca Java, React, HTML, CSS y JavaScript, lo que me permite construir desde interfaces de usuario dinámicas hasta robustos sistemas de backend. Siempre estoy buscando nuevos desafíos y oportunidades para aprender y crecer en el mundo del desarrollo de software.",
      "about-text2": "Fuera del código, disfruto explorando nuevas tecnologías, contribuyendo a proyectos de código abierto y compartiendo conocimientos con la comunidad. Creo firmemente en la importancia de un aprendizaje continuo y en la aplicación de las mejores prácticas para entregar productos de alta calidad. Si estás buscando un profesional dedicado y con ganas de hacer la diferencia, ¡me encantaría conectar!",

      // curriculum (varias claves soportadas)
      "curriculum-title": "Currículum",
      "curriculum-text": "Aquí puedes ver mi experiencia, educación y habilidades en detalle.",
      "curriculum-btn": "Descargar CV",
      "cv-title": "Currículum",
      "cv-contact-title": "Contacto",
      "cv-summary-title": "Extracto",
      "cv-summary-1": "Profesional en Agronomía, busco oportunidad para desempeñarme en el campo de manejo integrado de cultivos (arroz, plátano, café, cacao, palma aceitera).",
      "cv-summary-2": "Profesional con conocimiento en ArcGIS, Autocad y programas afines.",
      "cv-summary-3": "Estudiante de Diseño y Desarrollo Web Front-End busco oportunidad para adquirir experiencia en diseño y desarrollo de sitios web.",
      "cv-summary-4": "Busco desarrollar el trabajo en equipo, cooperando con todos y con la mayor disposición en enseñar y aprender.",
      "cv-skills-title": "Aptitudes principales",
      "cv-certifications-title": "Certificaciones",
      "cv-experience-title": "Experiencia",
      "cv-education-title": "Educación",
      // tareas/experiencia (si las pusiste con data-key)
      "cv-exp-1-title": "Ministerio de Desarrollo Agrario y Riego",
      "cv-exp-1-role": "Promotor Geolocalizador",
      "cv-exp-1-date": "junio de 2025 - Present (4 meses)",
      "cv-exp-1-location": "Provincia de Marañón, Huánuco, Perú",
      "cv-exp-1-desc": "Promotor de proyectos de geolocalización agrícola con experiencia en iniciativas lideradas por el Ministerio de Desarrollo Agrario y Riego. Especializado en la planificación estratégica de actividades en campo, la capacitación a productores y el uso de herramientas digitales para el registro y georreferenciación de parcelas de cultivos como café, cacao y palma aceitera.",
      "cv-exp-2-title": "Oficina Nacional de Procesos Electorales (ONPE)",
      "cv-exp-2-role": "Coordinador de Mesa",
      "cv-exp-2-date": "septiembre de 2022 - octubre de 2022 (2 meses)",
      "cv-exp-2-location": "Aucayacu, Huánuco, Perú",
      "cv-exp-3-title": "Municipalidad Distrital de Pucayacu",
      "cv-exp-3-role": "Técnico Agrario",
      "cv-exp-3-date": "octubre de 2021 - mayo de 2022 (8 meses)",
      "cv-exp-3-location": "Pucayacu, Huánuco, Perú",
      "cv-exp-4-title": "Municipalidad de José Crespo y Castillo",
      "cv-exp-4-role": "Técnico de campo",
      "cv-exp-4-date": "mayo de 2017 - mayo de 2021 (4 años 1 mes)",
      "cv-exp-4-location": "Aucayacu, Huánuco, Perú",
      "cv-exp-4-task-1": "Brindé asistencia técnica personalizada y grupal a los participantes de proyecto",
      "cv-exp-4-task-2": "Apoyo en el proceso de ejecución del proyecto",
      "cv-exp-4-task-3": "Apoyo en la certificación de parcelas orgánicas",
      "cv-exp-4-task-4": "Apoyo en las parcelas demostrativas",
      "cv-exp-4-task-5": "Coordiné con los beneficiarios de manera individual",

      // contact
      "contact-title": "Contacto",
      "contact-intro": "¿Interesado en colaborar o tienes alguna pregunta? Completa el siguiente formulario y me pondré en contacto contigo lo antes posible.",
      "contact-text": "¿Interesado en colaborar o tienes alguna pregunta? Completa el siguiente formulario y me pondré en contacto contigo lo antes posible.",
      "form-name": "Nombre:",
      "form-email": "Email:",
      "form-message": "Mensaje:",
      "form-submit": "Enviar Mensaje",
      "form-success": "¡Gracias por tu mensaje! Te responderé pronto.",
      "form-error": "Oops! Hubo un problema al enviar tu formulario."
    },

    "en": {
      "home": "Home",
      "about": "About Me",
      "curriculum": "Resume",
      "contact": "Contact",

      // index
      "main-title": "Take your digital business to the next level",
      "main-title-highlight": "with a high-quality Front-end!",
      "main-text": "Hi! I'm Wilmer Gulcochia Sanchez, a Full Stack Developer and Data Analyst passionate about technology. With experience in Java, React, HTML, CSS, and JavaScript, I specialize in transforming ideas into functional and attractive digital solutions for small businesses and designers. Ready to build something amazing together?",
      "social-media-title": "Access my social networks",
      "linkedin-btn": "LinkedIn",
      "github-btn": "GitHub",
      "instagram-btn": "Instagram",
      "footer-text": "© 2025 Wilmer Gulcochia Sanchez.",

      // about (variantes)
      "about-title": "About Me",
      "about-text-1": "Hi! I'm Wilmer Gulcochia Sanchez, a Full Stack Developer and Data Analyst passionate about technology. I specialize in transforming ideas into functional and attractive digital solutions. My experience includes Java, React, HTML, CSS, and JavaScript, which allows me to build everything from dynamic user interfaces to robust backend systems. I'm always looking for new challenges and opportunities to learn and grow in the software development world.",
      "about-text-2": "Outside of coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the community. I strongly believe in continuous learning and applying best practices to deliver high-quality products. If you're looking for a dedicated professional eager to make a difference, I'd love to connect!",
      "about-text1": "Hi! I'm Wilmer Gulcochia Sanchez, a Full Stack Developer and Data Analyst passionate about technology. I specialize in transforming ideas into functional and attractive digital solutions. My experience includes Java, React, HTML, CSS, and JavaScript, which allows me to build everything from dynamic user interfaces to robust backend systems. I'm always looking for new challenges and opportunities to learn and grow in the software development world.",
      "about-text2": "Outside of coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the community. I strongly believe in continuous learning and applying best practices to deliver high-quality products. If you're looking for a dedicated professional eager to make a difference, I'd love to connect!",

      // curriculum
      "curriculum-title": "Resume",
      "curriculum-text": "Here you can see my experience, education and skills in detail.",
      "curriculum-btn": "Download CV",
      "cv-title": "Resume",
      "cv-contact-title": "Contact",
      "cv-summary-title": "Summary",
      "cv-summary-1": "Agronomy professional, seeking opportunities in integrated crop management (rice, banana, coffee, cocoa, oil palm).",
      "cv-summary-2": "Professional with knowledge in ArcGIS, Autocad and related programs.",
      "cv-summary-3": "Student of Web Design and Front-End Development seeking opportunities to gain experience in web design and development.",
      "cv-summary-4": "I seek to develop teamwork, cooperating with everyone and with a strong willingness to teach and learn.",
      "cv-skills-title": "Main Skills",
      "cv-certifications-title": "Certifications",
      "cv-experience-title": "Experience",
      "cv-education-title": "Education",
      "cv-exp-1-title": "Ministry of Agrarian Development and Irrigation",
      "cv-exp-1-role": "Geolocation Promoter",
      "cv-exp-1-date": "June 2025 - Present",
      "cv-exp-1-location": "Provincia de Marañón, Huánuco, Peru",
      "cv-exp-1-desc": "Promoter of agricultural geolocation projects with experience in initiatives led by the Ministry of Agrarian Development and Irrigation. Specialized in strategic planning of field activities, training producers and using digital tools for parcel registration and georeferencing of crops such as coffee, cocoa and oil palm.",
      "cv-exp-2-title": "National Office of Electoral Processes (ONPE)",
      "cv-exp-2-role": "Table Coordinator",
      "cv-exp-2-date": "September 2022 - October 2022 (2 months)",
      "cv-exp-2-location": "Aucayacu, Huánuco, Peru",
      "cv-exp-3-title": "Municipal District of Pucayacu",
      "cv-exp-3-role": "Agronomy Technician",
      "cv-exp-3-date": "October 2021 - May 2022 (8 months)",
      "cv-exp-3-location": "Pucayacu, Huánuco, Peru",
      "cv-exp-4-title": "Municipality of José Crespo y Castillo",
      "cv-exp-4-role": "Field Technician",
      "cv-exp-4-date": "May 2017 - May 2021 (4 years 1 month)",
      "cv-exp-4-location": "Aucayacu, Huánuco, Peru",
      "cv-exp-4-task-1": "I provided personalized and group technical assistance to project participants",
      "cv-exp-4-task-2": "Support in the project execution process",
      "cv-exp-4-task-3": "Support in organic parcel certification",
      "cv-exp-4-task-4": "Support in demonstration plots",
      "cv-exp-4-task-5": "I coordinated individually with beneficiaries",

      // contact
      "contact-title": "Contact",
      "contact-intro": "Interested in collaborating or have a question? Fill out the form below and I’ll get back to you as soon as possible.",
      "contact-text": "Interested in collaborating or have a question? Fill out the form below and I’ll get back to you as soon as possible.",
      "form-name": "Name:",
      "form-email": "Email:",
      "form-message": "Message:",
      "form-submit": "Send Message",
      "form-success": "Thanks for your message! I'll reply soon.",
      "form-error": "Oops! There was a problem sending your form."
    }
  };

  // -----------------------
  // Aplicar traducciones (innerHTML to allow <br>)
  // -----------------------
  function applyTranslations(lang) {
    if (!lang || !translations[lang]) return;
    document.querySelectorAll('[data-key]').forEach(el => {
      const key = el.getAttribute('data-key');
      // buscar traducción directa
      if (translations[lang][key] !== undefined) {
        el.innerHTML = translations[lang][key];
      } else {
        // intentar variantes comunes (por si usaste guiones/underscore/num)
        const alt1 = key.replace(/_/g, '-');
        const alt2 = key.replace(/-/g, '_');
        if (translations[lang][alt1] !== undefined) el.innerHTML = translations[lang][alt1];
        else if (translations[lang][alt2] !== undefined) el.innerHTML = translations[lang][alt2];
        // si no hay traducción, no tocar el elemento
      }
    });
  }

  // -----------------------
  // Selector de idioma
  // -----------------------
  const languageSelect = document.getElementById('language-select');
  const savedLang = localStorage.getItem('language') || 'es';
  if (languageSelect) {
    languageSelect.value = savedLang;
    languageSelect.addEventListener('change', (e) => {
      const lang = e.target.value;
      localStorage.setItem('language', lang);
      applyTranslations(lang);
    });
  }
  // aplicar al inicio
  applyTranslations(savedLang);

  // -----------------------
  // Formulario de contacto: usa traducciones para mensajes
  // -----------------------
  const contactForm = document.querySelector('.contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const form = e.target;
      const data = new FormData(form);
      const lang = localStorage.getItem('language') || 'es';

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: data,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          if (formStatus) {
            formStatus.innerHTML = translations[lang]['form-success'] || translations['es']['form-success'];
            formStatus.style.color = 'green';
          }
          form.reset();
        } else {
          if (formStatus) {
            try {
              const responseData = await response.json();
              if (responseData && responseData.errors) {
                formStatus.innerHTML = responseData.errors.map(err => err.message).join(', ');
              } else {
                formStatus.innerHTML = translations[lang]['form-error'] || translations['es']['form-error'];
              }
            } catch (_) {
              formStatus.innerHTML = translations[lang]['form-error'] || translations['es']['form-error'];
            }
            formStatus.style.color = 'red';
          }
        }
      } catch (err) {
        if (formStatus) {
          formStatus.innerHTML = translations[lang]['form-error'] || translations['es']['form-error'];
          formStatus.style.color = 'red';
        }
      }
    });
  }

  // fin DOMContentLoaded
});
