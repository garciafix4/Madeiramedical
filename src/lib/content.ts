// ============================================================
// MADEIRA MEDICAL GROUP — EDITABLE CONTENT
// Edit this file to update any text on the site.
// ============================================================

export const SITE = {
  name: "Madeira Medical Group",
  tagline: "Puerto Vallarta",
  phone: "+52 322 293-6235",
  email: "anamaria@homia.mx",
  address: "Havre #239-101, Col. Díaz Ordaz, Puerto Vallarta, Jalisco",
  whatsapp: "523222936235",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.4!2d-105.2286648!3d20.6370772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8421454e08759ccd%3A0x8ebaa9f70f42f09c!2sMadeira%20Medical%20Group%20-%20Consultorios%20m%C3%A9dicos!5e0!3m2!1ses!2smx!4v1714950000000!5m2!1ses!2smx",
};

export const NAV = {
  links: [
    { label: "Inicio", href: "#inicio" },
    { label: "Agendar Consulta", href: "#agenda" },
    { label: "Rentar Consultorio", href: "#renta" },
    { label: "Especialidades", href: "#especialidades" },
    { label: "Médicos", href: "#medicos" },
    { label: "Contacto", href: "#contacto" },
  ],
  ctaLabel: "Rentar Consultorio",
  ctaHref: "#renta",
};

export const HERO = {
  badge: "Último consultorio disponible",
  headline: "Madeira Medical Group",
  subheadline: "Puerto Vallarta",
  body: "Consultorios modernos en la zona con la más alta densidad médica de Puerto Vallarta. Secretaria e infraestructura incluidas desde el primer día.",
  cta1: { label: "Contáctanos", href: "#contacto" },
  cta2: { label: "Agendar Cita", href: "#agenda" },
};

export const AGENDA = {
  headline: "Agenda una consulta",
  body: "¿Eres médico y buscas un espacio profesional para atender a tus pacientes? Contáctanos y te asesoramos sin costo.",
  cta: { label: "Agendar ahora →", href: `https://wa.me/523222936235?text=Hola,%20quiero%20agendar%20una%20consulta%20para%20rentar%20consultorio.` },
};

export const LOCATION = {
  badge: "Ubicación privilegiada",
  headline: "En el corazón de Versalles, Puerto Vallarta",
  body: "Nuestros consultorios están ubicados en la zona con mayor densidad de Puerto Vallarta. Versalles es un ícono amado por turistas y residentes extranjeros, con planeación urbana organizada y acceso privilegiado para tus pacientes.",
  stats: [
    { value: "55+", label: "Familias en el complejo Punto Madeira" },
    { value: "#1", label: "Zona de turismo médico en PV" },
    { value: "100%", label: "Infraestructura incluida" },
  ],
};

export const RENTAL = {
  badge: "Renta tu consultorio hoy",
  headline: "Elige la mejor opción para tu práctica médica",
  body: "Madeira Medical Group cuenta con las mejores instalaciones para que brindes atención de calidad a tus pacientes desde el primer día. Todo incluido, sin complicaciones.",
  features: [
    {
      icon: "🏥",
      title: "Consultorios modernos",
      description: "Espacios equipados con mobiliario médico de alta calidad y acabados premium.",
    },
    {
      icon: "👩‍💼",
      title: "Secretaria incluida",
      description: "Gestión de citas y atención al paciente desde que llegas.",
    },
    {
      icon: "📅",
      title: "Gestión de consultas",
      description: "Sistema de agenda profesional y recordatorios automáticos para tus pacientes.",
    },
    {
      icon: "📶",
      title: "Internet de alta velocidad",
      description: "Conectividad empresarial incluida para expedientes digitales y telemedicina.",
    },
    {
      icon: "🅿️",
      title: "Estacionamiento",
      description: "Acceso para médicos y pacientes dentro del complejo Punto Madeira.",
    },
    {
      icon: "💰",
      title: "Retorno de inversión inmediato",
      description: "Saca el máximo provecho desde el primer mes con una ubicación de alto tráfico.",
    },
  ],
  cta1: { label: "Descargar precios", href: "#contacto" },
  cta2: { label: "Rentar ahora", href: `https://wa.me/523222936235?text=Quiero%20rentar%20un%20consultorio%20en%20Madeira%20Medical%20Group.` },
};

export const DOCTORS = {
  badge: "Médicos Especialistas",
  headline: "Nuestro equipo de especialistas",
  body: "Contamos con los mejores especialistas en diversas áreas médicas para ofrecer atención integral a todos nuestros pacientes.",
  specialties: [
    "Cirugía Oral y Maxilofacial",
    "Ortodoncia e Invisalign",
    "Ortopedia Maxilofacial",
    "Psicología Clínica",
    "Armonización Facial",
    "Rehabilitación Dental",
    "Cirugía Plástica",
    "Endocrinología",
    "Laboratorio Clínico",
    "Ginecología y Obstetricia",
    "Pediatría",
    "Medicina Regenerativa",
    "Implantología",
    "Nutrición",
    "Medicina Interna",
    "Cardiología",
    "Dermatología",
    "Urología",
    "Medicina Alternativa",
    "Alergología e Inmunología",
  ],
};

