// ============================================================
// MADEIRA MEDICAL GROUP — BLOG POSTS
// Add new articles here. Each post renders at /[lang]/blog/[slug]
// ============================================================

export interface BlogPost {
  slug: string;
  lang: "es" | "en";
  title: string;
  description: string; // meta description ~155 chars
  publishedAt: string; // ISO date
  doctorSlug?: string; // links to /medicos/[slug]
  specialtySlug?: string; // links to /especialidades/[slug]
  keywords: string[];
  coverImage?: string; // /doctors/... or /blog/...
  content: string; // HTML string
}

export const BLOG_POSTS: BlogPost[] = [
  // ── ART-08 ─────────────────────────────────────────────────
  {
    slug: "armonizacion-facial-puerto-vallarta",
    lang: "es",
    title: "Armonización Facial en Puerto Vallarta: qué es, cuánto cuesta y qué esperar",
    description:
      "Guía completa sobre armonización facial en Puerto Vallarta: procedimientos, precios reales, diferencias con el bótox y cómo elegir un médico certificado. Por Dra. Ángela Robles.",
    publishedAt: "2026-05-05",
    doctorSlug: "dra_angela_goretti_robles_ibarra",
    specialtySlug: "armonizacion-facial-puerto-vallarta",
    keywords: [
      "armonización facial Puerto Vallarta",
      "armonización facial precio Puerto Vallarta",
      "ácido hialurónico Puerto Vallarta",
      "bótox Puerto Vallarta",
      "medicina estética Puerto Vallarta",
    ],
    coverImage: "/doctors/dra_angela_goretti_robles_ibarra.jpg",
    content: `
<h2>¿Qué es la armonización facial?</h2>
<p>La armonización facial es un conjunto de procedimientos médico-estéticos <strong>no quirúrgicos</strong> que buscan equilibrar y proporcionar las facciones del rostro. A diferencia de una cirugía plástica, no requiere bisturí ni anestesia general: se realiza en consultorio, con resultados visibles desde la primera sesión y sin tiempo de recuperación significativo.</p>
<p>En Madeira Medical Group, en el corazón de Versalles, Puerto Vallarta, la Dra. Ángela Goretti Robles Ibarra combina técnicas de odontología estética con armonización facial para ofrecer resultados integrales que consideran tanto el rostro como la sonrisa.</p>

<h2>¿Qué incluye la armonización facial?</h2>
<p>Un plan de armonización facial se diseña de manera completamente personalizada. Los procedimientos más comunes incluyen:</p>
<ul>
  <li><strong>Ácido hialurónico (rellenos dérmicos):</strong> Para definir el mentón, aumentar el volumen de los labios, corregir las ojeras o perfilar los pómulos.</li>
  <li><strong>Toxina botulínica (bótox):</strong> Para suavizar líneas de expresión en frente, entre las cejas y patas de gallo.</li>
  <li><strong>Bioestimuladores de colágeno (Sculptra, Radiesse, Ellansé):</strong> Para mejorar la calidad de la piel y recuperar volúmenes perdidos de manera progresiva.</li>
  <li><strong>Bichectomía:</strong> Procedimiento mínimamente invasivo para reducir las bolsas de Bichat y estilizar el rostro.</li>
  <li><strong>Hilos tensores:</strong> Para definir el óvalo facial y el cuello sin cirugía.</li>
</ul>

<h2>¿Cuánto cuesta la armonización facial en Puerto Vallarta?</h2>
<p>El costo varía según las áreas a tratar y los productos utilizados. En términos generales:</p>
<ul>
  <li><strong>Bótox (por área):</strong> $2,500–$4,500 MXN</li>
  <li><strong>Ácido hialurónico (por jeringa):</strong> $4,000–$8,500 MXN según la marca (Juvederm, Restylane, Teosyal)</li>
  <li><strong>Paquete de armonización completa:</strong> $12,000–$30,000 MXN dependiendo del plan</li>
  <li><strong>Bioestimulador de colágeno:</strong> $8,000–$15,000 MXN por sesión</li>
</ul>
<p>En comparación con Ciudad de México o Guadalajara, los precios en Puerto Vallarta son competitivos y la experiencia incluye la posibilidad de recuperarte en un destino turístico de clase mundial.</p>

<h2>¿Quién es candidata/o para la armonización facial?</h2>
<p>Prácticamente cualquier persona adulta que desee mejorar sus rasgos de manera natural y sin cirugía. Los casos más frecuentes:</p>
<ul>
  <li>Personas que notan la pérdida de volumen facial a partir de los 30 años</li>
  <li>Quienes desean definir el mentón, los pómulos o el perfil de labios</li>
  <li>Pacientes con asimetrías leves que quieren mejorar su armonía facial</li>
  <li>Turistas de salud que visitan Puerto Vallarta y aprovechan para realizarse un tratamiento</li>
</ul>

<h2>¿Cuánto dura la sesión y cuándo se ven los resultados?</h2>
<p>Una sesión completa de armonización facial dura entre <strong>45 y 90 minutos</strong>, dependiendo del número de áreas a tratar. Los resultados del ácido hialurónico son inmediatos, mientras que el bótox tarda entre 3 y 7 días en verse completamente. Los bioestimuladores muestran su efecto máximo entre 4 y 8 semanas después.</p>
<p>La duración de los resultados varía: el bótox dura entre 4 y 6 meses, el ácido hialurónico entre 8 y 18 meses y los bioestimuladores pueden durar hasta 2 años.</p>

<h2>¿Es seguro hacerse armonización facial en Puerto Vallarta?</h2>
<p>La seguridad del procedimiento depende de <strong>quién lo realiza</strong>, no del destino. Lo más importante es que el médico esté certificado y utilice productos con registro sanitario (COFEPRIS en México, equivalente a la FDA en EE.UU.).</p>
<p>En Madeira Medical Group, todos los procedimientos los realiza la <strong>Dra. Ángela Goretti Robles Ibarra</strong>, médico con formación en odontología y armonización facial, en un consultorio médico regulado y con insumos de marcas reconocidas internacionalmente. No es un spa ni un centro de belleza — es un consultorio médico certificado.</p>

<h2>¿Qué debo preguntar antes de mi consulta?</h2>
<ol>
  <li>¿El médico tiene título y cédula profesional en el área?</li>
  <li>¿Qué marca y lote de producto se utilizará?</li>
  <li>¿El consultorio tiene los insumos para manejar reacciones adversas?</li>
  <li>¿Qué pasa si no me gustan los resultados?</li>
  <li>¿Existe seguimiento post-procedimiento?</li>
</ol>

<h2>Preguntas frecuentes</h2>
<details>
  <summary><strong>¿Duele la armonización facial?</strong></summary>
  <p>Las molestias son mínimas. Los rellenos con ácido hialurónico ya incluyen lidocaína en su formulación. El bótox se aplica con agujas muy finas. La mayoría de los pacientes no requieren anestesia adicional.</p>
</details>
<details>
  <summary><strong>¿Puedo hacerme armonización facial si estoy de vacaciones en Puerto Vallarta?</strong></summary>
  <p>Sí. Los efectos secundarios (pequeña inflamación o enrojecimiento) desaparecen en 24–48 horas. Recomendamos evitar sol intenso y actividad física intensa el mismo día, por lo que es ideal realizarlo al inicio de tu estancia.</p>
</details>
<details>
  <summary><strong>¿Necesito más de una sesión?</strong></summary>
  <p>Generalmente los resultados se logran en una sola sesión. Sin embargo, algunos tratamientos como los bioestimuladores pueden requerir 2–3 sesiones para el efecto óptimo.</p>
</details>
<details>
  <summary><strong>¿La armonización facial se ve natural?</strong></summary>
  <p>En manos de un médico certificado, absolutamente. El objetivo no es cambiar cómo te ves sino mejorar y equilibrar tus propios rasgos. El "efecto exagerado" que muchas personas temen ocurre cuando se aplica demasiado producto o sin criterio médico.</p>
</details>
    `,
  },

  // ── ART-14 ─────────────────────────────────────────────────
  {
    slug: "english-speaking-gynecologist-puerto-vallarta",
    lang: "en",
    title: "Finding an English-Speaking Gynecologist in Puerto Vallarta: A Guide for Expats",
    description:
      "Comprehensive guide for expats and visitors looking for an English-speaking OB-GYN in Puerto Vallarta. Services, costs, what to expect, and how to book.",
    publishedAt: "2026-05-05",
    doctorSlug: "dr_mario_alejandro_rendon_acosta",
    specialtySlug: "ginecologo-puerto-vallarta",
    keywords: [
      "gynecologist Puerto Vallarta English speaking",
      "OB-GYN Puerto Vallarta expat",
      "English speaking doctor Puerto Vallarta",
      "gynecologist Versalles Puerto Vallarta",
      "prenatal care Puerto Vallarta",
    ],
    coverImage: "/doctors/dr_mario_alejandro_rendon_acosta.jpg",
    content: `
<h2>Gynecological Care in Puerto Vallarta: Better Than You Think</h2>
<p>One of the most common questions in expat Facebook groups and forums is: <em>"Can anyone recommend a good English-speaking gynecologist in Puerto Vallarta?"</em> The answer is yes — and the quality of care may surprise you.</p>
<p>Puerto Vallarta's Versalles neighborhood has become one of Mexico's most concentrated medical districts, with specialists trained at top Mexican and international universities. At <strong>Madeira Medical Group</strong>, we have three OB-GYN specialists who regularly attend to patients from the United States, Canada, and other English-speaking countries.</p>

<h2>What Gynecological Services Are Available in Puerto Vallarta?</h2>
<p>Our gynecologists offer a full range of women's health services comparable to what you'd find in the US or Canada:</p>
<ul>
  <li><strong>Annual wellness exams</strong> — Pap smear, pelvic exam, breast exam</li>
  <li><strong>Prenatal care</strong> — Complete pregnancy monitoring, low and high-risk</li>
  <li><strong>3D and 4D ultrasound</strong> — In-office, no need to go to a hospital</li>
  <li><strong>Menopause and hormone management</strong> — HRT options, perimenopause</li>
  <li><strong>Fertility evaluation</strong> — Initial workup and low-complexity treatments</li>
  <li><strong>Endometriosis management</strong></li>
  <li><strong>Minimally invasive gynecologic surgery</strong></li>
  <li><strong>STI testing and treatment</strong></li>
  <li><strong>Intimate rejuvenation</strong> — CO2 fractional laser</li>
</ul>

<h2>Do the Doctors Speak English?</h2>
<p>According to surveys of Puerto Vallarta's medical community, approximately <strong>80% of doctors in the city are bilingual</strong> — a direct result of the large tourist and expat population. This is especially true in the Versalles medical district where Madeira Medical Group is located.</p>
<p>Our gynecologists — Dr. Mario Alejandro Rendón Acosta, Dr. Rogelio Ríos Esparza, and Dra. Devy Michelle Ojeda Castellón — all communicate effectively in English and are experienced working with international patients.</p>

<h2>How Much Does a Gynecologist Visit Cost in Puerto Vallarta?</h2>
<p>Consultation fees in Puerto Vallarta are significantly lower than US or Canadian rates, without compromising quality:</p>
<ul>
  <li><strong>Initial consultation:</strong> $800–$1,200 MXN (~$40–$60 USD)</li>
  <li><strong>3D/4D ultrasound:</strong> $1,200–$2,000 MXN (~$60–$100 USD)</li>
  <li><strong>Pap smear (with lab):</strong> $800–$1,500 MXN (~$40–$75 USD)</li>
  <li><strong>Annual wellness package:</strong> $2,500–$4,000 MXN (~$125–$200 USD)</li>
</ul>
<p>For context, an OB-GYN visit in the US without insurance averages $150–$300 before any procedures. Puerto Vallarta offers the same standard of care for a fraction of the cost.</p>

<h2>Do They Accept US or Canadian Insurance?</h2>
<p>Most private clinics in Puerto Vallarta do not directly bill US or Canadian insurance. However:</p>
<ul>
  <li>We provide detailed receipts and documentation for reimbursement claims</li>
  <li>Many travel insurance plans cover specialist visits in Mexico</li>
  <li>If you have <strong>Global Health Insurance</strong> or <strong>Cigna Global</strong>, check your out-of-network benefits</li>
  <li>Expats with Mexican residency often use <strong>IMSS</strong> for basic care and private specialists for more complex needs</li>
</ul>

<h2>What Should I Bring to My First Appointment?</h2>
<ul>
  <li>Photo ID (passport or driver's license)</li>
  <li>Any relevant medical history or previous test results</li>
  <li>A list of current medications</li>
  <li>Date of your last menstrual period (if applicable)</li>
  <li>Previous Pap smear results if you have them</li>
</ul>
<p>Our receptionist speaks English and can help you complete intake forms.</p>

<h2>Prenatal Care in Puerto Vallarta: What to Know</h2>
<p>Many expat couples and Mexican residents choose Madeira Medical Group for prenatal monitoring. Key points:</p>
<ul>
  <li>3D and 4D ultrasound equipment is available directly in the office</li>
  <li>High-risk pregnancies are managed in coordination with Hospital CMQ, the leading private hospital in Puerto Vallarta</li>
  <li>All prenatal labs can be processed through <strong>BIOS LAB</strong>, located in the same building</li>
  <li>Delivery requires transfer to a hospital — our doctors have privileges at CMQ</li>
</ul>

<h2>Frequently Asked Questions</h2>
<details>
  <summary><strong>Can I get a Pap smear during a vacation in Puerto Vallarta?</strong></summary>
  <p>Absolutely. It's a quick procedure done in the office. Results from our in-house lab (BIOS LAB) are typically ready within 24–48 hours. Many medical tourists combine wellness checkups with their vacation.</p>
</details>
<details>
  <summary><strong>Is it safe to get gynecological care in Mexico?</strong></summary>
  <p>Yes. Our physicians are board-certified by the Consejo Mexicano de Ginecología y Obstetricia. The facilities are regulated by COFEPRIS (Mexico's equivalent of the FDA) and the clinic follows international sterilization protocols.</p>
</details>
<details>
  <summary><strong>Can I access my results online?</strong></summary>
  <p>Lab results from BIOS LAB are delivered digitally. We can send results by email or WhatsApp for follow-up care if you've returned home.</p>
</details>
<details>
  <summary><strong>What if I need a specialist referral?</strong></summary>
  <p>Our gynecologists work alongside the full team of specialists at Madeira Medical Group — including endocrinology, internal medicine, and nutrition — for integrated women's health care.</p>
</details>
    `,
  },

  // ── ART-20 ─────────────────────────────────────────────────
  {
    slug: "healthcare-retirees-puerto-vallarta-geriatric-doctor",
    lang: "en",
    title: "Healthcare for Retirees in Puerto Vallarta: Finding a Geriatric Doctor Who Speaks English",
    description:
      "A practical guide for American and Canadian retirees in Puerto Vallarta on geriatric care, finding an English-speaking geriatrist, and what to expect. By Dr. Adriana Turrubiates.",
    publishedAt: "2026-05-05",
    doctorSlug: "dra_adriana_turrubiates_flores",
    specialtySlug: "geriatra-puerto-vallarta",
    keywords: [
      "geriatric doctor Puerto Vallarta",
      "elderly care Puerto Vallarta expat",
      "geriatra Puerto Vallarta",
      "retiring Puerto Vallarta healthcare",
      "English speaking doctor elderly Puerto Vallarta",
    ],
    coverImage: "/doctors/dra_adriana_turrubiates_flores.jpg",
    content: `
<h2>Puerto Vallarta Has One of Mexico's Largest Retiree Communities — And the Healthcare to Match</h2>
<p>With over 10,000 American and Canadian retirees calling Puerto Vallarta home — and thousands more spending winters here — the city has developed a medical infrastructure that rivals many mid-size US cities. Yet one of the most underserved areas has been <strong>geriatric care</strong>: specialized medicine focused on the unique health needs of adults over 65.</p>
<p>At <strong>Madeira Medical Group</strong> in the Versalles medical district, <strong>Dra. Adriana Turrubiates Flores</strong> offers comprehensive geriatric care for both local and international patients — in Spanish and English.</p>

<h2>What Is a Geriatrician and Why Do You Need One?</h2>
<p>A geriatrician is a physician who specializes in the care of older adults, particularly those with multiple chronic conditions, cognitive changes, or complex medication regimens. A <strong>general practitioner or internist</strong> can handle routine care, but a geriatrician is specifically trained to:</p>
<ul>
  <li>Evaluate and manage <strong>cognitive decline, dementia, and Alzheimer's</strong> early</li>
  <li>Address <strong>polypharmacy</strong> — the risks of taking 5+ medications simultaneously</li>
  <li>Prevent and manage <strong>falls and fractures</strong></li>
  <li>Provide <strong>comprehensive preoperative evaluations</strong> for older patients</li>
  <li>Coordinate care across multiple specialists</li>
  <li>Support <strong>palliative care</strong> and end-of-life planning</li>
  <li>Screen for <strong>malnutrition and sleep disorders</strong> common in elderly patients</li>
</ul>

<h2>Signs It's Time to See a Geriatrician</h2>
<p>Many retirees wait until a crisis to seek specialized elderly care. Early evaluation is far more effective. Consider a geriatric consultation if your loved one (or you) experiences:</p>
<ul>
  <li>Memory lapses that are becoming more frequent</li>
  <li>Two or more falls in the past year</li>
  <li>Taking 5 or more medications and unsure about interactions</li>
  <li>Unexplained weight loss or changes in appetite</li>
  <li>Increasing difficulty with daily activities (cooking, driving, managing finances)</li>
  <li>Chronic pain that is poorly controlled</li>
  <li>Mood changes, depression, or social withdrawal</li>
</ul>

<h2>What to Expect at a Geriatric Consultation at Madeira Medical Group</h2>
<p>Dra. Turrubiates conducts a thorough initial evaluation that goes well beyond a standard checkup:</p>
<ol>
  <li><strong>Comprehensive medical history</strong> — including all medications, supplements, and prior conditions</li>
  <li><strong>Memory and cognitive screening</strong> — standardized tests to establish a baseline (Mini-Mental, MoCA)</li>
  <li><strong>Functional assessment</strong> — evaluating independence in daily activities</li>
  <li><strong>Fall risk evaluation</strong> — balance, strength, and medications that increase risk</li>
  <li><strong>Electrocardiogram</strong> — available directly in the office</li>
  <li><strong>Coordination with BIOS LAB</strong> — blood work including thyroid, metabolic panel, and vitamin levels associated with cognitive health</li>
</ol>
<p>The initial appointment typically takes <strong>60–90 minutes</strong>. Follow-up visits are shorter.</p>

<h2>Healthcare Costs for Retirees in Puerto Vallarta vs. the US</h2>
<p>One of the most compelling reasons retirees choose Puerto Vallarta is the dramatic difference in healthcare costs:</p>
<ul>
  <li><strong>Geriatric consultation:</strong> $1,000–$1,800 MXN (~$50–$90 USD) vs. $200–$350 in the US</li>
  <li><strong>Comprehensive blood panel (BIOS LAB):</strong> $800–$1,500 MXN vs. $300–$600 in the US</li>
  <li><strong>Electrocardiogram:</strong> Included in geriatric consultation</li>
  <li><strong>Medications:</strong> Most brand-name drugs are available generically in Mexico at 60–80% less than US prices</li>
</ul>

<h2>Navigating the Healthcare System as a Foreign Retiree</h2>
<p>Here's what you need to know about healthcare options in Puerto Vallarta:</p>
<h3>Private clinics (like Madeira Medical Group)</h3>
<p>Best for specialist care, no wait times, English-speaking staff. You pay out of pocket and request documentation for insurance reimbursement.</p>
<h3>IMSS (Social Security)</h3>
<p>If you have legal residency in Mexico and are enrolled in IMSS (<em>Instituto Mexicano del Seguro Social</em>), you can access subsidized care. The voluntary enrollment fee for retirees is approximately $500–$700 USD per year — among the best deals in global healthcare.</p>
<h3>Hospital CMQ</h3>
<p>Puerto Vallarta's leading private hospital for emergencies, surgeries, and overnight care. Most Madeira Medical Group specialists have hospital privileges at CMQ.</p>
<h3>Medical evacuation insurance</h3>
<p>For complex conditions, consider a MedJet or Global Rescue membership ($300–$500/year) that covers emergency repatriation.</p>

<h2>Tips for Expat Retirees New to Puerto Vallarta Healthcare</h2>
<ul>
  <li>Bring a complete list of your medications with generic names — Mexican pharmacies carry most drugs but under different brand names</li>
  <li>Get a full blood panel done soon after arriving — establishes a baseline for local doctors</li>
  <li>Join the <strong>Puerto Vallarta Expats Facebook group</strong> (30,000+ members) — it's the best real-time resource for doctor recommendations</li>
  <li>The annual "Medical Matters" event in Puerto Vallarta lets you meet specialists in person</li>
  <li>WhatsApp is the standard communication channel for doctors in Mexico — save your doctor's number for quick questions</li>
</ul>

<h2>Frequently Asked Questions</h2>
<details>
  <summary><strong>Does Dra. Turrubiates speak English?</strong></summary>
  <p>Yes. Dra. Turrubiates communicates effectively in English and has extensive experience with international patients from the US and Canada.</p>
</details>
<details>
  <summary><strong>Can I bring my elderly parent who is visiting Puerto Vallarta for a consultation?</strong></summary>
  <p>Absolutely. We regularly see patients who are visiting for a few weeks and want a comprehensive evaluation while they're here. We can provide full documentation in English for your home physician.</p>
</details>
<details>
  <summary><strong>What's the difference between a geriatrician and an internist?</strong></summary>
  <p>An internist manages adult diseases broadly. A geriatrician has additional specialized training specifically in the physiology, pharmacology, and psychosocial aspects of aging. For patients over 75 or with multiple conditions, a geriatrician provides more targeted care.</p>
</details>
<details>
  <summary><strong>Can you help coordinate care with my doctor back home?</strong></summary>
  <p>Yes. We can provide consultation summaries, lab results, and treatment plans in English that your home physician can review. Many of our patients maintain their care in both countries.</p>
</details>
    `,
  },
];

// Helper: find posts by language
export function getPostsByLang(lang: string): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.lang === lang);
}

// Helper: find a single post
export function getPost(slug: string, lang: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug && p.lang === lang);
}
