/* ================================
   TRANSLATIONS.JS
   Sistema de traducción ES/EN
   Organizado por secciones
   ================================ */

const translations = {
  es: {
    // ============================================
    // 🌐 NAVEGACIÓN GLOBAL
    // ============================================
    'nav.inicio': 'Inicio',
    'nav.sobre-mi': 'Sobre mí',
    'nav.proyectos': 'Proyectos',
    'nav.frontend': 'Frontend',
    'nav.contacto': 'Contacto',
    'nav.previous': 'Anterior',
    'nav.next': 'Siguiente',
    'nav.view-all': 'Ver todos',
    'nav.back-to-top': 'Volver al inicio',
    
    // ============================================
    // 🏷️ BADGES Y ESTADOS COMUNES
    // ============================================
    'badge.live': 'Live',
    'badge.case-study': 'Case Study',
    'badge.implemented': 'Implementado',
    'badge.partial': 'Implementación Parcial',
    'badge.not-implemented': 'No Implementado',
    'badge.research': 'Research Project',
    'badge.internal-services': 'Servicios Internos',
    
    // ============================================
    // 🔗 LINKS Y BOTONES COMUNES
    // ============================================
    'project.link-code': 'Código',
    'project.link-demo': 'Demo',
    'project.link-live': 'Ver sitio',
    'project.back-home': 'Volver al inicio',
    'project.back-projects': 'Volver a proyectos',
    
    // ============================================
    // 🧩 COMPONENTES COMUNES DE PROYECTOS
    // (Elementos que se repiten en TODAS las páginas detalle)
    // ============================================
    'project-detail.view-case': 'Ver caso completo',
    'project-detail.overview': 'Resumen',
    'project-detail.challenge': 'El desafío',
    'project-detail.solution': 'La solución',
    'project-detail.process': 'Proceso',
    'project-detail.results': 'Resultados',
    'project-detail.learnings': 'Aprendizajes',
    'project-detail.my-role': 'Mi rol',
    'project-detail.role': 'Rol',
    'project-detail.team': 'Equipo',
    'project-detail.team-composition': 'Composición del equipo:',
    'project-detail.responsibilities': 'Mis responsabilidades incluyeron:',
    'project-detail.duration': 'Duración',
    'project-detail.year': 'Año',
    'project-detail.location': 'Ubicación',
    'project-detail.scope': 'Alcance',
    'project-detail.impact': 'Impacto',
    'project-detail.tech-stack': 'Stack Técnico',
    'project-detail.tools': 'Herramientas',
    'project-detail.specific-impacts': 'Impactos específicos:',
    'project-detail.reflections': 'Reflexiones',
    'project-detail.visual-resources': 'Recursos Visuales',
    
    // ============================================
    // 📊 SIDEBAR COMÚN
    // ============================================
    'sidebar.project-info': 'Info del Proyecto',
    'sidebar.company': 'Empresa',
    'sidebar.client': 'Cliente',
    'sidebar.project-team': 'Equipo del Proyecto',
    'sidebar.me': 'yo',
    'sidebar.under-my-lead': 'bajo mi liderazgo',
    'sidebar.project-scope': 'Alcance del Proyecto',
    'sidebar.total': 'totales',
    'sidebar.conducted-by-me': 'Realizadas por mí',
    'sidebar.systems-analyzed': 'Sistemas analizados',
    'sidebar.skills-applied': 'Habilidades Aplicadas',
    'sidebar.interested-title': '¿Te interesó este proyecto?',
    
    // ============================================
    // ⏰ TIEMPO Y UBICACIÓN
    // ============================================
    'time.months': 'meses',
    'time.years': 'años',
    'time.days': 'días',
    'location.countries': 'países',
    
    // ============================================
    // 📈 MÉTRICAS COMUNES
    // ============================================
    'metrics.interviews': 'entrevistas',
    'metrics.systems': 'sistemas',
    'metrics.users': 'usuarios',
    'metrics.projects': 'proyectos',
    'metrics.teachers': 'docentes',
    'metrics.students': 'estudiantes',
    
    // ============================================
    // 🎓 HABILIDADES COMUNES
    // ============================================
    'skills.team-leadership': 'Liderazgo de Equipo',
    'skills.in-depth-interviews': 'Entrevistas en Profundidad',
    'skills.systemic-analysis': 'Análisis Sistémico',
    'skills.facilitation': 'Facilitación',
    'skills.process-design': 'Diseño de Procesos',
    'skills.qualitative-research': 'Investigación Cualitativa',
    'skills.bilingual': 'Bilingüe (ES/EN)',
    
    // ============================================
    // 🏠 INDEX.HTML - HERO
    // ============================================
    'hero.badge': 'Disponible para proyectos Frontend • Remote/Presencial',
    'hero.title': 'Frontend Developer',
    'hero.title-2': 'con visión de diseño',
    'hero.subtitle': 'Creo interfaces funcionales y experiencias digitales centradas en el usuario. Combino código limpio con un profundo entendimiento de UX para construir productos que realmente funcionan.',
    'hero.exp-1-value': '4+ años',
    'hero.exp-1-label': 'UX/Service Design',
    'hero.exp-2-value': '1 año',
    'hero.exp-2-label': 'Frontend Development',
    'hero.exp-3-value': 'Junior-Mid',
    'hero.exp-3-label': 'Developer Level',
    'hero.btn-projects': 'Ver proyectos',
    'hero.btn-cv': 'Descargar CV',
    
    // ============================================
    // 🏠 INDEX.HTML - ABOUT
    // ============================================
    'about.badge': 'Sobre mí',
    'about.title': 'Una perspectiva única',
    'about.description': 'Mi transición desde el diseño estratégico hacia el desarrollo frontend me ha dado una ventaja única: entiendo tanto a los usuarios como la tecnología que da vida a sus experiencias.',
    'about.subtitle': 'Mi enfoque',
    'about.text-1': 'Antes de escribir una línea de código, me pregunto: ¿esto realmente resuelve el problema del usuario? Mi background en UX Research y Service Design me permite ver más allá de la interfaz y crear soluciones que tienen sentido tanto técnica como humanamente.',
    'about.text-2': 'Actualmente me enfoco en proyectos frontend donde puedo aplicar esta visión completa: desde entender qué necesita el usuario hasta implementarlo con código limpio, mantenible y escalable.',
    
    // Timeline
    'timeline.1.title': 'Frontend Developer',
    'timeline.1.period': '2025 - Presente',
    'timeline.1.text': 'Enfoque en JavaScript, React y desarrollo de interfaces. Proyectos con integración de IA y APIs.',
    'timeline.2.title': 'UX/UI Designer & Service Designer',
    'timeline.2.period': '2020 - 2025',
    'timeline.2.text': 'Clínica Alemana, BID, Spotify. Research, prototipado y diseño de experiencias para productos digitales y servicios.',
    'timeline.3.title': 'Service Design',
    'timeline.3.period': '2019 - 2020',
    'timeline.3.text': 'Proyectos de diseño estratégico y consultoría para instituciones públicas y privadas en Perú.',
    
    // Highlight Cards
    'highlight.1.title': 'Clean Code',
    'highlight.1.text': 'Código semántico, bien documentado y pensado para escalar. Cada función tiene un propósito claro.',
    'highlight.2.title': 'User-Centered',
    'highlight.2.text': 'Cada decisión técnica está guiada por la experiencia del usuario. Accesibilidad y usabilidad no son opcionales.',
    'highlight.3.title': 'Continuous Learning',
    'highlight.3.text': 'El desarrollo web evoluciona rápido. Me mantengo actualizada con nuevas tecnologías y mejores prácticas.',
    'highlight.4.title': 'Team Player',
    'highlight.4.text': 'Experiencia colaborando con equipos multidisciplinarios: developers, designers, product managers.',
    
    // ============================================
    // 🏠 INDEX.HTML - PROJECTS
    // ============================================
    'projects.badge': 'Portafolio',
    'projects.title': 'Proyectos destacados',
    'projects.description': 'Una selección de proyectos que demuestran mis habilidades técnicas, de diseño y mi capacidad para resolver problemas reales.',
    'projects.btn-all': 'Ver todos los proyectos',
    'projects.btn-all-text': 'Explora mi portafolio completo',
    'projects.btn-case': 'Ver caso completo',
    'projects.btn-full': 'Ver proyecto completo',
    
    // ============================================
    // 🏠 INDEX.HTML - SKILLS
    // ============================================
    'skills.badge': 'Stack Técnico',
    'skills.title': 'Habilidades & Tecnologías',
    'skills.description': 'Mi stack técnico y herramientas actuales. En continuo aprendizaje y actualización.',
    'skills.frontend': 'Frontend Development',
    'skills.tools': 'Tools & Workflow',
    'skills.design': 'Design & UX',
    'skills.legend-advanced': 'Advanced',
    'skills.legend-intermediate': 'Intermediate',
    'skills.legend-learning': 'Learning',
    
    // ============================================
    // 🏠 INDEX.HTML - CONTACT
    // ============================================
    'contact.badge': 'Contacto',
    'contact.title': '¿Trabajamos juntos?',
    'contact.description': 'Disponible para posiciones en diseño, frontend (junior-mid level), proyectos freelance o colaboraciones.',
    'contact.why-title': '¿Por qué trabajar conmigo?',
    'contact.why-text': 'No solo escribo código, entiendo a los usuarios. Mi background en UX me permite crear soluciones técnicas que realmente resuelven problemas.',
    'contact.cta-title': 'Buscando oportunidades',
    'contact.cta-text': 'Actualmente busco posiciones frontend (junior-mid), diseño freelance o full-time. Abierta a remoto o presencial en Madrid.',
    'contact.btn-email': 'Enviar mensaje',
    'contact.btn-cv': 'Descargar CV',
    'contact.linkedin-text': 'Conectemos profesionalmente',
    'contact.github-text': 'Revisa mi código',
    
    // ============================================
    // 🦶 FOOTER
    // ============================================
    'footer.text': 'Hecho con código y mucho café ☕',
    
    // ============================================
    // 📂 TODOS-PROYECTOS.HTML
    // ============================================
    'all-projects.back': 'Volver al inicio',
    'all-projects.title': 'Todos los Proyectos',
    'all-projects.description': 'Una colección completa de mis trabajos en frontend development, UX/UI design y service design. Cada proyecto representa aprendizaje, desafíos superados y soluciones creativas.',
    'all-projects.filter-all': 'Todos',
    'all-projects.filter-frontend': 'Frontend',
    'all-projects.filter-ux': 'UX/UI',
    'all-projects.filter-service': 'Service Design',
    'all-projects.cat-frontend': 'Frontend Development',
    'all-projects.cat-ux': 'UX/UI Design',
    'all-projects.cat-service': 'Service Design',
    
    // ============================================
    // 📊 PROYECTO: BID - SECRETARÍA
    // ============================================
    
    // Hero
    'project.bid.hero-title': 'BID – Rediseño de Servicios de Secretaría',
    'project.bid.hero-subtitle': 'Rediseño estratégico de servicios internos en la Secretaría del BID. 80 entrevistas en 7-10 países, diagnóstico de 50+ sistemas y rediseño de procesos invisibles para mejorar la coordinación y reducir la sobrecarga operativa.',
    
    // Context
    'project.bid.context-title': 'Contexto',
    'project.bid.context-text': 'Este proyecto fue desarrollado junto a la Secretaría del Banco Interamericano de Desarrollo (BID), un área con una estructura altamente compleja y fragmentada. Cada departamento operaba como un silo independiente —y muchas veces cada persona también— lo que generaba sobrecarga, duplicidad de tareas y baja visibilidad organizacional. La Secretaría es un área crítica del BID que sirve a múltiples stakeholders internos y externos: Las "Sillas" (Board) representantes de países miembros, El Presidente del BID, Empleados del banco de múltiples departamentos, y el Área de traducciones. Nuestra misión era entender ese ecosistema denso de relaciones, procesos, herramientas y tensiones para rediseñar los servicios internos. El proyecto se desarrolló 100% remoto, conectando con personas en 7-10 países diferentes.',
    
    // Challenge
    'project.bid.challenge-text': '¿Cómo rediseñar los servicios de una unidad con más de 50 sistemas en uso (entre herramientas legacy, soluciones parche y herramientas informales), donde los procesos están atomizados y cada equipo ha tenido que "inventar" su propia manera de operar?',
    'project.bid.challenge-intro': 'La Secretaría enfrentaba múltiples barreras críticas:',
    'project.bid.challenge-1': 'Fragmentación total de la gestión del trabajo: Cada departamento operaba como isla independiente',
    'project.bid.challenge-2': 'Procesos informales: Nacidos por necesidad, sin documentación ni trazabilidad',
    'project.bid.challenge-3': 'Herramientas desconectadas: 50+ sistemas sin integración entre sí',
    'project.bid.challenge-4': 'Saturación operativa y emocional: Personal desgastado por retrabajo constante',
    'project.bid.challenge-5': 'Falta de visibilidad organizacional: Nadie tenía una visión completa del flujo de trabajo',
    'project.bid.challenge-conclusion': 'Nuestro reto era construir una visión común que permitiera evolucionar sin generar más caos.',
    
    // Role
    'project.bid.role-text': 'Como Lead Service Designer en Continuum, lideré la estrategia de investigación, el proceso de diseño y la coordinación del equipo multidisciplinario durante los 6 meses del proyecto.',
    'project.bid.team-1': 'Yo (Lead Service Designer)',
    'project.bid.team-2': '2 Service Designers bajo mi liderazgo',
    
    // Responsibilities
    'project.bid.resp-1': 'Diseñar el enfoque completo de investigación cualitativa',
    'project.bid.resp-2': 'Realizar más de 40 entrevistas en profundidad (en inglés y español)',
    'project.bid.resp-3': 'Liderar la sistematización y análisis de las 80 entrevistas totales',
    'project.bid.resp-4': 'Coordinar y guiar el trabajo de los 2 Service Designers del equipo',
    'project.bid.resp-5': 'Definir oportunidades estratégicas y liderar el rediseño de procesos clave',
    'project.bid.resp-6': 'Diseñar sistema de cuestionarios y plantillas para ordenar solicitudes',
    'project.bid.resp-7': 'Planificar y supervisar todos los entregables del proyecto',
    'project.bid.resp-8': 'Generar ambientes de confianza en contextos sensibles y formales',
    
    // Process
    'project.bid.process-intro': 'Implementamos un proceso de investigación y diseño profundo, enfocado en entender la complejidad sistémica antes de proponer soluciones.',
    'project.bid.process-1-title': '1. Investigación Cualitativa Profunda',
    'project.bid.process-1-intro': 'Inmersión total en el ecosistema de la Secretaría:',
    'project.bid.process-1-item-1': '80 entrevistas con personas de distintas regiones, niveles jerárquicos y unidades',
    'project.bid.process-1-item-2': 'Yo personalmente realicé más de 40 entrevistas en inglés y español',
    'project.bid.process-1-item-3': 'Entrevistamos a empleados del banco, representantes de las Sillas (Board) de 7-10 países, y el equipo de Secretaría',
    'project.bid.process-1-item-4': 'Generación de ambientes de confianza en contextos sensibles y formales',
    'project.bid.process-1-item-5': 'Análisis de tensiones estructurales, emocionales y relacionales',
    'project.bid.process-1-item-6': 'Exploración de más de 50 sistemas y herramientas utilizadas activamente',
    
    'project.bid.process-2-title': '2. Diagnóstico de Desconexión y Puntos de Dolor',
    'project.bid.process-2-intro': 'Sistematización profunda de hallazgos:',
    'project.bid.process-2-item-1': 'Mapeo de flujos rotos, duplicidades, bloqueos y sistemas informales',
    'project.bid.process-2-item-2': 'Identificación de tareas críticas sin trazabilidad ni claridad de responsables',
    'project.bid.process-2-item-3': 'Documentación de casos extremos como: una trabajadora que mantenía tres tablas de Excel con la misma información debido a la desconfianza generada por ediciones no controladas',
    'project.bid.process-2-item-4': 'Análisis del ecosistema de 50+ herramientas sin integración',
    
    'project.bid.process-3-title': '3. Diseño de Soluciones de Organización Interna',
    'project.bid.process-3-intro': 'Co-creación de sistemas que reducen el caos sin añadir carga:',
    'project.bid.process-3-item-1': 'Creación de arquetipos de usuarios internos',
    'project.bid.process-3-item-2': 'Rediseño de cómo se reciben, organizan y ejecutan las tareas en Secretaría',
    'project.bid.process-3-item-3': 'Diseño de un sistema de entrada con cuestionarios automáticos para clarificar requerimientos',
    'project.bid.process-3-item-4': 'Propuestas de herramientas compartidas que reducen el retrabajo y aumentan la visibilidad',
    'project.bid.process-3-item-5': 'Plantillas estandarizadas para solicitudes de servicio',
    'project.bid.process-3-item-6': 'Flujos rediseñados con trazabilidad clara de responsables y estados',
    
    'project.bid.process-4-title': '4. Entrega e Implementación',
    'project.bid.process-4-intro': 'Documentación estratégica para la acción:',
    'project.bid.process-4-item-1': 'Documento estratégico completo con hallazgos y recomendaciones',
    'project.bid.process-4-item-2': 'Cuestionarios implementables listos para uso inmediato',
    'project.bid.process-4-item-3': 'Plantillas de solicitud rediseñadas',
    'project.bid.process-4-item-4': 'Roadmap de implementación escalable',
    'project.bid.process-4-item-5': 'El informe fue presentado en asamblea y usado para reestructurar toda la Secretaría en 2021',
    
    // Findings
    'project.bid.findings-title': 'Hallazgos Clave',
    'project.bid.finding-1-title': 'La complejidad invisible del trabajo "invisible"',
    'project.bid.finding-1-text': 'Descubrimos que gran parte del trabajo de la Secretaría era invisible incluso para la propia organización. Procesos críticos dependían de la memoria institucional de personas específicas, sin documentación ni respaldo.',
    'project.bid.finding-2-title': 'El costo humano de los sistemas fragmentados',
    'project.bid.finding-2-text': 'Las 50+ herramientas no solo generaban ineficiencia técnica: generaban agotamiento emocional. Las personas invertían más tiempo gestionando sistemas que haciendo su trabajo real.',
    'project.bid.finding-3-title': 'Desconfianza sistémica',
    'project.bid.finding-3-text': 'La falta de trazabilidad y visibilidad había generado culturas de desconfianza. Ejemplo: mantener tres versiones de la misma tabla porque "alguien siempre borra algo sin avisar".',
    'project.bid.finding-4-title': 'Cada área había inventado su propio sistema',
    'project.bid.finding-4-text': 'Ante la falta de procesos claros, cada equipo había desarrollado soluciones propias (Excel, emails, grupos de WhatsApp, carpetas compartidas sin estructura). Esto multiplicaba la complejidad.',
    'project.bid.finding-5-title': 'Alta sensibilidad cultural y política',
    'project.bid.finding-5-text': 'Trabajar con representantes de 7-10 países requería navegar diferencias culturales, protocolos formales y dinámicas de poder con mucha sensibilidad y respeto.',
    
    // Results
    'project.bid.result-1-value': 'Entrevistas procesadas y sintetizadas',
    'project.bid.result-2-value': 'Sistemas diagnosticados',
    'project.bid.result-3-value': 'Países representados',
    'project.bid.result-4-value': 'Remoto e internacional',
    
    'project.bid.impact-1': '80 entrevistas procesadas y sintetizadas en hallazgos accionables',
    'project.bid.impact-2': 'Análisis completo de 50+ sistemas utilizados activamente por la Secretaría',
    'project.bid.impact-3': 'Rediseño de flujos para solicitud y seguimiento de tareas con trazabilidad clara',
    'project.bid.impact-4': 'Plantillas y cuestionarios implementables para clasificar y gestionar requerimientos',
    'project.bid.impact-5': 'Propuestas escalables para mejorar coordinación sin sobrecargar al equipo',
    'project.bid.impact-6': 'Documento estratégico entregado y usado para la siguiente fase de implementación',
    'project.bid.impact-7': 'El informe fue presentado en asamblea y utilizado para reestructurar toda la Secretaría del BID en 2021',
    
    // Learnings
    'project.bid.learning-1-title': 'Liderar en contextos complejos requiere empatía estructural',
    'project.bid.learning-1-text': 'Como Lead Service Designer, aprendí que liderar un equipo de 6 personas en un proyecto de esta complejidad no se trata solo de distribuir tareas, sino de sostener la visión estratégica mientras cuidas el bienestar emocional del equipo.',
    'project.bid.learning-2-title': 'La investigación es un acto político',
    'project.bid.learning-2-text': 'Entrevistar a personas en posiciones de poder requiere un balance delicado entre respeto protocolar y profundidad investigativa. Aprendí a navegar estas dinámicas sin comprometer la calidad de los hallazgos.',
    'project.bid.learning-3-title': 'La sistematización es tan importante como la investigación',
    'project.bid.learning-3-text': 'Con 80 entrevistas, el reto no era solo recoger información, sino transformarla en insights accionables. Lideré el proceso de análisis asegurando que cada hallazgo estuviera respaldado.',
    
    // Reflections
    'project.bid.reflection-quote': 'La dignidad del trabajo merece un sistema que no desgaste.',
    'project.bid.reflection-1': 'Este fue uno de los proyectos más desafiantes y sensibles en los que he participado. Trabajamos en un equipo multidisciplinario de 7 personas, enfrentando un entorno marcado por el agotamiento y el deseo genuino de hacer las cosas mejor.',
    'project.bid.reflection-2': 'Diseñar en este contexto me enseñó a moverme entre la empatía profunda y la claridad estratégica. Aprendí a sostener la complejidad, a escuchar sin juzgar, y a facilitar conversaciones difíciles pero necesarias.',
    'project.bid.reflection-3': 'A veces, el diseño no empieza con una solución brillante, sino con la humildad de reconocer que la dignidad del trabajo de las personas merece un sistema que no las desgaste. Este proyecto me enseñó que el diseño de servicios es un acto de cuidado institucional.',
    'project.bid.reflection-4': 'Ver cómo nuestro trabajo fue utilizado en asamblea para reestructurar toda la Secretaría en 2021 fue la confirmación de que cuando diseñamos con rigor, empatía y visión sistémica, podemos generar cambios reales.',
    
    // Visual Resources
    'project.bid.visual-journey-desc': 'Mapeo de la experiencia actual de los diferentes usuarios del servicio de Secretaría.',
    'project.bid.visual-journey-1': 'Journey Maps de usuarios internos y externos Reunión Anual',
    'project.bid.visual-journey-2': 'Journey Maps de usuarios internos y externos Documentación y traducción',
    'project.bid.visual-ecosystem-desc': 'Visualización del ecosistema complejo de relaciones, procesos y herramientas de la Secretaría del BID.',
    'project.bid.visual-ecosystem-caption': 'Ecosystem Map mostrando la complejidad sistémica',
    
    // Sidebar
    'sidebar.interested-text-bid': 'Si quieres conocer más sobre mi trabajo en rediseño de servicios complejos y liderazgo de equipos, hablemos.',
    
    // ============================================
    // 📝 DESCRIPCIONES CORTAS DE OTROS PROYECTOS
    // (Para cards en index.html y todos-proyectos.html)
    // ============================================
    'project.lumi.desc': 'Plataforma web conceptualizada durante curso especializado de IA, contiene landing, dashboard y login. (WIP)',
    'project.weather.desc': 'App del clima con comentarios de personalidades. Integración con API y diseño creativo.',
    'project.weather.metric1': 'Personalidades',
    'project.pomodoro.desc': 'Timer de productividad con gestión de estados, notificaciones y persistencia de datos.',
    'project.teleconsulta.desc': 'Diseño de una plataforma de videollamadas médicas desde cero, integrada con el sistema de agenda web. Automatización de cobros, entrega de recetas y gestión de documentos clínicos.',
    'project.teleconsulta.metric2': 'Reclamos',
    'project.teleconsulta.metric3': 'Telerehabilitación',
    'project.agenda.desc': 'Rediseño de la agenda web para Clínica Alemana durante la pandemia. Alineación con la plataforma de teleconsulta y despliegue incremental en fases.',
    'project.agenda.metric1': 'Duración',
    'project.agenda.metric2': 'Estado',
    'project.agenda.metric3': 'Adopción',
    'project.spotify.title': 'Experiencia Premium',
    'project.spotify.desc': 'Análisis sobre por qué los usuarios en Perú se suscriben al servicio premium sin usar el freemium. Research cualitativo que cambió la estrategia de localización.',
    'project.spotify.metric1': 'Usuarios',
    'project.spotify.metric2': 'Países',
    'project.spotify.metric3': 'Modalidad',
    'project.cubico.desc': 'Programa educativo colaborativo que empoderó a jóvenes en Sevilla para diseñar soluciones sostenibles en su comunidad.',
    'project.cubico.metric1': 'Docentes',
    'project.cubico.metric2': 'Estudiantes',
    'project.cubico.metric3': 'Proyectos',
    'project.upc.title': 'Rediseño de Admisión',
    'project.upc.desc': 'Rediseño de la experiencia en counters de admisión para mejorar la conversión de visitas de postulantes y padres.',
    'project.upc.metric1': 'Sedes',
    'project.upc.metric3': 'Estado',
    'project.mincetur.title': 'Construcción Futura',
    'project.mincetur.desc': 'Acompañamiento en el desarrollo de un prototipo de Modelo de Gestión para los CITEs de Artesanía y Turismo.',
    'project.mincetur.metric1': 'Días',
    'project.tali.title': 'Agencia de Viajes Corporativa',
    'project.tali.desc': 'Portal para gestión de viajes corporativos desde cualquier dispositivo. Proyecto completo de research, diseño y branding.',
    'project.tali.metric1': 'Roles',
    'project.tali.metric3': 'Estado',
  },
  
  en: {
    // ============================================
    // 🌐 GLOBAL NAVIGATION
    // ============================================
    'nav.inicio': 'Home',
    'nav.sobre-mi': 'About',
    'nav.proyectos': 'Projects',
    'nav.frontend': 'Frontend',
    'nav.contacto': 'Contact',
    'nav.previous': 'Previous',
    'nav.next': 'Next',
    'nav.view-all': 'View all',
    'nav.back-to-top': 'Back to top',
    
    // ============================================
    // 🏷️ COMMON BADGES & STATUS
    // ============================================
    'badge.live': 'Live',
    'badge.case-study': 'Case Study',
    'badge.implemented': 'Implemented',
    'badge.partial': 'Partial Implementation',
    'badge.not-implemented': 'Not Implemented',
    'badge.research': 'Research Project',
    'badge.internal-services': 'Internal Services',
    
    // ============================================
    // 🔗 COMMON LINKS & BUTTONS
    // ============================================
    'project.link-code': 'Code',
    'project.link-demo': 'Demo',
    'project.link-live': 'View site',
    'project.back-home': 'Back to home',
    'project.back-projects': 'Back to projects',
    
    // ============================================
    // 🧩 COMMON PROJECT COMPONENTS
    // (Elements repeated in ALL detail pages)
    // ============================================
    'project-detail.view-case': 'View full case',
    'project-detail.overview': 'Overview',
    'project-detail.challenge': 'The challenge',
    'project-detail.solution': 'The solution',
    'project-detail.process': 'Process',
    'project-detail.results': 'Results',
    'project-detail.learnings': 'Key learnings',
    'project-detail.my-role': 'My role',
    'project-detail.role': 'Role',
    'project-detail.team': 'Team',
    'project-detail.team-composition': 'Team composition:',
    'project-detail.responsibilities': 'My responsibilities included:',
    'project-detail.duration': 'Duration',
    'project-detail.year': 'Year',
    'project-detail.location': 'Location',
    'project-detail.scope': 'Scope',
    'project-detail.impact': 'Impact',
    'project-detail.tech-stack': 'Tech Stack',
    'project-detail.tools': 'Tools',
    'project-detail.specific-impacts': 'Specific impacts:',
    'project-detail.reflections': 'Reflections',
    'project-detail.visual-resources': 'Visual Resources',
    
    // ============================================
    // 📊 COMMON SIDEBAR
    // ============================================
    'sidebar.project-info': 'Project Info',
    'sidebar.company': 'Company',
    'sidebar.client': 'Client',
    'sidebar.project-team': 'Project Team',
    'sidebar.me': 'me',
    'sidebar.under-my-lead': 'under my leadership',
    'sidebar.project-scope': 'Project Scope',
    'sidebar.total': 'total',
    'sidebar.conducted-by-me': 'Conducted by me',
    'sidebar.systems-analyzed': 'Systems analyzed',
    'sidebar.skills-applied': 'Skills Applied',
    'sidebar.interested-title': 'Interested in this project?',
    
    // ============================================
    // ⏰ TIME & LOCATION
    // ============================================
    'time.months': 'months',
    'time.years': 'years',
    'time.days': 'days',
    'location.countries': 'countries',
    
    // ============================================
    // 📈 COMMON METRICS
    // ============================================
    'metrics.interviews': 'interviews',
    'metrics.systems': 'systems',
    'metrics.users': 'users',
    'metrics.projects': 'projects',
    'metrics.teachers': 'teachers',
    'metrics.students': 'students',
    
    // ============================================
    // 🎓 COMMON SKILLS
    // ============================================
    'skills.team-leadership': 'Team Leadership',
    'skills.in-depth-interviews': 'In-depth Interviews',
    'skills.systemic-analysis': 'Systemic Analysis',
    'skills.facilitation': 'Facilitation',
    'skills.process-design': 'Process Design',
    'skills.qualitative-research': 'Qualitative Research',
    'skills.bilingual': 'Bilingual (ES/EN)',
    
    // ============================================
    // 🏠 INDEX.HTML - HERO
    // ============================================
    'hero.badge': 'Available for Frontend projects • Remote/On-site',
    'hero.title': 'Frontend Developer',
    'hero.title-2': 'with design vision',
    'hero.subtitle': 'I create functional interfaces and user-centered digital experiences. I combine clean code with a deep understanding of UX to build products that truly work.',
    'hero.exp-1-value': '4+ years',
    'hero.exp-1-label': 'UX/Service Design',
    'hero.exp-2-value': '1 year',
    'hero.exp-2-label': 'Frontend Development',
    'hero.exp-3-value': 'Junior-Mid',
    'hero.exp-3-label': 'Developer Level',
    'hero.btn-projects': 'View projects',
    'hero.btn-cv': 'Download CV',
    
    // ============================================
    // 🏠 INDEX.HTML - ABOUT
    // ============================================
    'about.badge': 'About me',
    'about.title': 'A unique perspective',
    'about.description': 'My transition from strategic design to frontend development has given me a unique advantage: I understand both users and the technology that brings their experiences to life.',
    'about.subtitle': 'My approach',
    'about.text-1': 'Before writing a line of code, I ask myself: does this really solve the user\'s problem? My background in UX Research and Service Design allows me to see beyond the interface and create solutions that make sense both technically and humanly.',
    'about.text-2': 'I currently focus on frontend projects where I can apply this complete vision: from understanding what the user needs to implementing it with clean, maintainable, and scalable code.',
    
    // Timeline
    'timeline.1.title': 'Frontend Developer',
    'timeline.1.period': '2025 - Present',
    'timeline.1.text': 'Focus on JavaScript, React, and interface development. Projects with AI and API integration.',
    'timeline.2.title': 'UX/UI Designer & Service Designer',
    'timeline.2.period': '2020 - 2025',
    'timeline.2.text': 'Clínica Alemana, IDB, Spotify. Research, prototyping, and experience design for digital products and services.',
    'timeline.3.title': 'Service Design',
    'timeline.3.period': '2019 - 2020',
    'timeline.3.text': 'Strategic design and consulting projects for public and private institutions in Peru.',
    
    // Highlight Cards
    'highlight.1.title': 'Clean Code',
    'highlight.1.text': 'Semantic, well-documented code designed to scale. Every function has a clear purpose.',
    'highlight.2.title': 'User-Centered',
    'highlight.2.text': 'Every technical decision is guided by user experience. Accessibility and usability are not optional.',
    'highlight.3.title': 'Continuous Learning',
    'highlight.3.text': 'Web development evolves fast. I stay updated with new technologies and best practices.',
    'highlight.4.title': 'Team Player',
    'highlight.4.text': 'Experience collaborating with multidisciplinary teams: developers, designers, product managers.',
    
    // ============================================
    // 🏠 INDEX.HTML - PROJECTS
    // ============================================
    'projects.badge': 'Portfolio',
    'projects.title': 'Featured projects',
    'projects.description': 'A selection of projects that demonstrate my technical and design skills, and my ability to solve real problems.',
    'projects.btn-all': 'View all projects',
    'projects.btn-all-text': 'Explore my complete portfolio',
    'projects.btn-case': 'View full case',
    'projects.btn-full': 'View full project',
    
    // ============================================
    // 🏠 INDEX.HTML - SKILLS
    // ============================================
    'skills.badge': 'Tech Stack',
    'skills.title': 'Skills & Technologies',
    'skills.description': 'My current tech stack and tools. Continuously learning and updating.',
    'skills.frontend': 'Frontend Development',
    'skills.tools': 'Tools & Workflow',
    'skills.design': 'Design & UX',
    'skills.legend-advanced': 'Advanced',
    'skills.legend-intermediate': 'Intermediate',
    'skills.legend-learning': 'Learning',
    
    // ============================================
    // 🏠 INDEX.HTML - CONTACT
    // ============================================
    'contact.badge': 'Contact',
    'contact.title': 'Let\'s work together?',
    'contact.description': 'Available for design positions, frontend (junior-mid level), freelance projects or collaborations.',
    'contact.why-title': 'Why work with me?',
    'contact.why-text': 'I don\'t just write code, I understand users. My UX background allows me to create technical solutions that truly solve problems.',
    'contact.cta-title': 'Looking for opportunities',
    'contact.cta-text': 'Currently looking for frontend positions (junior-mid), freelance or full-time design. Open to remote or on-site in Madrid.',
    'contact.btn-email': 'Send message',
    'contact.btn-cv': 'Download CV',
    'contact.linkedin-text': 'Let\'s connect professionally',
    'contact.github-text': 'Check my code',
    
    // ============================================
    // 🦶 FOOTER
    // ============================================
    'footer.text': 'Made with code and lots of coffee ☕',
    
    // ============================================
    // 📂 TODOS-PROYECTOS.HTML
    // ============================================
    'all-projects.back': 'Back to home',
    'all-projects.title': 'All Projects',
    'all-projects.description': 'A complete collection of my work in frontend development, UX/UI design and service design. Each project represents learning, challenges overcome and creative solutions.',
    'all-projects.filter-all': 'All',
    'all-projects.filter-frontend': 'Frontend',
    'all-projects.filter-ux': 'UX/UI',
    'all-projects.filter-service': 'Service Design',
    'all-projects.cat-frontend': 'Frontend Development',
    'all-projects.cat-ux': 'UX/UI Design',
    'all-projects.cat-service': 'Service Design',
    
    // ============================================
    // 📊 PROJECT: IDB - SECRETARIAT
    // ============================================
    
    // Hero
    'project.bid.hero-title': 'IDB – Secretariat Services Redesign',
    'project.bid.hero-subtitle': 'Strategic redesign of internal services at the IDB Secretariat. 80 interviews across 7-10 countries, diagnosis of 50+ systems, and redesign of invisible processes to improve coordination and reduce operational overload.',
    
    // Context
    'project.bid.context-title': 'Context',
    'project.bid.context-text': 'This project was developed with the Inter-American Development Bank (IDB) Secretariat, an area with a highly complex and fragmented structure. Each department operated as an independent silo—often each person too—generating overload, task duplication, and low organizational visibility. The Secretariat is a critical IDB area serving multiple internal and external stakeholders: The "Chairs" (Board) representing member countries, The IDB President, Bank employees from multiple departments, and the Translation area. Our mission was to understand this dense ecosystem of relationships, processes, tools, and tensions to redesign internal services. The project was developed 100% remotely, connecting with people in 7-10 different countries.',
    
    // Challenge
    'project.bid.challenge-text': 'How to redesign services for a unit using over 50 systems (including legacy tools, patch solutions, and informal tools), where processes are atomized and each team has had to "invent" their own way of operating?',
    'project.bid.challenge-intro': 'The Secretariat faced multiple critical barriers:',
    'project.bid.challenge-1': 'Total work management fragmentation: Each department operated as an independent island',
    'project.bid.challenge-2': 'Informal processes: Born out of necessity, without documentation or traceability',
    'project.bid.challenge-3': 'Disconnected tools: 50+ systems with no integration',
    'project.bid.challenge-4': 'Operational and emotional saturation: Staff exhausted by constant rework',
    'project.bid.challenge-5': 'Lack of organizational visibility: No one had a complete view of the workflow',
    'project.bid.challenge-conclusion': 'Our challenge was to build a common vision that would allow evolution without generating more chaos.',
    
    // Role
    'project.bid.role-text': 'As Lead Service Designer at Continuum, I led the research strategy, design process, and coordination of the multidisciplinary team throughout the 6-month project.',
    'project.bid.team-1': 'Me (Lead Service Designer)',
    'project.bid.team-2': '2 Service Designers under my leadership',
    
    // Responsibilities
    'project.bid.resp-1': 'Design the complete qualitative research approach',
    'project.bid.resp-2': 'Conduct over 40 in-depth interviews (in English and Spanish)',
    'project.bid.resp-3': 'Lead the systematization and analysis of all 80 interviews',
    'project.bid.resp-4': 'Coordinate and guide the work of the 2 Service Designers on the team',
    'project.bid.resp-5': 'Define strategic opportunities and lead the redesign of key processes',
    'project.bid.resp-6': 'Design questionnaire system and templates to organize requests',
    'project.bid.resp-7': 'Plan and supervise all project deliverables',
    'project.bid.resp-8': 'Generate trust environments in sensitive and formal contexts',
    
    // Process
    'project.bid.process-intro': 'We implemented a deep research and design process, focused on understanding systemic complexity before proposing solutions.',
    'project.bid.process-1-title': '1. Deep Qualitative Research',
    'project.bid.process-1-intro': 'Total immersion in the Secretariat ecosystem:',
    'project.bid.process-1-item-1': '80 interviews with people from different regions, hierarchical levels, and units',
    'project.bid.process-1-item-2': 'I personally conducted over 40 interviews in English and Spanish',
    'project.bid.process-1-item-3': 'We interviewed bank employees, Chairs (Board) representatives from 7-10 countries, and Secretariat team',
    'project.bid.process-1-item-4': 'Building trust environments in sensitive and formal contexts',
    'project.bid.process-1-item-5': 'Analysis of structural, emotional, and relational tensions',
    'project.bid.process-1-item-6': 'Exploration of over 50 actively used systems and tools',
    
    'project.bid.process-2-title': '2. Diagnosis of Disconnection and Pain Points',
    'project.bid.process-2-intro': 'Deep systematization of findings:',
    'project.bid.process-2-item-1': 'Mapping of broken flows, duplications, blockages, and informal systems',
    'project.bid.process-2-item-2': 'Identification of critical tasks without traceability or clarity of responsibilities',
    'project.bid.process-2-item-3': 'Documentation of extreme cases: a worker maintaining three Excel tables with the same information due to distrust generated by uncontrolled edits',
    'project.bid.process-2-item-4': 'Analysis of the ecosystem of 50+ tools without integration',
    
    'project.bid.process-3-title': '3. Design of Internal Organization Solutions',
    'project.bid.process-3-intro': 'Co-creation of systems that reduce chaos without adding burden:',
    'project.bid.process-3-item-1': 'Creation of internal user archetypes',
    'project.bid.process-3-item-2': 'Redesign of how tasks are received, organized, and executed in the Secretariat',
    'project.bid.process-3-item-3': 'Design of an entry system with automatic questionnaires to clarify requirements',
    'project.bid.process-3-item-4': 'Proposals for shared tools that reduce rework and increase visibility',
    'project.bid.process-3-item-5': 'Standardized templates for service requests',
    'project.bid.process-3-item-6': 'Redesigned flows with clear traceability of responsible parties and statuses',
    
    'project.bid.process-4-title': '4. Delivery and Implementation',
    'project.bid.process-4-intro': 'Strategic documentation for action:',
    'project.bid.process-4-item-1': 'Complete strategic document with findings and recommendations',
    'project.bid.process-4-item-2': 'Implementable questionnaires ready for immediate use',
    'project.bid.process-4-item-3': 'Redesigned request templates',
    'project.bid.process-4-item-4': 'Scalable implementation roadmap',
    'project.bid.process-4-item-5': 'The report was presented in assembly and used to restructure the entire Secretariat in 2021',
    
    // Findings
    'project.bid.findings-title': 'Key Findings',
    'project.bid.finding-1-title': 'The invisible complexity of "invisible" work',
    'project.bid.finding-1-text': 'We discovered that much of the Secretariat\'s work was invisible even to the organization itself. Critical processes depended on the institutional memory of specific people, with no documentation or backup.',
    'project.bid.finding-2-title': 'The human cost of fragmented systems',
    'project.bid.finding-2-text': 'The 50+ tools not only generated technical inefficiency: they generated emotional exhaustion. People spent more time managing systems than doing their actual work.',
    'project.bid.finding-3-title': 'Systemic distrust',
    'project.bid.finding-3-text': 'The lack of traceability and visibility had generated cultures of distrust. Example: maintaining three versions of the same table because "someone always deletes something without warning".',
    'project.bid.finding-4-title': 'Each area had invented its own system',
    'project.bid.finding-4-text': 'In the absence of clear processes, each team had developed their own solutions (Excel, emails, WhatsApp groups, unstructured shared folders). This multiplied complexity.',
    'project.bid.finding-5-title': 'High cultural and political sensitivity',
    'project.bid.finding-5-text': 'Working with representatives from 7-10 countries required navigating cultural differences, formal protocols, and power dynamics with great sensitivity and respect.',
    
    // Results
    'project.bid.result-1-value': 'Interviews processed and synthesized',
    'project.bid.result-2-value': 'Systems diagnosed',
    'project.bid.result-3-value': 'Countries represented',
    'project.bid.result-4-value': 'Remote and international',
    
    'project.bid.impact-1': '80 interviews processed and synthesized into actionable insights',
    'project.bid.impact-2': 'Complete analysis of 50+ systems actively used by the Secretariat',
    'project.bid.impact-3': 'Redesigned flows for task request and tracking with clear traceability',
    'project.bid.impact-4': 'Implementable templates and questionnaires to classify and manage requirements',
    'project.bid.impact-5': 'Scalable proposals to improve coordination without overloading the team',
    'project.bid.impact-6': 'Strategic document delivered and used for the next implementation phase',
    'project.bid.impact-7': 'The report was presented in assembly and used to restructure the entire IDB Secretariat in 2021',
    
    // Learnings
    'project.bid.learning-1-title': 'Leading in complex contexts requires structural empathy',
    'project.bid.learning-1-text': 'As Lead Service Designer, I learned that leading a team of 6 people in a project of this complexity is not just about distributing tasks, but about sustaining strategic vision while caring for the team\'s emotional well-being.',
    'project.bid.learning-2-title': 'Research is a political act',
    'project.bid.learning-2-text': 'Interviewing people in positions of power requires a delicate balance between protocol respect and investigative depth. I learned to navigate these dynamics without compromising the quality of findings.',
    'project.bid.learning-3-title': 'Systematization is as important as research',
    'project.bid.learning-3-text': 'With 80 interviews, the challenge was not just collecting information, but transforming it into actionable insights. I led the analysis process ensuring each finding was supported.',
    
    // Reflections
    'project.bid.reflection-quote': 'The dignity of work deserves a system that doesn\'t wear people down.',
    'project.bid.reflection-1': 'This was one of the most challenging and sensitive projects I\'ve participated in. We worked in a multidisciplinary team of 7 people, facing an environment marked by exhaustion and a genuine desire to do things better.',
    'project.bid.reflection-2': 'Designing in this context taught me to move between deep empathy and strategic clarity. I learned to hold complexity, listen without judgment, and facilitate difficult but necessary conversations.',
    'project.bid.reflection-3': 'Sometimes, design doesn\'t start with a brilliant solution, but with the humility to recognize that people\'s work dignity deserves a system that doesn\'t wear them down. This project taught me that service design is an act of institutional care.',
    'project.bid.reflection-4': 'Seeing how our work was used in assembly to restructure the entire Secretariat in 2021 was confirmation that when we design with rigor, empathy, and systemic vision, we can generate real changes.',
    
    // Visual Resources
    'project.bid.visual-journey-desc': 'Mapping of the current experience of different users of the Secretariat service.',
    'project.bid.visual-journey-1': 'Journey Maps of internal and external users Annual Meeting',
    'project.bid.visual-journey-2': 'Journey Maps of internal and external users Documentation and translation',
    'project.bid.visual-ecosystem-desc': 'Visualization of the complex ecosystem of relationships, processes, and tools of the IDB Secretariat.',
    'project.bid.visual-ecosystem-caption': 'Ecosystem Map showing systemic complexity',
    
    // Sidebar
    'sidebar.interested-text-bid': 'If you want to know more about my work in redesigning complex services and team leadership, let\'s talk.',
    
    // ============================================
    // 📝 SHORT DESCRIPTIONS OF OTHER PROJECTS
    // (For cards in index.html and todos-proyectos.html)
    // ============================================
    'project.lumi.desc': 'Web platform conceptualized during specialized AI course, contains landing, dashboard and login. (WIP)',
    'project.weather.desc': 'Weather app with personality comments. API integration and creative design.',
    'project.weather.metric1': 'Personalities',
    'project.pomodoro.desc': 'Productivity timer with state management, notifications and data persistence.',
    'project.teleconsulta.desc': 'Design of a medical video call platform from scratch, integrated with the web appointment system. Automation of payments, prescription delivery and clinical document management.',
    'project.teleconsulta.metric2': 'Complaints',
    'project.teleconsulta.metric3': 'Telerehabilitation',
    'project.agenda.desc': 'Redesign of the web appointment system for Clínica Alemana during the pandemic. Alignment with the teleconsultation platform and incremental phased deployment.',
    'project.agenda.metric1': 'Duration',
    'project.agenda.metric2': 'Status',
    'project.agenda.metric3': 'Adoption',
    'project.spotify.title': 'Premium Experience',
    'project.spotify.desc': 'Analysis of why users in Peru subscribe to premium service without using freemium. Qualitative research that changed the localization strategy.',
    'project.spotify.metric1': 'Users',
    'project.spotify.metric2': 'Countries',
    'project.spotify.metric3': 'Modality',
    'project.cubico.desc': 'Collaborative educational program that empowered young people in Seville to design sustainable solutions in their community.',
    'project.cubico.metric1': 'Teachers',
    'project.cubico.metric2': 'Students',
    'project.cubico.metric3': 'Projects',
    'project.upc.title': 'Admissions Redesign',
    'project.upc.desc': 'Redesign of the admissions counter experience to improve conversion of prospective student and parent visits.',
    'project.upc.metric1': 'Campuses',
    'project.upc.metric3': 'Status',
    'project.mincetur.title': 'Future Construction',
    'project.mincetur.desc': 'Support in developing a Management Model prototype for Crafts and Tourism CITEs.',
    'project.mincetur.metric1': 'Days',
    'project.tali.title': 'Corporate Travel Agency',
    'project.tali.desc': 'Portal for managing corporate travel from any device. Complete research, design and branding project.',
    'project.tali.metric1': 'Roles',
    'project.tali.metric3': 'Status',
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = translations;
}