export const DOCTORS_LIST = [
  {
    slug: "dra_mar_palacios",
    name: "Dra. Mar Palacios",
    specialty: "Ortodoncia · Invisalign · Ortopedia Maxilofacial",
    phone: "322 293 6235",
    photo: "/doctors/dra_mar_palacios.jpg",
    services: [
      "Ortodoncia",
      "Invisalign",
      "Ortopedia maxilofacial",
      "Limpieza dental adultos e infantil",
      "Blanqueamiento",
      "Protocolo ICON de desmanchado dental",
      "Guarda oclusal nocturno",
      "Odontología general",
    ],
  },
  {
    slug: "dra_karla_marcela_figueroa_aguilar",
    name: "Dra. Karla Marcela Figueroa Aguilar",
    specialty: "Odontología Restauradora Avanzada e Implantes",
    phone: "322-159-0014",
    photo: "/doctors/dra_karla_marcela_figueroa_aguilar.jpg",
    services: [
      "Diseño de sonrisa",
      "Implantes dentales",
      "Limpiezas dentales y blanqueamientos",
      "Remoción segura de amalgamas",
      "Rehabilitación de bruxismo",
      "Protocolo ICON de desmanchado dental",
      "Odontología integral",
    ],
  },
  {
    slug: "dra_sarai_bethzabee_rivera_ramos",
    name: "Dra. Saraí Bethzabee Rivera Ramos",
    specialty: "Odontología Integral · Rehabilitación Oral",
    phone: "322 118 1141",
    photo: "/doctors/dra_sarai_bethzabee_rivera_ramos.jpg",
    services: [
      "Ortodoncia",
      "Endodoncia",
      "Exodoncia",
      "Odontopediatría",
      "Cirugía de terceros molares",
      "Rehabilitación oral",
      "Prostodoncia",
    ],
  },
  {
    slug: "dra_angela_goretti_robles_ibarra",
    name: "Dra. Ángela Goretti Robles Ibarra",
    specialty: "Odontología · Armonización Facial",
    phone: "322-142-6017",
    photo: "/doctors/dra_angela_goretti_robles_ibarra.jpg",
    services: [
      "Limpieza dental",
      "Blanqueamiento",
      "Diseño de sonrisa con resina",
      "Rellenos con ácido hialurónico",
      "Aplicación de bótox",
      "Bioestimulación de colágeno y elastina",
      "Bichectomía",
      "Hilos tensores en rostro",
      "Carillas dentales",
    ],
  },
  {
    slug: "dr_jose_emanuel_martinez_rojo",
    name: "Dr. José Emanuel Martínez Rojo",
    specialty: "Cirujano Maxilofacial",
    phone: "331 834 3785",
    photo: "/doctors/dr_jose_emanuel_martinez_rojo.jpg",
    services: [
      "Patología oral y maxilofacial",
      "Anomalías dentofaciales",
      "Cirugía ortognática",
      "Traumatismos faciales",
      "Articulación temporomandibular",
      "Mentoplastia ósea",
      "Reconstrucción maxilofacial",
      "Implantología avanzada",
    ],
  },
  {
    slug: "dra_daniela_anahi_ciambelli_romero",
    name: "Dra. Daniela Anahí Ciambelli Romero",
    specialty: "Cirugía Plástica, Estética y Reconstructiva",
    phone: "322-200-2022",
    photo: "/doctors/dra_daniela_anahi_ciambelli_romero.jpg",
    services: [
      "Cirugía plástica estética y reconstructiva",
      "Toxina botulínica y rellenos",
      "Otoplastía, blefaroplastia, bichectomía",
      "Liposucción de cuello",
      "Microneedle facial y corporal",
      "Cirugía facial",
    ],
  },
  {
    slug: "dr_marco_antonio_rodriguez_perez",
    name: "Dr. Marco Antonio Rodríguez Pérez",
    specialty: "Medicina Estética y Antienvejecimiento",
    phone: "322 288 7637",
    photo: "/doctors/dr_marco_antonio_rodriguez_perez.jpg",
    services: [
      "Toxina botulínica tipo A",
      "Rellenos dérmicos",
      "Peelings",
      "Microneedling",
      "Escleroterapia",
      "Bioestimuladores de colágeno",
      "Rejuvenecimiento no quirúrgico",
    ],
  },
  {
    slug: "dra_esli_perez_castro",
    name: "Dra. Esli Pérez Castro",
    specialty: "Medicina Regenerativa Bioestética",
    phone: "322 216 8611",
    photo: "/doctors/dra_esli_perez_castro.jpg",
    services: [
      "Terapia de reemplazo hormonal bioidéntica",
      "Bioestimuladores de colágeno",
      "Terapia celular",
      "Terapia de biológicos (implante placentario)",
      "Toxina botulínica tipo A",
      "Rellenos faciales",
      "Microneedling",
      "Faciales clínicos",
    ],
  },
  {
    slug: "dr_edgar_martin_hernandez_jimenez",
    name: "Dr. Edgar Martín Hernández Jiménez",
    specialty: "Medicina Estética y Regenerativa",
    phone: "322-120-0894",
    photo: "/doctors/dr_edgar_martin_hernandez_jimenez.jpg",
    services: [
      "Consulta familiar / domicilio",
      "Rutina cuidados de piel",
      "Bioestimuladores",
      "Pérdida de peso",
      "Terapia celular y exosomas",
      "Moldeamiento corporal",
      "P-Shot / disfunción sexual",
    ],
  },
  {
    slug: "dra_lidia_ivonne_moreno_rodriguez",
    name: "Dra. Lidia Ivonne Moreno Rodríguez",
    specialty: "Endocrinología Clínica Adultos",
    phone: "322-108-8804",
    photo: "/doctors/dra_lidia_ivonne_moreno_rodriguez.jpg",
    services: [
      "Tiroides",
      "Sobrepeso y obesidad",
      "Diabetes tipo 1 y 2",
      "Resistencia a la insulina",
      "Ovarios poliquísticos",
      "Infertilidad",
      "Síndrome de Cushing",
    ],
  },
  {
    slug: "dra_fernanda_sanchez",
    name: "Dra. Fernanda Sánchez",
    specialty: "Endocrinología Pediátrica",
    phone: "322 293 6235",
    photo: "/doctors/dra_fernanda_sanchez.jpg",
    services: [
      "Problemas de crecimiento",
      "Diabetes mellitus",
      "Obesidad y sobrepeso",
      "Trastornos de pubertad",
      "Tiroides",
      "Metabolismo de calcio",
      "Ovarios y testículos",
    ],
  },
  {
    slug: "dra_jessica_nitardy",
    name: "Dra. Jessica Nitardy",
    specialty: "Especialista",
    phone: "322 293 6235",
    photo: "/doctors/dra_jessica_nitardy.jpg",
    services: [],
  },
  {
    slug: "dr_mario_alejandro_rendon_acosta",
    name: "Dr. Mario Alejandro Rendón Acosta",
    specialty: "Ginecología y Obstetricia",
    phone: "322 293 6235",
    photo: "/doctors/dr_mario_alejandro_rendon_acosta.jpg",
    services: [
      "Consulta ginecológica general",
      "Control de embarazo",
      "Ultrasonido obstétrico 3D/4D",
      "Infertilidad y tratamientos",
      "Climaterio / menopausia y TRH",
      "Enfermedades de transmisión sexual",
      "Rejuvenecimiento íntimo con láser CO2",
    ],
  },
  {
    slug: "dr_rogelio_rios_esparza",
    name: "Dr. Rogelio Ríos Esparza",
    specialty: "Ginecología",
    phone: "322-378-8686",
    photo: "/doctors/dr_rogelio_rios_esparza.jpg",
    services: [
      "Control de embarazo de bajo y alto riesgo",
      "Ultrasonido 3D y 4D",
      "Control ginecológico",
      "Climaterio y menopausia",
      "Abordaje de infertilidad",
      "Manejo de endometriosis",
      "Cirugía ginecológica de mínima invasión",
    ],
  },
  {
    slug: "dra_devy_michelle_ojeda_castellon",
    name: "Dra. Devy Michelle Ojeda Castellón",
    specialty: "Ginecología",
    phone: "322-194-6628",
    photo: "/doctors/dra_devy_michelle_ojeda_castellon.jpg",
    services: [
      "Control de embarazo de bajo y alto riesgo",
      "Ultrasonido 3D y 4D",
      "Control ginecológico",
      "Climaterio y menopausia",
      "Abordaje de infertilidad",
      "Manejo de endometriosis",
      "Cirugía ginecológica de mínima invasión",
    ],
  },
  {
    slug: "dr_carlos_omar_zuniga_reyes",
    name: "Dr. Carlos Omar Zúñiga Reyes",
    specialty: "Alergia e Inmunología Clínica · Pediatría",
    phone: "322-279-5733",
    photo: "/doctors/dr_carlos_omar_zuniga_reyes.jpg",
    services: [
      "Alergia e inmunología clínica",
      "Pruebas de alergia e inmunoterapia",
      "Vacuna para alergia",
      "Pediatría (recién nacidos a 18 años)",
    ],
  },
  {
    slug: "dra_adriana_turrubiates_flores",
    name: "Dra. Adriana Turrubiates Flores",
    specialty: "Geriatría",
    phone: "322 293 6235",
    photo: "/doctors/dra_adriana_turrubiates_flores.jpg",
    services: [
      "Atención integral del adulto mayor",
      "Test de memoria y demencias",
      "Rehabilitación del adulto mayor",
      "Cuidados paliativos",
      "Manejo del dolor crónico",
      "Trastornos del sueño y alimentación",
      "Electrocardiograma",
    ],
  },
  {
    slug: "dr_diego_alejandro_arce_lopez",
    name: "Dr. Diego Alejandro Arce López",
    specialty: "Medicina Interna",
    phone: "322-293-6235",
    photo: "/doctors/dr_diego_alejandro_arce_lopez.jpg",
    services: [
      "Consulta médica de especialidad",
      "Interpretación de laboratorios",
      "Valoración preoperatoria",
      "Electrocardiograma",
      "Control metabólico completo",
    ],
  },
  {
    slug: "dra_aylin_santana_ortiz",
    name: "Dra. Aylin Santana Ortiz",
    specialty: "Nutriología",
    phone: "322 245 1780",
    photo: "/doctors/dra_aylin_santana_ortiz.jpg",
    services: [
      "Historial clínico y mediciones antropométricas",
      "Análisis de bioimpedancia InBody",
      "Diagnóstico nutricional",
      "Plan de alimentación personalizado",
      "Lista de súper",
      "Acceso a app",
    ],
  },
  {
    slug: "dra_sindy_adriana_castillo_vera",
    name: "Dra. Sindy Adriana Castillo Vera",
    specialty: "Psicología Clínica y Educativa · Perito",
    phone: "322 293 6235",
    photo: "/doctors/dra_sindy_adriana_castillo_vera.jpg",
    services: [
      "Terapia familiar, individual, de pareja e infantil",
      "Psicología jurídica y forense",
      "Atención psiquiátrica",
      "Psicodiagnóstico clínico",
      "Trastornos del neurodesarrollo",
      "Animales de apoyo emocional",
      "Perito en psicología",
    ],
  },
  {
    slug: "dr_fernando_cantu",
    name: "Dr. Fernando Cantú",
    specialty: "Especialista",
    phone: "322 293 6235",
    photo: "/doctors/dr_fernando_cantu.jpg",
    services: [],
  },
  {
    slug: "dr_uriel_daniel_munoz_gonzalez",
    name: "Dr. Uriel Daniel Muñoz González",
    specialty: "Especialista",
    phone: "322 293 6235",
    photo: "/doctors/dr_uriel_daniel_munoz_gonzalez.jpg",
    services: [],
  },
  {
    slug: "dra_roxana_proviquer",
    name: "Dra. Roxana J. Vázquez / Enf. Weena Amieva",
    specialty: "Heridas y Ostomías — Proviquer",
    phone: "322 143 9528",
    photo: "/doctors/proviquer.jpg",
    services: [
      "Atención a personas con heridas y ostomías",
      "Consulta médica general",
    ],
  },
  {
    slug: "bios_lab",
    name: "BIOS LAB",
    specialty: "Laboratorio Clínico",
    phone: "322 293 8173",
    photo: "/doctors/bios_lab.jpg",
    services: [
      "Biometría hemática",
      "Examen general de orina",
      "Perfil cardíaco y hepático",
      "Perfil tiroideo y ovárico",
      "Perfil prenatal y metabólico",
      "Perfil diabético",
      "Perfil de transmisión sexual",
      "Perfil de daño renal temprano",
    ],
  },
];

