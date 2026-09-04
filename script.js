const toggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const languageToggle = document.querySelector("[data-language-toggle]");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

const translations = {
  es: {
    page_title: "Envejecimiento en casa | MexIHC 2026",
    meta_description: "Taller MexIHC 2026 sobre diseño, implementación y evaluación de tecnologías para apoyar el envejecimiento saludable en casa.",
    nav_about: "Acerca",
    nav_topics: "Tópicos",
    nav_program: "Agenda",
    nav_submit: "Participa",
    nav_committee: "Comité",
    nav_dates: "Fechas",
    nav_location: "Ubicación",
    hero_eyebrow: "Taller MexIHC 2026",
    hero_title: "Envejecimiento en casa: Diseño, implementación y evaluación en contextos reales",
    hero_copy: "Un espacio interdisciplinario para discutir tecnologías centradas en las personas que promuevan autonomía, bienestar y calidad de vida de personas mayores en el hogar.",
    hero_submit: "Enviar trabajo",
    hero_agenda: "Ver agenda",
    hero_meta_label: "Información principal del taller",
    hero_date: "27 al 30 de octubre de 2026",
    hero_event: "MexIHC 2026",
    hero_capacity: "Cupo sugerido: 10 participantes",
    theme_label: "Tema central",
    theme_title: "Tecnologías para envejecer en casa con autonomía, bienestar y cuidado centrado en la persona",
    theme_copy: "El taller se enfoca en soluciones de HCI evaluadas en contextos reales: hogares inteligentes, monitoreo remoto, IA, salud digital y diseño participativo con personas mayores, cuidadores y profesionales de la salud.",
    theme_pages: "Hasta 6 páginas sin incluir referencias",
    theme_position: "Position Paper hasta 2 páginas",
    theme_template: "Artículos cortos en plantilla MexIHC",
    topics_kicker: "Tópicos de interés",
    topics_title: "Temas para trabajos, demos y discusiones",
    topic_1: "Envejecimiento en casa y tecnologías para la vida independiente",
    topic_2: "Diseño participativo con personas mayores y cuidadores",
    topic_3: "Tecnologías para salud, bienestar y calidad de vida",
    topic_4: "Hogares inteligentes y ambientes asistidos",
    topic_5: "Monitoreo remoto y tecnologías ubicuas",
    topic_6: "Biomarcadores digitales y fenotipado digital",
    topic_7: "Inteligencia Artificial para apoyo al envejecimiento saludable",
    topic_8: "Tecnologías para combatir el aislamiento social y la soledad",
    topic_9: "Evaluación longitudinal de tecnologías en el hogar",
    topic_10: "Consideraciones éticas, privacidad y autonomía",
    topic_11: "Apropiación y adopción tecnológica en adultos mayores",
    about_kicker: "Acerca del taller",
    about_title: "Diseñar tecnologías para vivir y envejecer con autonomía",
    objectives: "Objetivos",
    about_p1: "Este taller tiene como objetivo reunir a investigadores, estudiantes, profesionales, cuidadores y adultos mayores interesados en el diseño, implementación y evaluaciones propias de la Interacción Humano-Computadora que promuevan la calidad de vida, autonomía y bienestar de las personas mayores en el hogar.",
    about_p2: "A través del intercambio de experiencias, metodologías y casos de estudio, los participantes discutirán los retos y oportunidades asociados con el desarrollo de soluciones tecnológicas para apoyar el envejecimiento saludable, la vida independiente y el cuidado centrado en la persona.",
    about_p3: "El taller busca fomentar colaboraciones interdisciplinarias y fortalecer la comunidad de investigación dedicada al envejecimiento y la tecnología.",
    relevance_kicker: "Relevancia",
    relevance_title: "HCI con impacto social en escenarios reales",
    relevance_p1: "La investigación en Interacción Humano-Computadora ha evolucionado más allá del desarrollo de interfaces para abordar desafíos sociales relacionados con la salud y en particular con las tecnologías que permitan a los adultos mayores a permanecer en casa de manera segura e independiente. En este contexto, existe una creciente necesidad de compartir experiencias, metodologías y lecciones aprendidas derivadas de proyectos desarrollados en escenarios de personas mayores viviendo solas.",
    relevance_p2: "Este taller busca crear un espacio de discusión e intercambio para investigadores, estudiantes, profesionales, cuidadores y adultos mayores interesados en el diseño, implementación y evaluaciones dentro de la Interacción Humano-Computadora con impacto social. El enfoque del taller se alinea con la visión de MexIHC de promover investigación relevante para las necesidades de la sociedad, fomentando la colaboración interdisciplinaria y la generación de soluciones tecnológicas centradas en las personas.",
    relevance_p3: "Además, el taller permitirá visibilizar experiencias e identificar necesidades, retos, barreras, tecnologías existentes en áreas como envejecimiento en casa, bienestar y salud digital, accesibilidad, apoyo a cuidadores, participación social y tecnologías emergentes para personas mayores.",
    audience_kicker: "Público objetivo",
    audience_title: "Una conversación abierta entre investigación, diseño y cuidado",
    aud_1: "Estudiantes de licenciatura y posgrado",
    aud_2: "Investigadores en HCI",
    aud_3: "Profesionales en diseño de interacción",
    aud_4: "Desarrolladores de tecnologías para envejecimiento saludable",
    aud_5: "Profesionales de la salud y cuidadores",
    program_kicker: "Contenido y agenda",
    program_title: "Presentaciones breves, discusión colaborativa y cierre común",
    program_intro: "El taller combina una presentación principal, presentaciones breves, discusiones colaborativas y actividades de reflexión para explorar desde el punto de vista de HCI el diseño, implementación y evaluación de tecnologías para promover la autonomía, el bienestar y la calidad de vida de las personas mayores en el hogar.",
    agenda_intro_title: "Introducción al taller",
    agenda_intro_text: "Bienvenida, presentación de organizadores, participantes y objetivos del taller.",
    keynote_title: "Keynote",
    keynote_name: "Dr. Alison Grittner",
    keynote_role: "Associate Professor, Spatial Justice Researcher, Designer, & Educator, Cape Breton University, Canada.",
    keynote_topic: "Aging in the Right Place in Rural Communities.",
    keynote_view: "Ver publicidad de la Keynote",
    session1_title: "Sesión 1: Diseñando para envejecer en casa",
    session_text: "5 presentaciones cortas: 7 minutos de presentación y 3 minutos de preguntas.",
    summary1_title: "Resumen y conclusiones de la sesión 1",
    summary1_text: "Síntesis de desafíos, necesidades y oportunidades identificadas.",
    break_title: "Receso",
    break_text: "Café y networking informal.",
    session2_title: "Sesión 2: Diseñando para envejecer en casa",
    discussion_title: "Discusión grupal",
    discussion_text: "¿Cómo medir el impacto de la tecnología en personas mayores?: Los participantes compartirán experiencias en HCI relacionadas con estudios longitudinales, salud digital, biomarcadores digitales, fenotipado digital, monitoreo remoto, métodos mixtos, privacidad, ética y evaluación de resultados asociados con autonomía, bienestar y calidad de vida.",
    closing_title: "Reflexión final y cierre",
    closing_text: "Construcción de una agenda de investigación sobre tecnologías para el envejecimiento saludable, identificación de oportunidades de colaboración y definición de retos prioritarios para la comunidad de IHC.",
    submission_kicker: "Convocatoria",
    submission_title: "Criterios de evaluación considerados",
    submission_traditional: "Los trabajos en la modalidad tradicional aceptados serán publicados en la revista: Avances en Interacción Humano-Computadora (AIHC) de la AmexIHC, en la sección para Trabajos en Progreso.",
    position_intro: "Se informa sobre la modalidad de Position papers, los cuales son trabajos con una extensión máxima de dos cuartillas. Se tendrán dos opciones para esta modalidad:",
    position1: "1.- Publicación en la revista en un esquema similar a los Posters (costo de $1,600 MXN).",
    position2: "2.- Publicación en la página del evento, en un esquema similar a la competencia de diseño SDC (costo de $600 MXN).",
    payment: "Para realizar el pago de inscripción de autores, <a href=\"https://www.mexihc.org/2026/es\">visitar la página de MexIHC.</a>",
    submission_short: "Envía un artículo corto de hasta 6 páginas sin incluir referencias",
    submission_publication: "<strong>Publicación:</strong> Todos los artículos aceptados serán publicados en un número especial de la revista <a href=\"https://revistaaihc.mx/index.php/aihc\">AMexIHC Avances en Interacción Humano-Computadora.</a>",
    submission_format: "<strong>Formato:</strong> <a href=\"https://mexihc.org/aihc_template.zip\">Plantilla oficial de MexIHC</a>",
    submission_send: "<strong>Envío de trabajos:</strong> <a href=\"https://forms.gle/4iEpMhRJSkffhSxB9\">Da clic en el siguiente enlace</a>",
    submission_focus: "<strong>Enfoque:</strong> Diseño, implementación y evaluación de tecnologías para autonomía, bienestar y vida independiente en el hogar.",
    organizers_kicker: "Organizadores",
    organizers_title: "Equipo organizador",
    committee_kicker: "Comité de programa",
    committee_title: "Comité de programa",
    dates_kicker: "Fechas importantes",
    dates_title: "Calendario",
    date1_date: "5 sep 2026",
    date1_text: "Límite extendido para recepción de artículos",
    date2_date: "12 sep 2026",
    date2_text: "Notificación de aceptación de trabajos",
    date3_date: "14 sep 2026",
    date3_text: "Entrega de versión final (Camera Ready)",
    date4_date: "27-30 oct 2026",
    date4_text: "Celebración de MexIHC 2026",
    location_kicker: "Ubicación del evento",
    location_title: "Sede",
    location_p1: "El evento se llevará a cabo en las instalaciones de CICESE, en la ciudad de Ensenada, Baja California.",
    location_p2: "Puedes utilizar el mapa para explorar la zona y obtener indicaciones desde tu ubicación.",
    footer_title: "Envejecimiento en casa: Diseño, implementación y evaluación en contextos reales",
    footer_top: "Volver arriba",
    keynote_modal_title: "Keynote de Alison Grittner",
    keynote_image_alt: "Publicidad de la Keynote de Alison Grittner",
    org_lizbeth_affiliation: "Faculty of Computer Science, Dalhousie University, Canadá"
  },
  en: {
    page_title: "Aging in Place | MexIHC 2026",
    meta_description: "MexIHC 2026 workshop on the design, implementation, and evaluation of technologies that support healthy aging at home.",
    nav_about: "About",
    nav_topics: "Topics",
    nav_program: "Program",
    nav_submit: "Submissions",
    nav_committee: "Committee",
    nav_dates: "Dates",
    nav_location: "Location",
    hero_eyebrow: "MexIHC 2026 Workshop",
    hero_title: "Aging in Place: Design, Implementation, and Evaluation in Real-World Contexts",
    hero_copy: "An interdisciplinary space to discuss people-centered technologies that promote autonomy, well-being, and quality of life for older adults at home.",
    hero_submit: "Submit a Paper",
    hero_agenda: "View Program",
    hero_meta_label: "Main workshop information",
    hero_date: "October 27–30, 2026",
    hero_event: "MexIHC 2026",
    hero_capacity: "Suggested capacity: 10 participants",
    theme_label: "Central theme",
    theme_title: "Technologies for Aging in Place with Autonomy, Well-being, and Person-Centered Care",
    theme_copy: "The workshop focuses on HCI solutions evaluated in real-world contexts: smart homes, remote monitoring, AI, digital health, and participatory design with older adults, caregivers, and health professionals.",
    theme_pages: "Up to 6 pages excluding references",
    theme_position: "Position Paper up to 2 pages",
    theme_template: "Short papers using the MexIHC template",
    topics_kicker: "Topics of interest",
    topics_title: "Topics for papers, demos, and discussions",
    topic_1: "Aging in place and technologies for independent living",
    topic_2: "Participatory design with older adults and caregivers",
    topic_3: "Technologies for health, well-being, and quality of life",
    topic_4: "Smart homes and assisted environments",
    topic_5: "Remote monitoring and ubiquitous technologies",
    topic_6: "Digital biomarkers and digital phenotyping",
    topic_7: "Artificial Intelligence to support healthy aging",
    topic_8: "Technologies to address social isolation and loneliness",
    topic_9: "Longitudinal evaluation of technologies in the home",
    topic_10: "Ethical considerations, privacy, and autonomy",
    topic_11: "Technology appropriation and adoption among older adults",
    about_kicker: "About the workshop",
    about_title: "Designing technologies for living and aging with autonomy",
    objectives: "Objectives",
    about_p1: "This workshop aims to bring together researchers, students, professionals, caregivers, and older adults interested in Human-Computer Interaction design, implementation, and evaluation approaches that promote quality of life, autonomy, and well-being for older adults at home.",
    about_p2: "Through the exchange of experiences, methodologies, and case studies, participants will discuss the challenges and opportunities associated with developing technological solutions that support healthy aging, independent living, and person-centered care.",
    about_p3: "The workshop seeks to foster interdisciplinary collaborations and strengthen the research community focused on aging and technology.",
    relevance_kicker: "Relevance",
    relevance_title: "HCI with social impact in real-world settings",
    relevance_p1: "Human-Computer Interaction research has evolved beyond interface development to address social challenges related to health, particularly technologies that enable older adults to remain safely and independently at home. In this context, there is a growing need to share experiences, methodologies, and lessons learned from projects conducted with older adults living alone.",
    relevance_p2: "This workshop seeks to create a discussion and exchange space for researchers, students, professionals, caregivers, and older adults interested in HCI design, implementation, and evaluation with social impact. The workshop aligns with MexIHC's vision of promoting research relevant to society's needs, fostering interdisciplinary collaboration and people-centered technological solutions.",
    relevance_p3: "The workshop will also highlight experiences and identify needs, challenges, barriers, and existing technologies in areas such as aging in place, digital health and well-being, accessibility, caregiver support, social participation, and emerging technologies for older adults.",
    audience_kicker: "Target audience",
    audience_title: "An open conversation across research, design, and care",
    aud_1: "Undergraduate and graduate students",
    aud_2: "HCI researchers",
    aud_3: "Interaction design professionals",
    aud_4: "Developers of technologies for healthy aging",
    aud_5: "Health professionals and caregivers",
    program_kicker: "Program and schedule",
    program_title: "Short presentations, collaborative discussion, and a shared closing",
    program_intro: "The workshop combines a keynote, short presentations, collaborative discussions, and reflection activities to explore, from an HCI perspective, the design, implementation, and evaluation of technologies that promote autonomy, well-being, and quality of life for older adults at home.",
    agenda_intro_title: "Workshop introduction",
    agenda_intro_text: "Welcome, introduction of organizers and participants, and presentation of the workshop objectives.",
    keynote_title: "Keynote",
    keynote_name: "Dr. Alison Grittner",
    keynote_role: "Associate Professor, Spatial Justice Researcher, Designer, & Educator, Cape Breton University, Canada.",
    keynote_topic: "Aging in the Right Place in Rural Communities.",
    keynote_view: "View Keynote Poster",
    session1_title: "Session 1: Designing for Aging in Place",
    session_text: "5 short presentations: 7 minutes for presentation and 3 minutes for questions.",
    summary1_title: "Session 1 summary and conclusions",
    summary1_text: "Synthesis of identified challenges, needs, and opportunities.",
    break_title: "Break",
    break_text: "Coffee and informal networking.",
    session2_title: "Session 2: Designing for Aging in Place",
    discussion_title: "Group discussion",
    discussion_text: "How can we measure the impact of technology on older adults? Participants will share HCI experiences related to longitudinal studies, digital health, digital biomarkers, digital phenotyping, remote monitoring, mixed methods, privacy, ethics, and outcome evaluation associated with autonomy, well-being, and quality of life.",
    closing_title: "Final reflection and closing",
    closing_text: "Development of a research agenda on technologies for healthy aging, identification of collaboration opportunities, and definition of priority challenges for the HCI community.",
    submission_kicker: "Call for participation",
    submission_title: "Evaluation criteria",
    submission_traditional: "Accepted traditional-format papers will be published in the journal Avances en Interacción Humano-Computadora (AIHC) of AmexIHC, in the Work in Progress section.",
    position_intro: "Position papers are limited to two pages. Two options will be available for this format:",
    position1: "1.- Publication in the journal under a scheme similar to Posters (cost: $1,600 MXN).",
    position2: "2.- Publication on the event website under a scheme similar to the SDC design competition (cost: $600 MXN).",
    payment: "To make the author registration payment, <a href=\"https://www.mexihc.org/2026/es\">visit the MexIHC website.</a>",
    submission_short: "Submit a short paper of up to 6 pages excluding references",
    submission_publication: "<strong>Publication:</strong> All accepted papers will be published in a special issue of the journal <a href=\"https://revistaaihc.mx/index.php/aihc\">AMexIHC Avances en Interacción Humano-Computadora.</a>",
    submission_format: "<strong>Format:</strong> <a href=\"https://mexihc.org/aihc_template.zip\">Official MexIHC template</a>",
    submission_send: "<strong>Paper submission:</strong> <a href=\"https://forms.gle/4iEpMhRJSkffhSxB9\">Click the following link</a>",
    submission_focus: "<strong>Focus:</strong> Design, implementation, and evaluation of technologies for autonomy, well-being, and independent living at home.",
    organizers_kicker: "Organizers",
    organizers_title: "Organizing team",
    committee_kicker: "Program committee",
    committee_title: "Program committee",
    dates_kicker: "Important dates",
    dates_title: "Calendar",
    date1_date: "Sep 5, 2026",
    date1_text: "Extended deadline for paper submissions",
    date2_date: "Sep 12, 2026",
    date2_text: "Paper acceptance notification",
    date3_date: "Sep 14, 2026",
    date3_text: "Final version submission (Camera Ready)",
    date4_date: "Oct 27–30, 2026",
    date4_text: "MexIHC 2026",
    location_kicker: "Event location",
    location_title: "Venue",
    location_p1: "The event will take place at CICESE facilities in the city of Ensenada, Baja California.",
    location_p2: "You can use the map to explore the area and get directions from your location.",
    footer_title: "Aging in Place: Design, Implementation, and Evaluation in Real-World Contexts",
    footer_top: "Back to top",
    keynote_modal_title: "Keynote by Alison Grittner",
    keynote_image_alt: "Alison Grittner keynote poster",
    org_lizbeth_affiliation: "Faculty of Computer Science, Dalhousie University, Canada"
  }
};