// ============================================================
// SPECIALTY HUB PAGES — SEO landing pages per specialty
// ============================================================
export const SPECIALTIES_MAP = [
  {
    slug: "ginecologo-puerto-vallarta",
    name: "Ginecología y Obstetricia",
    nameEn: "Gynecology & Obstetrics",
    headline: "Ginecólogo en Puerto Vallarta",
    headlineEn: "Gynecologist in Puerto Vallarta",
    description:
      "En Madeira Medical Group, en el corazón de Versalles, Puerto Vallarta, contamos con ginecólogos y obstetras certificados que ofrecen atención integral a la mujer en todas las etapas de su vida. Desde el control prenatal y ultrasonido 3D/4D hasta el manejo del climaterio, infertilidad y enfermedades ginecológicas, nuestros especialistas combinan tecnología de vanguardia con un trato humano y cálido. Agenda tu consulta hoy y recibe atención personalizada en la zona médica más importante de la Riviera Nayarit.",
    descriptionEn:
      "At Madeira Medical Group in the heart of Versalles, Puerto Vallarta, our board-certified gynecologists and obstetricians provide comprehensive women's health care at every life stage. From prenatal monitoring and 3D/4D ultrasound to menopause management, infertility treatment, and minimally invasive gynecologic surgery, our specialists combine cutting-edge technology with compassionate care. Book your appointment today at Puerto Vallarta's top medical district.",
    keywords: [
      "ginecólogo Puerto Vallarta",
      "obstetra Puerto Vallarta",
      "ginecología Versalles PV",
      "control embarazo Puerto Vallarta",
      "ultrasonido 3D Puerto Vallarta",
      "gynecologist Puerto Vallarta",
      "OB-GYN Puerto Vallarta",
      "Madeira Medical Group ginecología",
    ],
    doctorSlugs: [
      "dr_mario_alejandro_rendon_acosta",
      "dr_rogelio_rios_esparza",
      "dra_devy_michelle_ojeda_castellon",
    ],
    faq: [
      {
        q: "¿Con qué frecuencia debo visitar al ginecólogo?",
        a: "Se recomienda una revisión ginecológica anual a partir de los 21 años o al inicio de la vida sexual. Las mujeres embarazadas tienen controles más frecuentes según el trimestre.",
      },
      {
        q: "¿Realizan ultrasonido 3D y 4D en el consultorio?",
        a: "Sí, nuestros ginecólogos cuentan con equipo de ultrasonido 3D y 4D en consultorio para monitoreo fetal y diagnóstico ginecológico sin necesidad de desplazarte a un hospital.",
      },
      {
        q: "¿Atienden pacientes internacionales o extranjeras?",
        a: "Absolutamente. Madeira Medical Group está ubicado en Versalles, zona con alta afluencia de pacientes nacionales e internacionales. Nuestros médicos hablan español e inglés.",
      },
      {
        q: "¿Qué hacer si tengo una urgencia ginecológica?",
        a: "Contáctanos por WhatsApp al +52 322 293-6235. Nuestro equipo te orientará de inmediato y, de ser necesario, te referirá al hospital adecuado.",
      },
    ],
  },
  {
    slug: "ortodoncista-invisalign-puerto-vallarta",
    name: "Ortodoncia e Invisalign",
    nameEn: "Orthodontics & Invisalign",
    headline: "Ortodoncista e Invisalign en Puerto Vallarta",
    headlineEn: "Orthodontist & Invisalign in Puerto Vallarta",
    description:
      "Madeira Medical Group en Versalles, Puerto Vallarta, alberga especialistas en ortodoncia e Invisalign que transforman sonrisas con tratamientos modernos y personalizados. Ofrecemos ortodoncia fija, alineadores transparentes Invisalign, ortopedia maxilofacial y blanqueamiento dental en un ambiente clínico de primer nivel. Solicita tu evaluación gratuita y descubre cuál tratamiento se adapta a tu estilo de vida.",
    descriptionEn:
      "At Madeira Medical Group in Versalles, Puerto Vallarta, our orthodontic specialists transform smiles with modern, personalized treatments. We offer traditional braces, Invisalign clear aligners, maxillofacial orthopedics, and professional whitening in a first-class clinical setting. Request your free evaluation today and discover the right treatment for your lifestyle.",
    keywords: [
      "ortodoncista Puerto Vallarta",
      "Invisalign Puerto Vallarta",
      "brackets Puerto Vallarta",
      "ortodoncia Versalles",
      "alineadores dentales Puerto Vallarta",
      "orthodontist Puerto Vallarta",
      "Invisalign Mexico",
      "Madeira Medical Group ortodoncia",
    ],
    doctorSlugs: ["dra_mar_palacios"],
    faq: [
      {
        q: "¿Cuánto tiempo dura un tratamiento de Invisalign?",
        a: "La duración varía según la complejidad del caso, pero en promedio oscila entre 6 y 18 meses. Durante la evaluación inicial determinamos el tiempo estimado para tu caso específico.",
      },
      {
        q: "¿Invisalign es más caro que los brackets tradicionales?",
        a: "El costo de Invisalign es comparable al de la ortodoncia fija de alta calidad. Ofrecemos planes de financiamiento y la ventaja estética y de comodidad suele justificar la inversión.",
      },
      {
        q: "¿A partir de qué edad se puede iniciar ortodoncia?",
        a: "En niños, la ortopedia maxilofacial puede comenzar desde los 6-7 años. La ortodoncia fija o Invisalign se recomienda generalmente a partir de los 12 años, cuando la dentición permanente está completa.",
      },
      {
        q: "¿Realizan consulta de ortodoncia para pacientes de turismo médico?",
        a: "Sí, atendemos a pacientes nacionales e internacionales. Podemos iniciar tu evaluación y plan de tratamiento durante tu estancia en Puerto Vallarta y dar seguimiento virtual.",
      },
    ],
  },
  {
    slug: "implantes-dentales-puerto-vallarta",
    name: "Implantes Dentales y Odontología",
    nameEn: "Dental Implants & Dentistry",
    headline: "Implantes Dentales en Puerto Vallarta",
    headlineEn: "Dental Implants in Puerto Vallarta",
    description:
      "Recupera tu sonrisa con implantes dentales de titanio y rehabilitación oral completa en Madeira Medical Group, Versalles, Puerto Vallarta. Nuestros odontólogos especializados en implantología ofrecen diseño de sonrisa, remoción segura de amalgamas, endodoncia, prostodoncia y tratamientos integrales para adultos y niños. Combina tu atención dental de calidad internacional con la experiencia de vivir en el Pacífico mexicano.",
    descriptionEn:
      "Restore your smile with titanium dental implants and comprehensive oral rehabilitation at Madeira Medical Group in Versalles, Puerto Vallarta. Our implantology specialists offer smile design, safe amalgam removal, endodontics, prosthodontics, and full-service dental care for adults and children. Combine world-class dental treatment with the experience of Mexico's Pacific coast.",
    keywords: [
      "implantes dentales Puerto Vallarta",
      "implantología Puerto Vallarta",
      "diseño de sonrisa Puerto Vallarta",
      "odontología Versalles PV",
      "endodoncia Puerto Vallarta",
      "dental implants Puerto Vallarta",
      "smile design Puerto Vallarta Mexico",
      "Madeira Medical Group odontología",
    ],
    doctorSlugs: [
      "dra_karla_marcela_figueroa_aguilar",
      "dra_sarai_bethzabee_rivera_ramos",
      "dr_jose_emanuel_martinez_rojo",
    ],
    faq: [
      {
        q: "¿Cuánto dura un implante dental?",
        a: "Con el cuidado adecuado, los implantes dentales de titanio pueden durar toda la vida. La corona (parte visible) puede necesitar reemplazo después de 10-15 años según el desgaste.",
      },
      {
        q: "¿El procedimiento de implante es doloroso?",
        a: "El procedimiento se realiza bajo anestesia local, por lo que no sentirás dolor durante la cirugía. En los días posteriores puede haber molestia leve que se controla con medicación.",
      },
      {
        q: "¿Puedo obtener implantes dentales durante un viaje a Puerto Vallarta?",
        a: "Sí. Muchos de nuestros pacientes son turistas médicos. La colocación del implante toma una sesión; la oseointegración toma 3-6 meses, pero el seguimiento puede coordinarse con tu dentista local.",
      },
      {
        q: "¿Qué incluye el diseño de sonrisa?",
        a: "El diseño de sonrisa integra blanqueamiento, carillas, implantes o coronas según tu caso. Iniciamos con un análisis fotográfico y simulación digital para que veas el resultado antes de comenzar.",
      },
    ],
  },
  {
    slug: "cirugia-plastica-puerto-vallarta",
    name: "Cirugía Plástica y Estética",
    nameEn: "Plastic & Aesthetic Surgery",
    headline: "Cirujano Plástico en Puerto Vallarta",
    headlineEn: "Plastic Surgeon in Puerto Vallarta",
    description:
      "Transforma tu apariencia con procedimientos de cirugía plástica estética y reconstructiva realizados por especialistas certificados en Madeira Medical Group, Versalles, Puerto Vallarta. Desde blefaroplastia y otoplastia hasta liposucción de cuello, microneedle y rellenos dérmicos, nuestra cirujana combina seguridad clínica con resultados naturales y elegantes. Agenda una valoración confidencial hoy mismo.",
    descriptionEn:
      "Transform your appearance with aesthetic and reconstructive plastic surgery performed by board-certified specialists at Madeira Medical Group in Versalles, Puerto Vallarta. From blepharoplasty and otoplasty to neck liposuction, microneedling, and dermal fillers, our surgeon combines clinical safety with natural, elegant results. Book a confidential consultation today.",
    keywords: [
      "cirujano plástico Puerto Vallarta",
      "cirugía estética Puerto Vallarta",
      "blefaroplastia Puerto Vallarta",
      "liposucción Puerto Vallarta",
      "rellenos dérmicos Puerto Vallarta",
      "plastic surgeon Puerto Vallarta",
      "cosmetic surgery Puerto Vallarta Mexico",
      "Madeira Medical Group cirugía plástica",
    ],
    doctorSlugs: ["dra_daniela_anahi_ciambelli_romero"],
    faq: [
      {
        q: "¿Cuáles son los procedimientos estéticos más solicitados?",
        a: "Los más frecuentes son blefaroplastia (párpados), bichectomía, toxina botulínica, rellenos faciales y liposucción de cuello. Ofrecemos evaluación personalizada para definir el plan ideal.",
      },
      {
        q: "¿Cuánto tiempo de recuperación necesito?",
        a: "Depende del procedimiento. Los tratamientos no quirúrgicos (bótox, rellenos) no requieren recuperación. Cirugías mayores pueden requerir 7-14 días de reposo relativo.",
      },
      {
        q: "¿Los resultados se ven naturales?",
        a: "Nuestra filosofía es la armonía y naturalidad. Usamos técnicas conservadoras para resultados que realzan tus rasgos sin que parezca intervenido.",
      },
      {
        q: "¿Atienden pacientes de turismo médico?",
        a: "Sí. Puerto Vallarta es un destino reconocido de turismo médico. Podemos coordinar tu procedimiento y recuperación durante tu visita a la ciudad.",
      },
    ],
  },
  {
    slug: "medicina-estetica-puerto-vallarta",
    name: "Medicina Estética y Antienvejecimiento",
    nameEn: "Aesthetic Medicine & Anti-Aging",
    headline: "Medicina Estética en Puerto Vallarta",
    headlineEn: "Aesthetic Medicine in Puerto Vallarta",
    description:
      "Rejuvenece de forma segura y natural con los tratamientos de medicina estética y antienvejecimiento de Madeira Medical Group en Versalles, Puerto Vallarta. Nuestros médicos especializados ofrecen toxina botulínica tipo A, bioestimuladores de colágeno, rellenos dérmicos, peelings, microneedling y escleroterapia con resultados visibles desde la primera sesión. Descubre por qué somos el referente de medicina estética en la zona.",
    descriptionEn:
      "Rejuvenate safely and naturally with the aesthetic medicine and anti-aging treatments at Madeira Medical Group in Versalles, Puerto Vallarta. Our specialized physicians offer Botox type A, collagen biostimulators, dermal fillers, chemical peels, microneedling, and sclerotherapy with visible results from the first session. Discover why we are the leading aesthetic medicine center in the region.",
    keywords: [
      "medicina estética Puerto Vallarta",
      "bótox Puerto Vallarta",
      "rellenos faciales Puerto Vallarta",
      "antienvejecimiento Puerto Vallarta",
      "microneedling Puerto Vallarta",
      "aesthetic medicine Puerto Vallarta",
      "Botox Puerto Vallarta Mexico",
      "Madeira Medical Group medicina estética",
    ],
    doctorSlugs: [
      "dr_marco_antonio_rodriguez_perez",
      "dra_esli_perez_castro",
      "dr_edgar_martin_hernandez_jimenez",
      "dra_angela_goretti_robles_ibarra",
    ],
    faq: [
      {
        q: "¿Cuánto dura el efecto de la toxina botulínica?",
        a: "El efecto del bótox dura entre 3 y 6 meses dependiendo del área tratada y el metabolismo individual. Se recomienda mantenimiento preventivo cada 4-5 meses.",
      },
      {
        q: "¿Los bioestimuladores de colágeno son seguros?",
        a: "Sí. Productos como Sculptra o Radiesse tienen amplia evidencia científica. Estimulan la producción natural de colágeno de forma progresiva y segura.",
      },
      {
        q: "¿A partir de qué edad se recomienda la medicina estética preventiva?",
        a: "Muchos pacientes comienzan tratamientos preventivos desde los 28-30 años. La medicina estética preventiva retarda el envejecimiento y requiere menos producto que los tratamientos correctivos.",
      },
      {
        q: "¿Puedo hacerme un tratamiento y salir a trabajar el mismo día?",
        a: "La mayoría de los tratamientos no quirúrgicos son ambulatorios, sin tiempo de recuperación. Bótox y rellenos permiten reincorporarte a tus actividades inmediatamente.",
      },
    ],
  },
  {
    slug: "endocrinologo-puerto-vallarta",
    name: "Endocrinología",
    nameEn: "Endocrinology",
    headline: "Endocrinólogo en Puerto Vallarta",
    headlineEn: "Endocrinologist in Puerto Vallarta",
    description:
      "Controla tu diabetes, tiroides, sobrepeso y trastornos hormonales con nuestros especialistas en endocrinología de Madeira Medical Group, Versalles, Puerto Vallarta. Contamos con endocrinólogos para adultos y pediátricos que abordan desde diabetes tipo 1 y 2, resistencia a la insulina y síndrome de Cushing, hasta pubertad precoz y trastornos del crecimiento en niños. Solicita tu cita y recupera el equilibrio hormonal con diagnósticos precisos y tratamientos personalizados.",
    descriptionEn:
      "Manage diabetes, thyroid disorders, obesity, and hormonal imbalances with our endocrinology specialists at Madeira Medical Group in Versalles, Puerto Vallarta. We offer both adult and pediatric endocrinology, addressing type 1 and 2 diabetes, insulin resistance, Cushing syndrome, precocious puberty, and growth disorders. Book your appointment for precise diagnostics and personalized treatment.",
    keywords: [
      "endocrinólogo Puerto Vallarta",
      "diabetes Puerto Vallarta",
      "tiroides Puerto Vallarta",
      "endocrinología pediátrica Puerto Vallarta",
      "sobrepeso hormonal Puerto Vallarta",
      "endocrinologist Puerto Vallarta",
      "diabetes doctor Puerto Vallarta Mexico",
      "Madeira Medical Group endocrinología",
    ],
    doctorSlugs: ["dra_lidia_ivonne_moreno_rodriguez", "dra_fernanda_sanchez"],
    faq: [
      {
        q: "¿Cuándo debo ver a un endocrinólogo?",
        a: "Si tienes diabetes, problemas de tiroides, obesidad de difícil control, irregularidades hormonales o trastornos del crecimiento en niños, un endocrinólogo es el especialista indicado.",
      },
      {
        q: "¿Atienden diabetes tipo 1 y tipo 2?",
        a: "Sí. Manejamos ambos tipos con protocolos actualizados incluyendo monitoreo continuo de glucosa, bombas de insulina y terapia con GLP-1 para diabetes tipo 2.",
      },
      {
        q: "¿Tienen endocrinólogo pediátrico?",
        a: "Sí, contamos con endocrinóloga pediátrica especializada en problemas de crecimiento, pubertad, diabetes infantil y metabolismo de calcio en niños.",
      },
      {
        q: "¿Qué estudios necesito antes de mi primera consulta?",
        a: "Idealmente lleva resultados de laboratorio recientes (glucosa, hemoglobina glucosilada, perfil tiroideo, lipídico). Si no tienes, en Madeira Medical Group contamos con BIOS LAB para tomarlos el mismo día.",
      },
    ],
  },
  {
    slug: "alergia-inmunologia-pediatria-puerto-vallarta",
    name: "Alergia, Inmunología y Pediatría",
    nameEn: "Allergy, Immunology & Pediatrics",
    headline: "Alergólogo e Inmunólogo en Puerto Vallarta",
    headlineEn: "Allergist & Immunologist in Puerto Vallarta",
    description:
      "Trata las alergias respiratorias, alimentarias y de piel de tus hijos con nuestros especialistas en alergia, inmunología clínica y pediatría en Madeira Medical Group, Versalles, Puerto Vallarta. Realizamos pruebas de alergia, inmunoterapia (vacunas para alergia) y atención pediátrica integral desde recién nacidos hasta los 18 años. Un solo especialista para la salud completa de tu hijo.",
    descriptionEn:
      "Treat respiratory, food, and skin allergies in children and adults with our allergy, clinical immunology, and pediatrics specialists at Madeira Medical Group in Versalles, Puerto Vallarta. We perform allergy testing, immunotherapy (allergy shots), and comprehensive pediatric care from newborns to age 18. One specialist for your child's complete health.",
    keywords: [
      "alergólogo Puerto Vallarta",
      "inmunología Puerto Vallarta",
      "pediatra Puerto Vallarta",
      "alergia niños Puerto Vallarta",
      "inmunoterapia Puerto Vallarta",
      "allergist Puerto Vallarta",
      "pediatrician Puerto Vallarta Mexico",
      "Madeira Medical Group pediatría",
    ],
    doctorSlugs: ["dr_carlos_omar_zuniga_reyes"],
    faq: [
      {
        q: "¿A partir de qué edad se puede hacer una prueba de alergia?",
        a: "Las pruebas de alergia (prick test) se pueden realizar desde los 2 años de edad. En bebés menores, usamos análisis de sangre específicos para detectar sensibilizaciones.",
      },
      {
        q: "¿Qué es la inmunoterapia para alergia?",
        a: "Es el único tratamiento que modifica la causa de la alergia. Consiste en aplicar dosis crecientes del alérgeno para desensibilizar al paciente. Disponible en esquema clásico o acelerado.",
      },
      {
        q: "¿El especialista también atiende a adultos?",
        a: "Sí. El Dr. Zúñiga Reyes atiende tanto a niños como a adultos con problemas de alergia e inmunología clínica.",
      },
      {
        q: "¿Pueden atender urgencias pediátricas?",
        a: "Atendemos consultas de urgencia durante horario de consultorio. Para emergencias graves fuera de horario, orientamos a los hospitales con urgencias pediátricas disponibles en Puerto Vallarta.",
      },
    ],
  },
  {
    slug: "medicina-interna-puerto-vallarta",
    name: "Medicina Interna",
    nameEn: "Internal Medicine",
    headline: "Internista en Puerto Vallarta",
    headlineEn: "Internal Medicine Specialist in Puerto Vallarta",
    description:
      "La medicina interna es la especialidad que coordina y resuelve enfermedades complejas del adulto. En Madeira Medical Group, Versalles, Puerto Vallarta, nuestro internista ofrece consultas de especialidad, interpretación de laboratorios, valoraciones preoperatorias, electrocardiograma y control metabólico completo. Ideal para pacientes con múltiples condiciones crónicas que requieren un manejo integral y coordinado.",
    descriptionEn:
      "Internal medicine is the specialty that coordinates and resolves complex adult diseases. At Madeira Medical Group in Versalles, Puerto Vallarta, our internist provides specialty consultations, laboratory interpretation, preoperative assessments, ECG, and complete metabolic management. Ideal for patients with multiple chronic conditions requiring integrated, coordinated care.",
    keywords: [
      "internista Puerto Vallarta",
      "medicina interna Puerto Vallarta",
      "valoración preoperatoria Puerto Vallarta",
      "electrocardiograma Puerto Vallarta",
      "control metabólico Puerto Vallarta",
      "internal medicine Puerto Vallarta",
      "internist doctor Puerto Vallarta Mexico",
      "Madeira Medical Group medicina interna",
    ],
    doctorSlugs: ["dr_diego_alejandro_arce_lopez"],
    faq: [
      {
        q: "¿Cuándo debo consultar a un médico internista?",
        a: "Cuando tienes enfermedades crónicas como hipertensión, diabetes, enfermedades autoinmunes o varias condiciones simultáneas. El internista actúa como coordinador de tu salud general.",
      },
      {
        q: "¿Realizan valoraciones preoperatorias el mismo día?",
        a: "Sí. Podemos agendar valoración preoperatoria con poco tiempo de anticipación. Incluye historia clínica, EKG, interpretación de laboratorios y nota para cirugía.",
      },
      {
        q: "¿Interpretan resultados de laboratorio de otras instituciones?",
        a: "Absolutamente. Si traes resultados previos de cualquier laboratorio, nuestro internista los analiza en el contexto de tu historia clínica completa.",
      },
      {
        q: "¿Atienden a pacientes internacionales sin historial médico local?",
        a: "Sí. Muchos de nuestros pacientes son visitantes o residentes extranjeros. Trabajamos con el historial que el paciente traiga y hacemos una evaluación integral desde cero si es necesario.",
      },
    ],
  },
  {
    slug: "geriatra-puerto-vallarta",
    name: "Geriatría",
    nameEn: "Geriatrics",
    headline: "Geriatra en Puerto Vallarta",
    headlineEn: "Geriatrician in Puerto Vallarta",
    description:
      "La atención especializada del adulto mayor requiere experiencia y sensibilidad. En Madeira Medical Group, Versalles, Puerto Vallarta, nuestra geriatra ofrece evaluación integral del adulto mayor, test de memoria, rehabilitación, cuidados paliativos, manejo del dolor crónico y trastornos del sueño. Un servicio especialmente valioso para la numerosa comunidad de jubilados extranjeros y mexicanos que eligen Puerto Vallarta como su hogar.",
    descriptionEn:
      "Specialized care for elderly adults requires experience and sensitivity. At Madeira Medical Group in Versalles, Puerto Vallarta, our geriatrician offers comprehensive elderly assessment, memory testing, rehabilitation, palliative care, chronic pain management, and sleep disorder treatment. An especially valuable service for the large community of foreign and Mexican retirees who choose Puerto Vallarta as their home.",
    keywords: [
      "geriatra Puerto Vallarta",
      "geriatría Puerto Vallarta",
      "adulto mayor Puerto Vallarta",
      "demencia Puerto Vallarta",
      "cuidados paliativos Puerto Vallarta",
      "geriatrician Puerto Vallarta",
      "elderly care Puerto Vallarta Mexico",
      "Madeira Medical Group geriatría",
    ],
    doctorSlugs: ["dra_adriana_turrubiates_flores"],
    faq: [
      {
        q: "¿A partir de qué edad se recomienda consultar a un geriatra?",
        a: "Generalmente a partir de los 65 años, o antes si existen múltiples enfermedades crónicas, caídas frecuentes, pérdida de memoria o dependencia funcional.",
      },
      {
        q: "¿Realizan evaluaciones de demencia y Alzheimer?",
        a: "Sí. Aplicamos pruebas validadas de función cognitiva (Mini-Mental, MoCA) y elaboramos un plan de diagnóstico y seguimiento para deterioro cognitivo y demencias.",
      },
      {
        q: "¿Pueden hacer visitas a domicilio en Puerto Vallarta?",
        a: "Consulta disponibilidad directamente con nuestra especialista. Para pacientes con movilidad reducida evaluamos alternativas de atención.",
      },
      {
        q: "¿Atienden a jubilados extranjeros residentes en Puerto Vallarta?",
        a: "Sí. Tenemos amplia experiencia con pacientes estadounidenses y canadienses retirados en la zona. La comunicación puede ser en inglés si es necesario.",
      },
    ],
  },
  {
    slug: "nutriologo-puerto-vallarta",
    name: "Nutriología",
    nameEn: "Clinical Nutrition",
    headline: "Nutriólogo en Puerto Vallarta",
    headlineEn: "Nutritionist in Puerto Vallarta",
    description:
      "Logra tus metas de salud y peso con la asesoría nutricional personalizada de Madeira Medical Group en Versalles, Puerto Vallarta. Nuestra nutrióloga realiza análisis de bioimpedancia InBody, diagnóstico nutricional preciso y elabora planes de alimentación adaptados a tu estilo de vida, objetivos y condiciones médicas. Con seguimiento continuo y herramientas digitales, transformar tu alimentación nunca fue tan accesible.",
    descriptionEn:
      "Achieve your health and weight goals with personalized nutritional counseling at Madeira Medical Group in Versalles, Puerto Vallarta. Our clinical nutritionist performs InBody bioimpedance analysis, precise nutritional diagnosis, and creates eating plans tailored to your lifestyle, goals, and medical conditions. With ongoing follow-up and digital tools, transforming your nutrition has never been more accessible.",
    keywords: [
      "nutriólogo Puerto Vallarta",
      "nutrición Puerto Vallarta",
      "dieta personalizada Puerto Vallarta",
      "bioimpedancia Puerto Vallarta",
      "pérdida de peso Puerto Vallarta",
      "nutritionist Puerto Vallarta",
      "dietitian Puerto Vallarta Mexico",
      "Madeira Medical Group nutriología",
    ],
    doctorSlugs: ["dra_aylin_santana_ortiz"],
    faq: [
      {
        q: "¿Qué incluye la primera consulta de nutriología?",
        a: "La primera consulta incluye historial clínico, mediciones antropométricas, análisis de bioimpedancia InBody, diagnóstico nutricional y elaboración de tu plan de alimentación personalizado.",
      },
      {
        q: "¿Pueden ayudarme si tengo una condición médica como diabetes o hipotiroidismo?",
        a: "Sí. La nutrición clínica complementa el tratamiento médico de enfermedades crónicas. Trabajamos en coordinación con los especialistas de Madeira Medical Group.",
      },
      {
        q: "¿Ofrecen seguimiento virtual?",
        a: "Sí. Ofrecemos consultas de seguimiento presenciales o virtuales y acceso a una app de nutrición para registro de alimentos y comunicación continua.",
      },
      {
        q: "¿En cuánto tiempo puedo ver resultados?",
        a: "La mayoría de los pacientes ven cambios en la composición corporal en 4-6 semanas con adherencia al plan. Los resultados dependen del objetivo y punto de partida de cada persona.",
      },
    ],
  },
  {
    slug: "psicologo-puerto-vallarta",
    name: "Psicología Clínica",
    nameEn: "Clinical Psychology",
    headline: "Psicólogo en Puerto Vallarta",
    headlineEn: "Psychologist in Puerto Vallarta",
    description:
      "El bienestar mental es tan importante como la salud física. En Madeira Medical Group, Versalles, Puerto Vallarta, nuestra psicóloga clínica ofrece terapia individual, familiar, de pareja e infantil, psicodiagnóstico, atención psiquiátrica, manejo de trastornos del neurodesarrollo y servicios de psicología forense y peritaje. Un espacio seguro y profesional para sanar y crecer emocionalmente.",
    descriptionEn:
      "Mental well-being is as important as physical health. At Madeira Medical Group in Versalles, Puerto Vallarta, our clinical psychologist offers individual, family, couples, and child therapy, psychodiagnosis, psychiatric care, neurodevelopmental disorder management, and forensic psychology services. A safe and professional space for emotional healing and growth.",
    keywords: [
      "psicólogo Puerto Vallarta",
      "psicología clínica Puerto Vallarta",
      "terapia de pareja Puerto Vallarta",
      "psicología infantil Puerto Vallarta",
      "trastornos neurodesarrollo Puerto Vallarta",
      "psychologist Puerto Vallarta",
      "therapy Puerto Vallarta Mexico",
      "Madeira Medical Group psicología",
    ],
    doctorSlugs: ["dra_sindy_adriana_castillo_vera"],
    faq: [
      {
        q: "¿Cómo sé si necesito terapia psicológica?",
        a: "Si experimentas ansiedad, tristeza persistente, problemas relacionales, dificultades en el trabajo o situaciones de vida que sientes que no puedes manejar solo, una consulta psicológica puede ser muy beneficiosa.",
      },
      {
        q: "¿Ofrecen terapia en inglés?",
        a: "Consulta disponibilidad de atención en inglés directamente con nosotros. Puerto Vallarta tiene una comunidad expat activa y entendemos la importancia de comunicarse en tu idioma.",
      },
      {
        q: "¿Qué es el psicodiagnóstico?",
        a: "Es una evaluación psicológica formal que usa pruebas estandarizadas para identificar condiciones como TDAH, ansiedad, depresión, trastornos de personalidad u otras condiciones. Útil para diagnóstico preciso y planeación del tratamiento.",
      },
      {
        q: "¿Atienden a niños con problemas de conducta o aprendizaje?",
        a: "Sí. Manejamos trastornos del neurodesarrollo como TDAH, TEA (autismo), dificultades de aprendizaje y problemas conductuales en niños y adolescentes.",
      },
    ],
  },
  {
    slug: "laboratorio-clinico-puerto-vallarta",
    name: "Laboratorio Clínico",
    nameEn: "Clinical Laboratory",
    headline: "Laboratorio Clínico en Puerto Vallarta",
    headlineEn: "Clinical Laboratory in Puerto Vallarta",
    description:
      "BIOS LAB en Madeira Medical Group, Versalles, Puerto Vallarta, ofrece una amplia gama de análisis clínicos con resultados precisos y oportunos. Desde biometría hemática y perfiles metabólicos hasta estudios tiroideos, ováricos, prenatales y de transmisión sexual. La proximidad con los especialistas del grupo permite integrar resultados directamente en tu consulta médica el mismo día.",
    descriptionEn:
      "BIOS LAB at Madeira Medical Group in Versalles, Puerto Vallarta, offers a comprehensive range of clinical tests with precise, timely results. From complete blood count and metabolic panels to thyroid, ovarian, prenatal, and STI studies. Proximity to the group's specialists allows results to be integrated directly into your medical consultation the same day.",
    keywords: [
      "laboratorio clínico Puerto Vallarta",
      "análisis de sangre Puerto Vallarta",
      "laboratorio Versalles Puerto Vallarta",
      "perfil metabólico Puerto Vallarta",
      "exámenes de laboratorio Puerto Vallarta",
      "clinical laboratory Puerto Vallarta",
      "blood test Puerto Vallarta Mexico",
      "BIOS LAB Madeira Medical Group",
    ],
    doctorSlugs: ["bios_lab"],
    faq: [
      {
        q: "¿Necesito cita para el laboratorio?",
        a: "No necesariamente. Puedes acudir sin cita previa en nuestros horarios de atención. Para estudios especiales o toma de muestra en ayuno, recomendamos verificar horarios.",
      },
      {
        q: "¿En cuánto tiempo están listos los resultados?",
        a: "La mayoría de los estudios básicos tienen resultados el mismo día. Algunos estudios especializados pueden tomar 24-48 horas. Te notificamos cuando estén disponibles.",
      },
      {
        q: "¿Pueden entregar resultados digitalmente?",
        a: "Sí. Los resultados pueden enviarse digitalmente para que tu médico los tenga disponibles antes de tu consulta.",
      },
      {
        q: "¿Realizan perfiles prenatales completos?",
        a: "Sí. Incluimos perfil prenatal con TORCH, glucosa, grupo sanguíneo, examen general de orina y todos los estudios solicitados en el control del embarazo.",
      },
    ],
  },
  {
    slug: "armonizacion-facial-puerto-vallarta",
    name: "Armonización Facial",
    nameEn: "Facial Harmonization",
    headline: "Armonización Facial en Puerto Vallarta",
    headlineEn: "Facial Harmonization in Puerto Vallarta",
    description:
      "La armonización facial redefine tus rasgos de manera natural y armoniosa. En Madeira Medical Group, Versalles, Puerto Vallarta, nuestros especialistas aplican ácido hialurónico, bótox, bioestimuladores de colágeno, hilos tensores y bichectomía para lograr un equilibrio facial perfecto sin cirugía. Resultados elegantes, seguros y personalizados para cada rostro.",
    descriptionEn:
      "Facial harmonization redefines your features naturally and harmoniously. At Madeira Medical Group in Versalles, Puerto Vallarta, our specialists apply hyaluronic acid, Botox, collagen biostimulators, thread lifts, and bichectomy to achieve perfect facial balance without surgery. Elegant, safe, and personalized results for every face.",
    keywords: [
      "armonización facial Puerto Vallarta",
      "ácido hialurónico Puerto Vallarta",
      "bótox Puerto Vallarta",
      "hilos tensores Puerto Vallarta",
      "bichectomía Puerto Vallarta",
      "facial harmonization Puerto Vallarta",
      "hyaluronic acid Puerto Vallarta Mexico",
      "Madeira Medical Group armonización facial",
    ],
    doctorSlugs: [
      "dra_angela_goretti_robles_ibarra",
      "dr_marco_antonio_rodriguez_perez",
    ],
    faq: [
      {
        q: "¿Cuánto tiempo dura el ácido hialurónico?",
        a: "Dependiendo del área y el producto, el ácido hialurónico dura entre 9 y 18 meses. Zonas de poco movimiento (mentón, pómulos) duran más que labios o círculos.",
      },
      {
        q: "¿La armonización facial se ve natural?",
        a: "Con técnica y dosis correctas, absolutamente. El objetivo es realzar tu belleza natural, no cambiar quién eres. Nuestra filosofía es 'menos es más'.",
      },
      {
        q: "¿Cuánto tiempo tarda una sesión de armonización?",
        a: "Una sesión completa de armonización facial puede tomar entre 45 minutos y 1.5 horas dependiendo de los procedimientos incluidos. Es ambulatoria y no requiere recuperación.",
      },
      {
        q: "¿Puedo hacerme armonización antes de un evento importante?",
        a: "Recomendamos hacerla al menos 2 semanas antes de un evento importante para que cualquier inflamación leve se resuelva y el resultado sea óptimo.",
      },
    ],
  },
  {
    slug: "cirugia-maxilofacial-puerto-vallarta",
    name: "Cirugía Oral y Maxilofacial",
    nameEn: "Oral & Maxillofacial Surgery",
    headline: "Cirujano Maxilofacial en Puerto Vallarta",
    headlineEn: "Oral & Maxillofacial Surgeon in Puerto Vallarta",
    description:
      "La cirugía oral y maxilofacial resuelve desde extracciones de muelas del juicio hasta reconstrucciones faciales complejas. En Madeira Medical Group, Versalles, Puerto Vallarta, nuestro cirujano maxilofacial atiende patología oral, anomalías dentofaciales, cirugía ortognática, traumatismos faciales, trastornos de ATM, implantología avanzada y reconstrucción maxilofacial con los más altos estándares de seguridad.",
    descriptionEn:
      "Oral and maxillofacial surgery addresses everything from wisdom tooth extractions to complex facial reconstructions. At Madeira Medical Group in Versalles, Puerto Vallarta, our maxillofacial surgeon treats oral pathology, dentofacial anomalies, orthognathic surgery, facial trauma, TMJ disorders, advanced implantology, and maxillofacial reconstruction to the highest safety standards.",
    keywords: [
      "cirujano maxilofacial Puerto Vallarta",
      "cirugía oral Puerto Vallarta",
      "muelas del juicio Puerto Vallarta",
      "cirugía ortognática Puerto Vallarta",
      "implantes avanzados Puerto Vallarta",
      "oral surgeon Puerto Vallarta",
      "maxillofacial surgery Puerto Vallarta Mexico",
      "Madeira Medical Group cirugía oral",
    ],
    doctorSlugs: ["dr_jose_emanuel_martinez_rojo"],
    faq: [
      {
        q: "¿La extracción de muelas del juicio requiere hospitalización?",
        a: "Generalmente no. La mayoría de las extracciones de terceros molares se realizan de forma ambulatoria con anestesia local o sedación consciente. Solo casos muy complejos requieren hospitalización.",
      },
      {
        q: "¿Qué es la cirugía ortognática?",
        a: "Es una cirugía para corregir deformidades del esqueleto facial que afectan la mordida, la función masticatoria y la estética. Se realiza en combinación con tratamiento de ortodoncia.",
      },
      {
        q: "¿Tratan fracturas faciales por accidente?",
        a: "Sí. El Dr. Martínez Rojo tiene experiencia en manejo de traumatismos faciales. Contáctanos para evaluar la urgencia y coordinar la atención adecuada.",
      },
      {
        q: "¿Cuánto tiempo de recuperación necesito tras una extracción de muela del juicio?",
        a: "En general, 3-5 días de molestia leve-moderada controlada con medicamento. La recuperación completa del tejido ocurre en 2-3 semanas.",
      },
    ],
  },
  {
    slug: "medicina-regenerativa-puerto-vallarta",
    name: "Medicina Regenerativa",
    nameEn: "Regenerative Medicine",
    headline: "Medicina Regenerativa en Puerto Vallarta",
    headlineEn: "Regenerative Medicine in Puerto Vallarta",
    description:
      "La medicina regenerativa y bioestética es la vanguardia del bienestar integral. En Madeira Medical Group, Versalles, Puerto Vallarta, ofrecemos terapia hormonal bioidéntica, terapia celular, exosomas, implante placentario, bioestimuladores y moldeamiento corporal para restaurar la vitalidad, revertir el envejecimiento celular y optimizar tu salud desde adentro. Ideal para quienes buscan longevidad activa y calidad de vida.",
    descriptionEn:
      "Regenerative and bioesthetic medicine is the frontier of comprehensive wellness. At Madeira Medical Group in Versalles, Puerto Vallarta, we offer bio-identical hormone therapy, cellular therapy, exosomes, placental implant, biostimulators, and body sculpting to restore vitality, reverse cellular aging, and optimize your health from within. Ideal for those seeking active longevity and quality of life.",
    keywords: [
      "medicina regenerativa Puerto Vallarta",
      "terapia hormonal bioidéntica Puerto Vallarta",
      "terapia celular Puerto Vallarta",
      "exosomas Puerto Vallarta",
      "longevidad Puerto Vallarta",
      "regenerative medicine Puerto Vallarta",
      "stem cell therapy Puerto Vallarta Mexico",
      "Madeira Medical Group medicina regenerativa",
    ],
    doctorSlugs: ["dra_esli_perez_castro", "dr_edgar_martin_hernandez_jimenez"],
    faq: [
      {
        q: "¿Qué es la terapia hormonal bioidéntica?",
        a: "Son hormonas sintéticas con estructura idéntica a las que produce tu cuerpo. Se usan para restaurar niveles hormonales óptimos en climaterio, andropausia y deficiencias hormonales.",
      },
      {
        q: "¿Para qué sirven los exosomas?",
        a: "Los exosomas son vesículas extracelulares con factores de crecimiento. Se usan para regeneración tisular, rejuvenecimiento facial, caída de cabello y recuperación de lesiones.",
      },
      {
        q: "¿La medicina regenerativa es segura?",
        a: "Sí, cuando es aplicada por médicos certificados. Nuestros especialistas aplican protocolos con evidencia científica y productos de calidad farmacéutica certificada.",
      },
      {
        q: "¿Cuántas sesiones necesito para ver resultados?",
        a: "Depende del tratamiento y el objetivo. Algunos protocolos muestran mejoras desde la primera sesión; otros son procesos de 3-6 meses para optimización metabólica profunda.",
      },
    ],
  },
];