function setLanguage(lang) {
  const dict = translations[lang] || translations.es;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (!(key in dict)) return;

    if (element.dataset.i18nAttr) {
      element.setAttribute(element.dataset.i18nAttr, dict[key]);
    } else {
      element.innerHTML = dict[key];
    }
  });

  if (languageToggle) {
    languageToggle.textContent = lang === "es" ? "English" : "Español";
    languageToggle.setAttribute(
      "aria-label",
      lang === "es" ? "Switch to English" : "Cambiar a español"
    );
  }

  document.querySelector("[data-header] .brand")?.setAttribute(
    "aria-label",
    lang === "es" ? "Ir al inicio" : "Go to home"
  );

  document.querySelector("[data-nav-toggle]")?.setAttribute(
    "aria-label",
    lang === "es" ? "Abrir menú" : "Open menu"
  );

  document.querySelector(".hero-logo")?.setAttribute(
    "alt",
    lang === "es" ? "Logo de la organización" : "Organization logo"
  );

  document.title = dict.page_title;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", dict.meta_description);

  if (languageToggle) {
    languageToggle.dataset.lang = lang;
  }

  localStorage.setItem("mexihc-language", lang);
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const current = document.documentElement.lang === "en" ? "en" : "es";
    setLanguage(current === "es" ? "en" : "es");
  });
}

const savedLanguage = localStorage.getItem("mexihc-language");
setLanguage(savedLanguage === "en" ? "en" : "es");

// Keynote poster modal: it overlays the page so the program/calendar layout does not change.
const keynoteModal = document.querySelector("[data-keynote-modal]");
const keynoteOpen = document.querySelector("[data-keynote-open]");
const keynoteCloseButtons = document.querySelectorAll("[data-keynote-close]");

function openKeynoteModal() {
  if (!keynoteModal) return;
  keynoteModal.hidden = false;
  document.body.classList.add("modal-open");
  keynoteModal.querySelector(".keynote-modal-close")?.focus();
}

function closeKeynoteModal() {
  if (!keynoteModal) return;
  keynoteModal.hidden = true;
  document.body.classList.remove("modal-open");
  keynoteOpen?.focus();
}

keynoteOpen?.addEventListener("click", openKeynoteModal);
keynoteCloseButtons.forEach((button) => button.addEventListener("click", closeKeynoteModal));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && keynoteModal && !keynoteModal.hidden) {
    closeKeynoteModal();
  }
});