export const WHY = {
  badge: "¿Por qué elegirnos?",
  headline: "¿Por qué elegir Madeira Medical Group?",
  cards: [
    {
      icon: "📍",
      title: "Excelente Ubicación",
      description:
        "Ubicados en Versalles, el barrio más reconocido de Puerto Vallarta, con la mayor densidad de flujo de pacientes locales e internacionales.",
    },
    {
      icon: "✈️",
      title: "Turismo Médico",
      description:
        "Puerto Vallarta es el destino mejor posicionado a nivel nacional para el turismo médico. Tus pacientes te encontrarán desde cualquier parte del mundo.",
    },
    {
      icon: "🗓️",
      title: "Gestión de Consultas",
      description:
        "Secretaria y sistema de gestión de citas incluidos. Enfócate en tus pacientes, nosotros nos encargamos de la operación.",
    },
    {
      icon: "📈",
      title: "Retorno de Inversión Inmediato",
      description:
        "Saque el máximo provecho de su ubicación dentro de Punto Madeira, complejo residencial y comercial con 55 familias.",
    },
  ],
};

export const CONTACT = {
  badge: "Contacto",
  headline: "Habla con nosotros hoy",
  body: "Nuestro equipo está listo para asesorarte y mostrarte los consultorios disponibles sin compromiso.",
  formFields: {
    name: "Tu nombre completo",
    email: "Correo electrónico",
    phone: "Teléfono / WhatsApp",
    specialty: "Especialidad médica",
    message: "Mensaje (opcional)",
  },
  submitLabel: "Enviar mensaje",
};

export const FOOTER = {
  tagline: "Consultorios médicos premium en Puerto Vallarta.",
  links: [
    { label: "Inicio", href: "#inicio" },
    { label: "Rentar Consultorio", href: "#renta" },
    { label: "Especialidades", href: "#especialidades" },
    { label: "Médicos", href: "#medicos" },
    { label: "Contacto", href: "#contacto" },
  ],
  copyright: `© ${new Date().getFullYear()} Madeira Medical Group. Todos los derechos reservados.`,
  credit: "Desarrollado por HOMIA Digital",
};
