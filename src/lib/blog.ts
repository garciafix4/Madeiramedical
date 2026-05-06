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

  // ── ART-01 ─────────────────────────────────────────────────
  {
    slug: "dental-implants-puerto-vallarta-cost-2026",
    lang: "en",
    title: "Dental Implants in Puerto Vallarta: 2026 Complete Cost Guide",
    description: "How much do dental implants cost in Puerto Vallarta in 2026? Real prices, brand comparisons, savings vs. USA, and what's included. By implant specialist Dra. Jessica Nitardy.",
    publishedAt: "2026-05-07",
    doctorSlug: "dra_jessica_nitardy",
    specialtySlug: "implantes-dentales-puerto-vallarta",
    keywords: ["dental implants Puerto Vallarta cost","dental implants Puerto Vallarta 2026","dental implants Mexico price","affordable dental implants Puerto Vallarta"],
    coverImage: "/doctors/dra_jessica_nitardy.jpg",
    content: `
<h2>Why Patients From the US and Canada Choose Puerto Vallarta for Dental Implants</h2>
<p>A single dental implant in the United States costs between <strong>$3,900 and $5,500 USD</strong> — and that's just one tooth. In Puerto Vallarta, the same procedure with a top-tier implant brand runs <strong>$900–$1,800 USD</strong>. That's a savings of 60–75%, with no compromise on materials or technique.</p>
<p>At <strong>Madeira Medical Group</strong> in Versalles, Puerto Vallarta, our implant specialist <strong>Dra. Jessica Nitardy</strong> places implants using internationally recognized brands (Straumann, Nobel Biocare, Neodent) in a fully equipped surgical suite. This is not a dental tourism mill — it's a certified specialist practice with individualized treatment planning.</p>

<h2>2026 Dental Implant Price Guide — Puerto Vallarta</h2>
<ul>
  <li><strong>Single implant (implant + abutment + crown):</strong> $900–$1,800 USD</li>
  <li><strong>All-on-4 per arch:</strong> $9,000–$12,500 USD</li>
  <li><strong>All-on-6 per arch:</strong> $11,000–$15,000 USD</li>
  <li><strong>Bone graft (if needed):</strong> $400–$800 USD</li>
  <li><strong>Sinus lift:</strong> $700–$1,200 USD</li>
  <li><strong>Full-mouth rehabilitation (upper + lower):</strong> $18,000–$25,000 USD</li>
  <li><strong>Initial consultation + X-rays + 3D scan:</strong> $80–$150 USD</li>
</ul>
<p>Compared to US prices, most patients save enough to cover flights, hotel, and several days of vacation — with money left over.</p>

<h2>What's Included in the Price?</h2>
<p>At Madeira Medical Group, your implant quote includes the implant fixture, abutment, and final crown. We use a 3D cone beam CT scan for precise placement planning — this is standard here, not an upsell. Anesthesia, surgical materials, and post-op care are included.</p>
<p>What may add cost: bone grafting if bone density is insufficient, sinus lifts for upper posterior implants, and temporary restorations during the healing phase.</p>

<h2>How Many Trips Do You Need?</h2>
<p>For a straightforward single implant: <strong>2 trips</strong>. First visit (2–3 days): extraction if needed, implant placement, temporary restoration. Second visit (3–4 months later, 2–3 days): final crown placement.</p>
<p>For All-on-4 cases, many patients receive a fixed temporary bridge on the same day as surgery, then return for final porcelain or zirconia prosthetics after osseointegration (3–5 months).</p>

<h2>Is It Safe to Get Dental Implants in Puerto Vallarta?</h2>
<p>Safety depends entirely on the provider, not the country. Key things to verify: the surgeon holds a <em>cédula profesional</em> in Oral and Maxillofacial Surgery or Implantology, implant brands are traceable (Straumann, Nobel, Zimmer, Neodent — not generic no-name fixtures), and the clinic uses digital imaging for treatment planning.</p>
<p>Dra. Jessica Nitardy specializes in <strong>Implant Prosthetics and Advanced Aesthetic Rehabilitation</strong>. All implants placed at Madeira Medical Group come with documentation, brand certificates, and a structured follow-up protocol.</p>

<h2>Frequently Asked Questions</h2>
<details>
  <summary><strong>Can I get dental implants in one trip to Puerto Vallarta?</strong></summary>
  <p>In most cases, no. Implants require osseointegration (the implant fusing with your jawbone), which takes 3–5 months. However, you can receive a temporary restoration on day one and return for your final crown later. Some All-on-4 cases allow same-day teeth.</p>
</details>
<details>
  <summary><strong>What implant brands do you use?</strong></summary>
  <p>We work primarily with Straumann, Nobel Biocare, and Neodent — the same Swiss and international brands used in top US clinics. You receive brand documentation with every implant.</p>
</details>
<details>
  <summary><strong>Does my US dental insurance cover implants in Mexico?</strong></summary>
  <p>Most US dental plans don't cover implants at all — in Mexico or at home. However, some international plans and dental discount plans do reimburse a portion. We provide detailed invoices and treatment records in English for insurance submission.</p>
</details>
<details>
  <summary><strong>How do I get started?</strong></summary>
  <p>Send us a panoramic X-ray or recent dental scan via WhatsApp and we'll give you a preliminary assessment and cost estimate before you book travel. No commitment required.</p>
</details>
`,
  },

  // ── ART-02 ─────────────────────────────────────────────────
  {
    slug: "all-on-4-dental-implants-puerto-vallarta",
    lang: "en",
    title: "All-on-4 Dental Implants in Puerto Vallarta: Everything US Patients Need to Know",
    description: "Complete guide to All-on-4 dental implants in Puerto Vallarta. Real costs, procedure steps, how many trips, what to eat during recovery — by Dra. Karla Figueroa.",
    publishedAt: "2026-05-07",
    doctorSlug: "dra_karla_marcela_figueroa_aguilar",
    specialtySlug: "implantes-dentales-puerto-vallarta",
    keywords: ["All-on-4 Puerto Vallarta","All-on-4 dental implants Mexico","full mouth implants Puerto Vallarta","teeth in a day Puerto Vallarta"],
    coverImage: "/doctors/dra_karla_marcela_figueroa_aguilar.jpg",
    content: `
<h2>What Is All-on-4 and Who Is It For?</h2>
<p>All-on-4 is a full-arch dental restoration technique that replaces all teeth on an upper or lower jaw using just four strategically placed implants. It's designed for patients who have lost most or all of their teeth — or are about to — and want a permanent, fixed solution instead of removable dentures.</p>
<p>The name refers to the four implants, but the result is a full set of fixed teeth that look, feel, and function like natural teeth. At <strong>Madeira Medical Group</strong> in Puerto Vallarta, <strong>Dra. Karla Marcela Figueroa Aguilar</strong> specializes in advanced restorative dentistry including full-arch rehabilitation.</p>

<h2>All-on-4 Cost in Puerto Vallarta vs. USA</h2>
<ul>
  <li><strong>All-on-4 per arch (Puerto Vallarta):</strong> $9,000–$12,500 USD</li>
  <li><strong>All-on-6 per arch (Puerto Vallarta):</strong> $11,000–$15,000 USD</li>
  <li><strong>Full mouth (upper + lower All-on-4):</strong> $18,000–$22,000 USD</li>
  <li><strong>Same procedure in the USA:</strong> $25,000–$55,000 USD per arch</li>
</ul>
<p>Most patients save $20,000–$40,000 on a full-mouth case — enough to cover multiple trips to Puerto Vallarta with significant money remaining.</p>

<h2>Step-by-Step: What Happens During Your All-on-4 Treatment</h2>
<ol>
  <li><strong>Pre-op consultation:</strong> 3D cone beam CT scan, treatment planning, temporary bridge fabrication.</li>
  <li><strong>Surgery day:</strong> Any remaining teeth are extracted, four implants are placed, and a fixed temporary bridge is attached — all in one appointment. You leave with teeth.</li>
  <li><strong>Healing phase (3–5 months):</strong> Osseointegration occurs at home. Soft diet, follow-up via WhatsApp.</li>
  <li><strong>Second trip:</strong> Final zirconia or porcelain bridge is fitted, adjusted, and permanently fixed.</li>
</ol>

<h2>How Many Trips to Puerto Vallarta?</h2>
<p>Most All-on-4 patients need <strong>two trips</strong>: the surgical visit (4–6 days) and the final restoration visit (3–4 days). Some patients combine the second visit with a vacation since Puerto Vallarta is a world-class beach destination.</p>

<h2>Frequently Asked Questions</h2>
<details>
  <summary><strong>Can I eat normally after All-on-4?</strong></summary>
  <p>With your temporary bridge, you'll follow a soft diet for 2–3 months. After the final bridge is placed, you can eat virtually anything — steak, apples, corn on the cob.</p>
</details>
<details>
  <summary><strong>What if I need bone grafting?</strong></summary>
  <p>All-on-4 is specifically designed to minimize the need for bone grafting by angling the posterior implants. However, if bone volume is insufficient, grafting may add $400–$800 USD and a few months to the timeline.</p>
</details>
<details>
  <summary><strong>How long do All-on-4 implants last?</strong></summary>
  <p>With proper care, the implants last a lifetime. The prosthetic bridge typically lasts 10–15 years before needing replacement — just as with any dental prosthetic.</p>
</details>
`,
  },

  // ── ART-03 ─────────────────────────────────────────────────
  {
    slug: "implantes-dentales-puerto-vallarta-precio-2026",
    lang: "es",
    title: "Implantes Dentales en Puerto Vallarta: Guía de Precios 2026",
    description: "¿Cuánto cuestan los implantes dentales en Puerto Vallarta en 2026? Precios reales, marcas, comparativa con CDMX y qué incluye el presupuesto. Por Dra. Saraí Rivera.",
    publishedAt: "2026-05-08",
    doctorSlug: "dra_sarai_bethzabee_rivera_ramos",
    specialtySlug: "implantes-dentales-puerto-vallarta",
    keywords: ["implantes dentales Puerto Vallarta precio","implantes dentales Puerto Vallarta 2026","implante dental costo Puerto Vallarta","implante dental Versalles Puerto Vallarta"],
    coverImage: "/doctors/dra_sarai_bethzabee_rivera_ramos.jpg",
    content: `
<h2>¿Cuánto cuesta un implante dental en Puerto Vallarta?</h2>
<p>El costo de un implante dental en Puerto Vallarta varía según la complejidad del caso, la marca del implante y si se requieren procedimientos adicionales como injertos óseos. En términos generales, un implante completo (fijación + pilar + corona) cuesta entre <strong>$18,000 y $35,000 MXN</strong> ($900–$1,800 USD), lo que representa un ahorro de hasta 60% frente a los precios en la Ciudad de México o Guadalajara.</p>
<p>En <strong>Madeira Medical Group</strong>, ubicado en Versalles, la <strong>Dra. Saraí Bethzabee Rivera Ramos</strong> ofrece soluciones de implantología con marcas internacionales en un consultorio equipado con tecnología de diagnóstico digital.</p>

<h2>Tabla de precios — Implantes Dentales Puerto Vallarta 2026</h2>
<ul>
  <li><strong>Implante unitario (fijación + pilar + corona):</strong> $18,000–$35,000 MXN</li>
  <li><strong>All-on-4 por arcada:</strong> $180,000–$240,000 MXN</li>
  <li><strong>Injerto óseo (si se requiere):</strong> $8,000–$15,000 MXN</li>
  <li><strong>Elevación de seno maxilar:</strong> $12,000–$22,000 MXN</li>
  <li><strong>Consulta inicial + radiografía panorámica:</strong> $800–$1,500 MXN</li>
</ul>

<h2>¿Qué incluye el precio?</h2>
<p>El presupuesto incluye el implante (fijación de titanio), el pilar protésico y la corona definitiva. La tomografía 3D para planificación es estándar en nuestra clínica. La anestesia local y los materiales quirúrgicos están incluidos.</p>
<p>Lo que puede agregar costo: injertos óseos si hay pérdida ósea significativa, elevación de seno para implantes posteriores superiores, y extracciones si el diente todavía está presente.</p>

<h2>¿Cuántas citas necesito?</h2>
<p>Para un implante estándar se requieren al menos <strong>2 visitas</strong>: la primera para la colocación del implante (con restauración provisional) y la segunda, 3–5 meses después, para la corona definitiva. En casos de implantes inmediatos con corona provisional, puedes salir el mismo día con el diente.</p>

<h2>Preguntas frecuentes</h2>
<details>
  <summary><strong>¿El implante dental duele?</strong></summary>
  <p>La cirugía se realiza bajo anestesia local. La mayoría de los pacientes reportan molestias leves los primeros 2–3 días, manejables con analgésicos comunes. No es el procedimiento doloroso que muchos imaginan.</p>
</details>
<details>
  <summary><strong>¿Cuánto duran los implantes dentales?</strong></summary>
  <p>El implante de titanio puede durar toda la vida si se mantiene buena higiene. La corona cerámica tiene una vida útil de 15–20 años. Es la solución más permanente para reemplazar un diente.</p>
</details>
<details>
  <summary><strong>¿Tengo que hacer dieta especial después?</strong></summary>
  <p>Durante las primeras 2 semanas se recomienda dieta blanda (papillas, sopas, alimentos suaves). Después puedes ir reintroduciendo alimentos normales progresivamente.</p>
</details>
`,
  },

  // ── ART-04 ─────────────────────────────────────────────────
  {
    slug: "smile-design-puerto-vallarta",
    lang: "en",
    title: "Smile Design in Puerto Vallarta: What to Expect and Real Costs",
    description: "Everything you need to know about smile design (diseño de sonrisa) in Puerto Vallarta — veneers, composites, pricing, and how to choose your specialist. By Dra. Karla Figueroa.",
    publishedAt: "2026-05-08",
    doctorSlug: "dra_karla_marcela_figueroa_aguilar",
    specialtySlug: "implantes-dentales-puerto-vallarta",
    keywords: ["smile design Puerto Vallarta","veneers Puerto Vallarta","cosmetic dentistry Puerto Vallarta","dental veneers Mexico cost"],
    coverImage: "/doctors/dra_karla_marcela_figueroa_aguilar.jpg",
    content: `
<h2>What Is Smile Design?</h2>
<p>Smile design (or <em>diseño de sonrisa</em>) is a comprehensive cosmetic dentistry process that improves the appearance of your smile through a combination of techniques: porcelain veneers, composite veneers, whitening, gum contouring, and sometimes crowns or orthodontics. The goal is a harmonious, natural-looking smile that fits your facial proportions and personal aesthetic.</p>
<p>At <strong>Madeira Medical Group</strong>, <strong>Dra. Karla Marcela Figueroa Aguilar</strong> specializes in Advanced Restorative and Cosmetic Dentistry, combining digital smile design software with high-quality porcelain materials.</p>

<h2>Smile Design Options and Costs in Puerto Vallarta</h2>
<ul>
  <li><strong>Porcelain veneers (per tooth):</strong> $500–$900 USD</li>
  <li><strong>Composite veneers (per tooth):</strong> $150–$300 USD</li>
  <li><strong>Full smile (8–10 veneers):</strong> $4,000–$8,000 USD</li>
  <li><strong>Professional whitening:</strong> $180–$350 USD</li>
  <li><strong>Gum contouring (laser):</strong> $300–$600 USD</li>
  <li><strong>Digital Smile Design consultation:</strong> $100–$200 USD (often deducted from treatment)</li>
</ul>
<p>Compared to US prices ($1,000–$2,500 per porcelain veneer), Puerto Vallarta offers savings of 50–70% with equivalent or better quality porcelain.</p>

<h2>Porcelain vs. Composite Veneers: Which Is Right for You?</h2>
<p><strong>Porcelain veneers</strong> are ultra-thin ceramic shells bonded to the front of teeth. They are stain-resistant, highly durable (10–20 years), and mimic the translucency of natural enamel. They require minimal tooth reduction and look the most natural.</p>
<p><strong>Composite veneers</strong> are resin-based and applied directly to the tooth in one visit (no lab needed). They cost less and are reversible, but are less durable and more prone to staining over time (5–7 year lifespan).</p>

<h2>The Smile Design Process</h2>
<ol>
  <li><strong>Consultation and digital mock-up:</strong> Photos, 3D scan, digital preview of your new smile.</li>
  <li><strong>Trial smile:</strong> A temporary composite mock-up placed on your teeth so you can see and feel the result before committing.</li>
  <li><strong>Preparation:</strong> Minimal enamel reduction for veneers.</li>
  <li><strong>Lab fabrication:</strong> 3–5 days for porcelain veneers.</li>
  <li><strong>Final bonding:</strong> Veneers cemented and adjusted for bite and aesthetics.</li>
</ol>

<h2>Frequently Asked Questions</h2>
<details>
  <summary><strong>Can I get veneers in one trip to Puerto Vallarta?</strong></summary>
  <p>Composite veneers: yes, same day. Porcelain veneers: you need at least 5–7 days in Puerto Vallarta (prep + lab + bonding). Many patients plan their visit around a vacation.</p>
</details>
<details>
  <summary><strong>Will my veneers look fake?</strong></summary>
  <p>In experienced hands, no. The key is choosing the right size, shape, and shade that complements your facial features. Dra. Figueroa uses digital smile design and trial smiles before any irreversible step.</p>
</details>
`,
  },

  // ── ART-05 ─────────────────────────────────────────────────
  {
    slug: "invisalign-puerto-vallarta-price-process",
    lang: "en",
    title: "Invisalign in Puerto Vallarta: Prices, Process & Starting as a Visitor",
    description: "Can you start Invisalign in Puerto Vallarta and continue at home? Yes — here's how it works, what it costs, and what to expect. By orthodontist Dra. Mar Palacios.",
    publishedAt: "2026-05-09",
    doctorSlug: "dra_mar_palacios",
    specialtySlug: "ortodoncista-invisalign-puerto-vallarta",
    keywords: ["Invisalign Puerto Vallarta","Invisalign Puerto Vallarta price","start Invisalign Mexico continue at home","Invisalign expat Puerto Vallarta"],
    coverImage: "/doctors/dra_mar_palacios.jpg",
    content: `
<h2>Invisalign in Puerto Vallarta: The Expat and Visitor's Complete Guide</h2>
<p>One of the most common questions in Puerto Vallarta expat groups is: <em>"Can I start Invisalign here and continue treatment back in the US or Canada?"</em> The short answer is yes — and it's more practical than you might think.</p>
<p>At <strong>Madeira Medical Group</strong>, <strong>Dra. Mar Palacios</strong> is a certified Invisalign provider offering full treatment planning and ongoing remote monitoring for international patients.</p>

<h2>Invisalign Cost in Puerto Vallarta</h2>
<ul>
  <li><strong>Invisalign Lite (minor corrections, up to 14 aligners):</strong> $2,200–$3,000 USD</li>
  <li><strong>Invisalign Moderate (up to 26 aligners):</strong> $3,000–$4,000 USD</li>
  <li><strong>Invisalign Full (complex cases, unlimited aligners):</strong> $4,000–$5,500 USD</li>
  <li><strong>Invisalign in the USA:</strong> $4,500–$9,000 USD</li>
</ul>
<p>Savings range from 40–60%, making Puerto Vallarta one of the most cost-effective destinations to start or complete Invisalign treatment.</p>

<h2>How Does Remote Invisalign Follow-Up Work?</h2>
<p>Invisalign treatment is uniquely suited to international patients because most of the treatment happens at home, wearing your aligners. Here's the typical process:</p>
<ol>
  <li><strong>Initial visit (Puerto Vallarta, 2–3 days):</strong> 3D oral scan (iTero), photos, Invisalign case submission, treatment plan approval.</li>
  <li><strong>Aligner pickup (Puerto Vallarta, 1–2 days):</strong> Your aligners arrive (2–4 weeks after submission). You receive all trays + detailed instructions.</li>
  <li><strong>At home:</strong> Change aligners every 1–2 weeks. WhatsApp check-ins with Dra. Palacios every 4–6 weeks via photos.</li>
  <li><strong>Mid-treatment check (optional):</strong> Visit Puerto Vallarta for attachments or refinements if needed.</li>
  <li><strong>Finish:</strong> Final check + retainers, either in Puerto Vallarta or at a local dentist near you.</li>
</ol>

<h2>Am I a Good Candidate for Invisalign?</h2>
<p>Invisalign treats crowding, spacing, overbite, underbite, and crossbite. It works best for mild to moderate cases. Complex skeletal issues may require traditional braces. A free consultation with Dra. Palacios — even via WhatsApp with photos — can give you an initial assessment before your visit.</p>

<h2>Frequently Asked Questions</h2>
<details>
  <summary><strong>How long does Invisalign take?</strong></summary>
  <p>Mild cases: 6–12 months. Moderate cases: 12–18 months. Full cases: 18–24 months. You wear each tray 20–22 hours/day.</p>
</details>
<details>
  <summary><strong>What if I need adjustments while I'm back home?</strong></summary>
  <p>Minor refinements are handled remotely via photo monitoring. If physical adjustments are needed, Dra. Palacios coordinates with a local orthodontist or waits for your next visit to Puerto Vallarta.</p>
</details>
<details>
  <summary><strong>Can teenagers get Invisalign?</strong></summary>
  <p>Yes — Invisalign Teen is specifically designed for adolescent patients and includes compliance indicators and replacement aligners.</p>
</details>
`,
  },

  // ── ART-06 ─────────────────────────────────────────────────
  {
    slug: "invisalign-vs-brackets-puerto-vallarta",
    lang: "es",
    title: "Invisalign vs. Brackets en Puerto Vallarta: ¿Cuál te conviene y cuánto cuesta?",
    description: "Comparativa completa entre Invisalign y brackets en Puerto Vallarta: precios, ventajas, desventajas y para quién funciona cada opción. Por Dra. Mar Palacios.",
    publishedAt: "2026-05-09",
    doctorSlug: "dra_mar_palacios",
    specialtySlug: "ortodoncista-invisalign-puerto-vallarta",
    keywords: ["Invisalign vs brackets Puerto Vallarta","ortodoncista Puerto Vallarta","Invisalign precio Puerto Vallarta","brackets Puerto Vallarta adultos"],
    coverImage: "/doctors/dra_mar_palacios.jpg",
    content: `
<h2>La pregunta más común en ortodoncia: ¿Invisalign o brackets?</h2>
<p>Si estás considerando alinear tus dientes en Puerto Vallarta, probablemente ya te has preguntado qué opción es mejor para ti. La respuesta depende de tu caso clínico, tu presupuesto y tu estilo de vida — no hay una respuesta universal.</p>
<p>La <strong>Dra. Mar Palacios</strong>, ortodoncista certificada en Madeira Medical Group (Versalles, Puerto Vallarta), te explica las diferencias reales.</p>

<h2>Comparativa: Invisalign vs. Brackets</h2>
<table>
  <thead><tr><th>Característica</th><th>Invisalign</th><th>Brackets metálicos/cerámicos</th></tr></thead>
  <tbody>
    <tr><td>Visibilidad</td><td>Transparentes, casi invisibles</td><td>Visibles (metálicos) o discretos (cerámicos)</td></tr>
    <tr><td>Comodidad</td><td>Sin aristas metálicas, removibles</td><td>Pueden causar rozaduras al inicio</td></tr>
    <tr><td>Higiene</td><td>Se retiran para comer y cepillarse</td><td>Requieren técnica especial de limpieza</td></tr>
    <tr><td>Eficacia en casos complejos</td><td>Moderada</td><td>Alta</td></tr>
    <tr><td>Duración estimada</td><td>12–18 meses</td><td>18–24 meses</td></tr>
    <tr><td>Precio en Puerto Vallarta</td><td>$45,000–$100,000 MXN</td><td>$22,000–$55,000 MXN</td></tr>
  </tbody>
</table>

<h2>¿Cuándo es mejor Invisalign?</h2>
<ul>
  <li>Adultos que no quieren que se noten los aparatos</li>
  <li>Pacientes con apiñamiento leve o moderado</li>
  <li>Personas que viajan frecuentemente y necesitan flexibilidad</li>
  <li>Quienes practican deportes de contacto o tocan instrumentos de viento</li>
</ul>

<h2>¿Cuándo son mejores los brackets?</h2>
<ul>
  <li>Casos complejos (mordidas muy cerradas, rotaciones severas, problemas esqueléticos)</li>
  <li>Pacientes que prefieren no depender de su disciplina para usar los alineadores</li>
  <li>Niños y adolescentes en etapa de crecimiento activo</li>
  <li>Presupuesto más ajustado</li>
</ul>

<h2>Preguntas frecuentes</h2>
<details>
  <summary><strong>¿Los adultos pueden usar brackets?</strong></summary>
  <p>Absolutamente. No hay límite de edad para la ortodoncia. Los brackets cerámicos son una opción muy popular en adultos por su estética. También existen los brackets linguales (detrás de los dientes) para máxima discreción.</p>
</details>
<details>
  <summary><strong>¿Cuánto tiempo hay que usar los retenedores después?</strong></summary>
  <p>De por vida, por las noches. Los retenedores son tan importantes como el tratamiento — sin ellos, los dientes tienden a volver a su posición original.</p>
</details>
`,
  },

  // ── ART-07 ─────────────────────────────────────────────────
  {
    slug: "edad-ortodoncista-ninos-puerto-vallarta",
    lang: "es",
    title: "¿A qué edad debe ver al ortodoncista tu hijo? Guía para padres en Puerto Vallarta",
    description: "La Academia Americana de Ortodoncia recomienda la primera visita a los 7 años. Aquí te explicamos por qué, qué evalúa el ortodoncista y cuándo iniciar tratamiento. Dra. Mar Palacios.",
    publishedAt: "2026-05-10",
    doctorSlug: "dra_mar_palacios",
    specialtySlug: "ortodoncista-invisalign-puerto-vallarta",
    keywords: ["ortodoncista niños Puerto Vallarta","ortopedia maxilofacial niños Puerto Vallarta","primera visita ortodoncista edad","ortodoncia infantil Puerto Vallarta"],
    coverImage: "/doctors/dra_mar_palacios.jpg",
    content: `
<h2>La primera cita con el ortodoncista: más temprano de lo que piensas</h2>
<p>Muchos padres esperan a que todos los dientes permanentes hayan salido para llevar a su hijo al ortodoncista — pero ese momento ya puede ser tarde para aprovechar el crecimiento del niño. La <strong>Asociación Americana de Ortodoncia (AAO)</strong> y la <strong>Asociación Mexicana de Ortodoncia</strong> recomiendan la primera evaluación ortodóntica a los <strong>6–7 años</strong>.</p>
<p>En <strong>Madeira Medical Group</strong>, la <strong>Dra. Mar Palacios</strong> evalúa a niños desde los 6 años para detectar problemas de crecimiento que son mucho más fáciles de corregir a edad temprana.</p>

<h2>¿Por qué a los 7 años?</h2>
<p>A los 6–7 años ya han erupcionado los primeros molares permanentes y los incisivos centrales. Con estos dientes presentes, el ortodoncista puede evaluar:</p>
<ul>
  <li>Si hay problemas de espacio (apiñamiento o diastemas)</li>
  <li>La relación de los molares (mordida Clase I, II o III)</li>
  <li>Hábitos nocivos como respiración bucal o succión del pulgar</li>
  <li>Asimetrías en el desarrollo de los maxilares</li>
  <li>Retención de dientes de leche que bloquean permanentes</li>
</ul>

<h2>Ortopedia Maxilofacial: tratamiento preventivo antes de la ortodoncia</h2>
<p>Si se detectan problemas de desarrollo óseo, la <strong>ortopedia maxilofacial</strong> puede corregirlos mientras los huesos todavía están en crecimiento activo (entre 7 y 12 años). Los aparatos ortopédicos (expansores palatinos, bionator, etc.) dirigen el crecimiento del maxilar y la mandíbula — algo que después de la pubertad requeriría cirugía.</p>
<p>Intervenir a tiempo puede simplificar enormemente el tratamiento de ortodoncia posterior o incluso evitarlo.</p>

<h2>Señales de que tu hijo necesita evaluación ahora mismo</h2>
<ul>
  <li>Respira por la boca habitualmente</li>
  <li>Se chupa el dedo o usa chupón después de los 3 años</li>
  <li>Los dientes superiores e inferiores no cierran correctamente</li>
  <li>Le cuesta masticar o prefiere siempre alimentos blandos</li>
  <li>Tiene dientes muy apiñados o grandes espacios entre ellos</li>
  <li>Los dientes de leche tardaron mucho en caer o todavía no han caído</li>
</ul>

<h2>Preguntas frecuentes</h2>
<details>
  <summary><strong>¿A los 7 años ya van a ponerle brackets?</strong></summary>
  <p>Generalmente no. La evaluación a los 7 años es para detectar problemas. La mayoría de los niños son monitoreados sin tratamiento hasta los 10–12 años. Solo casos específicos requieren intervención temprana (Fase I).</p>
</details>
<details>
  <summary><strong>¿La consulta de valoración tiene costo?</strong></summary>
  <p>En Madeira Medical Group ofrecemos valoraciones ortodónticas pediátricas. Contáctanos por WhatsApp para agendar y conocer el costo de la consulta inicial.</p>
</details>
`,
  },

  // ── ART-09 ─────────────────────────────────────────────────
  {
    slug: "facial-harmonization-puerto-vallarta-expat-guide",
    lang: "en",
    title: "Facial Harmonization in Puerto Vallarta: The Complete Expat Guide",
    description: "What is facial harmonization, what does it cost in USD, is it safe, and how do you find a qualified doctor in Puerto Vallarta? By Dr. Marco Rodríguez.",
    publishedAt: "2026-05-10",
    doctorSlug: "dr_marco_antonio_rodriguez_perez",
    specialtySlug: "armonizacion-facial-puerto-vallarta",
    keywords: ["facial harmonization Puerto Vallarta","facial harmonization Mexico","botox fillers Puerto Vallarta expat","aesthetic medicine Puerto Vallarta"],
    coverImage: "/doctors/dr_marco_antonio_rodriguez_perez.jpg",
    content: `
<h2>Facial Harmonization: The Treatment Expats Are Discovering in Puerto Vallarta</h2>
<p>Facial harmonization is a term that's deeply embedded in Latin American aesthetic medicine but still relatively unknown in the US and Canada. It refers to a customized combination of non-surgical procedures — dermal fillers, botulinum toxin, collagen biostimulators, and threads — designed to bring balance and proportion to facial features without surgery.</p>
<p>At <strong>Madeira Medical Group</strong> in Versalles, Puerto Vallarta, <strong>Dr. Marco Antonio Rodríguez Pérez</strong> specializes in aesthetic medicine and facial harmonization for both local and international patients.</p>

<h2>What's Included in a Facial Harmonization Treatment?</h2>
<p>A harmonization plan is fully customized. Common components:</p>
<ul>
  <li><strong>Hyaluronic acid fillers:</strong> Chin definition, lip volume, cheekbone enhancement, under-eye hollows.</li>
  <li><strong>Botulinum toxin (Botox/Dysport):</strong> Forehead lines, frown lines, crow's feet, jaw slimming (masseter).</li>
  <li><strong>Collagen biostimulators (Sculptra, Radiesse):</strong> Gradual volume restoration and skin quality improvement.</li>
  <li><strong>PDO threads:</strong> Non-surgical lift of the jawline, neck, or brow.</li>
  <li><strong>Bichectomy:</strong> Minimally invasive removal of Bichat fat pads to define the face.</li>
</ul>

<h2>Facial Harmonization Costs in Puerto Vallarta (USD)</h2>
<ul>
  <li><strong>Botox per area:</strong> $130–$230 USD</li>
  <li><strong>Hyaluronic acid (per syringe):</strong> $200–$450 USD</li>
  <li><strong>Full harmonization package:</strong> $600–$1,500 USD</li>
  <li><strong>Collagen biostimulator per session:</strong> $400–$800 USD</li>
  <li><strong>PDO thread lift:</strong> $500–$1,200 USD</li>
</ul>
<p>Compared to US prices (Botox: $400–$600 per area; fillers: $800–$1,400 per syringe), Puerto Vallarta offers 50–65% savings with the same product brands (Juvederm, Restylane, Botox/Allergan).</p>

<h2>Is Facial Harmonization Safe in Puerto Vallarta?</h2>
<p>Safety depends on who performs the treatment, not the location. Always verify: the practitioner is a licensed <em>médico</em> (not a nurse, esthetician, or beautician), products have COFEPRIS registration (Mexico's FDA equivalent), and the clinic is a medical office — not a spa or beauty salon.</p>
<p>Dr. Rodríguez performs all procedures in a certified medical office at Madeira Medical Group, using internationally registered products with full traceability.</p>

<h2>Frequently Asked Questions</h2>
<details>
  <summary><strong>How long do results last?</strong></summary>
  <p>Botox: 4–6 months. Hyaluronic acid fillers: 8–18 months depending on the area. Biostimulators: up to 2 years. Results vary by individual metabolism.</p>
</details>
<details>
  <summary><strong>Can I do this during a short vacation?</strong></summary>
  <p>Yes. Most procedures take 30–60 minutes. Minor swelling or redness resolves within 24–48 hours. We recommend scheduling your treatment at the beginning of your stay to allow for any minor swelling to subside.</p>
</details>
<details>
  <summary><strong>Do I need a consultation first?</strong></summary>
  <p>Yes — and it's worth it. A facial analysis allows Dr. Rodríguez to design a plan that looks natural and balanced, not overdone. Contact us via WhatsApp for a photo-based pre-consultation before your trip.</p>
</details>
`,
  },

  // ── ART-10 ─────────────────────────────────────────────────
  {
    slug: "botox-puerto-vallarta-precios-medico-certificado",
    lang: "es",
    title: "Bótox en Puerto Vallarta: Precios Reales y Cómo Elegir un Médico Certificado",
    description: "Guía completa de bótox en Puerto Vallarta: precios actualizados 2026, cuánto dura, riesgos de los centros no médicos y por qué importa quién lo aplica. Dra. Esli Pérez.",
    publishedAt: "2026-05-11",
    doctorSlug: "dra_esli_perez_castro",
    specialtySlug: "medicina-estetica-puerto-vallarta",
    keywords: ["botox Puerto Vallarta precio","bótox Puerto Vallarta médico certificado","toxina botulínica Puerto Vallarta","botox Versalles Puerto Vallarta"],
    coverImage: "/doctors/dra_esli_perez_castro.jpg",
    content: `
<h2>Bótox en Puerto Vallarta: lo que nadie te cuenta</h2>
<p>En Puerto Vallarta hay desde spas de playa que ofrecen bótox a $500 pesos hasta consultorios médicos especializados con marcas certificadas internacionalmente. La diferencia de precio es real — pero también lo es la diferencia en seguridad y resultado.</p>
<p>La <strong>Dra. Esli Pérez Castro</strong>, especialista en Medicina Estética y Antienvejecimiento en <strong>Madeira Medical Group</strong> (Versalles, Puerto Vallarta), explica lo que necesitas saber antes de tu próxima aplicación.</p>

<h2>Precios del bótox en Puerto Vallarta 2026</h2>
<ul>
  <li><strong>Bótox por área (frente, entrecejo, patas de gallo):</strong> $2,500–$4,500 MXN</li>
  <li><strong>Tratamiento de 3 áreas (paquete):</strong> $6,500–$10,000 MXN</li>
  <li><strong>Bótox masétero (bruxismo o estilización facial):</strong> $4,000–$6,000 MXN</li>
  <li><strong>Bótox hiperhidrosis (axilas):</strong> $7,000–$12,000 MXN</li>
  <li><strong>Marcas utilizadas:</strong> Botox (Allergan), Dysport, Xeomin — con registro COFEPRIS</li>
</ul>

<h2>¿Por qué importa quién aplica el bótox?</h2>
<p>La toxina botulínica es un medicamento de prescripción médica. En México, solo los médicos con cédula profesional pueden legalmente prescribirla y aplicarla. Sin embargo, en la práctica informal proliferan aplicaciones por esteticistas, enfermeras y hasta personas sin formación médica.</p>
<p>Los riesgos de una mala aplicación incluyen: ptosis palpebral (párpado caído), asimetría facial, resultado exagerado ("cara congelada") y, en casos raros, complicaciones más serias por migración del producto.</p>
<p>En Madeira Medical Group, la Dra. Esli Pérez aplica la toxina en un consultorio médico certificado, con productos con número de lote verificable y protocolo de seguimiento post-tratamiento.</p>

<h2>¿Cuánto dura el bótox?</h2>
<p>Los efectos se notan entre <strong>3 y 7 días</strong> después de la aplicación y alcanzan su máximo efecto a las 2 semanas. La duración varía entre <strong>4 y 6 meses</strong> dependiendo del metabolismo individual, la dosis aplicada y la zona tratada. Con aplicaciones regulares, muchos pacientes notan que los resultados duran más.</p>

<h2>Preguntas frecuentes</h2>
<details>
  <summary><strong>¿El bótox duele?</strong></summary>
  <p>Las molestias son mínimas. Se utilizan agujas muy finas y la aplicación tarda menos de 15 minutos. La mayoría de los pacientes lo describen como pequeños piquetes apenas perceptibles.</p>
</details>
<details>
  <summary><strong>¿Puedo seguir con mi vida normal después?</strong></summary>
  <p>Sí. Solo se recomienda no acostarse boca abajo las primeras 4 horas, no hacer ejercicio intenso el mismo día y evitar el calor directo (sauna, baño de sol prolongado) durante 24 horas.</p>
</details>
<details>
  <summary><strong>¿El bótox me va a cambiar la cara?</strong></summary>
  <p>Un bótox bien aplicado mantiene la naturalidad de tu expresión. El objetivo no es congelar el rostro sino suavizar las líneas dinámicas que más te molestan, conservando movimiento facial.</p>
</details>
`,
  },

  // ── ART-11 ─────────────────────────────────────────────────
  {
    slug: "botox-fillers-puerto-vallarta-expats",
    lang: "en",
    title: "Botox and Fillers in Puerto Vallarta: What Expats and Tourists Need to Know",
    description: "Everything the expat community needs to know about getting Botox and dermal fillers in Puerto Vallarta — safety, costs, how to find a qualified doctor. Dr. Edgar Hernández.",
    publishedAt: "2026-05-11",
    doctorSlug: "dr_edgar_martin_hernandez_jimenez",
    specialtySlug: "medicina-estetica-puerto-vallarta",
    keywords: ["botox fillers Puerto Vallarta","botox Puerto Vallarta expat","dermal fillers Puerto Vallarta","anti-aging treatment Puerto Vallarta"],
    coverImage: "/doctors/dr_edgar_martin_hernandez_jimenez.jpg",
    content: `
<h2>Why Puerto Vallarta's Expat Community Trusts Local Aesthetic Medicine</h2>
<p>Puerto Vallarta has one of Mexico's largest expat communities — an estimated 10,000+ Americans and Canadians living full or part-time in the area. Many have discovered that high-quality aesthetic medicine is not only available locally, but significantly more affordable than back home.</p>
<p><strong>Dr. Edgar Martín Hernández Jiménez</strong> at <strong>Madeira Medical Group</strong> specializes in aesthetic medicine and anti-aging treatments, working regularly with international patients.</p>

<h2>Botox and Filler Prices in Puerto Vallarta (USD)</h2>
<ul>
  <li><strong>Botox per area:</strong> $130–$230 USD (vs. $400–$600 in the US)</li>
  <li><strong>Full face Botox (3 areas):</strong> $330–$550 USD</li>
  <li><strong>Hyaluronic acid filler (per syringe):</strong> $200–$450 USD (vs. $700–$1,400 in the US)</li>
  <li><strong>Lip filler:</strong> $220–$400 USD</li>
  <li><strong>Under-eye filler (tear trough):</strong> $350–$500 USD</li>
  <li><strong>Chin or jawline filler:</strong> $300–$600 USD</li>
</ul>

<h2>How to Find a Qualified Provider in Puerto Vallarta</h2>
<p>The most important step is verifying credentials. Ask to see:</p>
<ul>
  <li><strong>Cédula profesional:</strong> Mexico's medical license number, verifiable online at cedulaprofesional.sep.gob.mx</li>
  <li><strong>Product traceability:</strong> Botox should be from Allergan (AbbVie), Dysport from Ipsen, or Xeomin from Merz — with lot numbers available</li>
  <li><strong>Medical setting:</strong> Treatments should be performed in a medical office, not a beauty salon or spa</li>
</ul>
<p>At Madeira Medical Group, all procedures are performed by licensed physicians in a clinical setting with documented materials.</p>

<h2>Tips for Getting Botox on Vacation</h2>
<ul>
  <li>Schedule your appointment for the <strong>first 2 days</strong> of your stay — minor swelling (especially with fillers) resolves in 24–48 hours</li>
  <li>Avoid alcohol 24 hours before and after treatment</li>
  <li>Stay out of intense sun and avoid saunas for 48 hours post-treatment</li>
  <li>Botox takes 3–7 days to show full effect — results will appear after you return home</li>
</ul>

<h2>Frequently Asked Questions</h2>
<details>
  <summary><strong>Does heat affect Botox results?</strong></summary>
  <p>In the first 24 hours, intense heat (sauna, prolonged sun exposure) can theoretically increase diffusion of the toxin. After 24 hours, Puerto Vallarta's warm climate has no effect on your results.</p>
</details>
<details>
  <summary><strong>What if I have a reaction after I'm back home?</strong></summary>
  <p>Serious reactions to properly administered Botox and fillers are very rare. Dr. Hernández provides WhatsApp follow-up for all patients and can advise remotely if any concerns arise.</p>
</details>
`,
  },

  // ── ART-12 ─────────────────────────────────────────────────
  {
    slug: "terapia-exosomas-puerto-vallarta",
    lang: "es",
    title: "Terapia con Exosomas en Puerto Vallarta: qué es, para qué sirve y cómo funciona",
    description: "Guía completa sobre la terapia con exosomas en Puerto Vallarta: qué son los exosomas, diferencias con células madre, usos clínicos y quién es candidato. Dra. Esli Pérez Castro.",
    publishedAt: "2026-05-12",
    doctorSlug: "dra_esli_perez_castro",
    specialtySlug: "medicina-regenerativa-puerto-vallarta",
    keywords: ["exosomas terapia Puerto Vallarta","medicina regenerativa Puerto Vallarta","terapia exosomas precio Puerto Vallarta","exosomas qué es"],
    coverImage: "/doctors/dra_esli_perez_castro.jpg",
    content: `
<h2>¿Qué son los exosomas y por qué se habla tanto de ellos?</h2>
<p>Los exosomas son pequeñas vesículas extracelulares (bolsitas nanométricas) que las células del cuerpo usan para comunicarse entre sí, transportando proteínas, ARN y factores de crecimiento. En medicina regenerativa, los exosomas derivados de células madre mesenquimales se utilizan de manera terapéutica para estimular la reparación tisular, reducir la inflamación y promover la regeneración celular.</p>
<p>En <strong>Madeira Medical Group</strong>, la <strong>Dra. Esli Pérez Castro</strong>, especialista en Medicina Regenerativa, ofrece terapias con exosomas para una amplia variedad de indicaciones clínicas.</p>

<h2>¿En qué se diferencian los exosomas de las células madre?</h2>
<p>Las terapias con <strong>células madre</strong> implican la administración de células vivas que se injertarán en el organismo — procedimiento más complejo, regulado estrictamente y de mayor costo. Los <strong>exosomas</strong>, en cambio, son los mensajeros que las células madre secretan: no son células vivas, son señales biológicas. Esto los hace más seguros (no hay riesgo de rechazo), más estables, más fáciles de administrar y más accesibles económicamente.</p>

<h2>¿Para qué se usan los exosomas en medicina?</h2>
<ul>
  <li><strong>Envejecimiento y antienvejecimiento:</strong> Mejora de calidad de piel, recuperación de luminosidad, reducción de arrugas finas.</li>
  <li><strong>Caída de cabello (alopecia):</strong> Estimulación del folículo piloso y regeneración del cuero cabelludo.</li>
  <li><strong>Dolores articulares y lesiones deportivas:</strong> Reducción de inflamación, regeneración de cartílago.</li>
  <li><strong>Recuperación post-quirúrgica:</strong> Aceleración de la cicatrización y reducción de inflamación.</li>
  <li><strong>Enfermedades inflamatorias crónicas:</strong> Inmunomodulación.</li>
</ul>

<h2>¿Quién es candidato?</h2>
<p>Los exosomas son adecuados para adultos que buscan regeneración tisular sin someterse a procedimientos quirúrgicos. Son especialmente populares entre pacientes de 35–65 años interesados en antienvejecimiento avanzado y pacientes con dolores articulares crónicos que no han respondido bien a tratamientos convencionales.</p>

<h2>Preguntas frecuentes</h2>
<details>
  <summary><strong>¿Cuántas sesiones se necesitan?</strong></summary>
  <p>Depende de la indicación. Para antienvejecimiento estético, generalmente se recomiendan 2–3 sesiones con un intervalo de 4–6 semanas. Para aplicaciones ortopédicas, el protocolo varía según el diagnóstico.</p>
</details>
<details>
  <summary><strong>¿Los exosomas son seguros?</strong></summary>
  <p>Los exosomas de origen certificado (células mesenquimales de cordón umbilical o placenta, con control de calidad y ausencia de contaminantes) tienen un perfil de seguridad muy favorable. La clave está en la procedencia y calidad del producto.</p>
</details>
`,
  },

  // ── ART-13 ─────────────────────────────────────────────────
  {
    slug: "bioidentical-hormone-therapy-puerto-vallarta",
    lang: "en",
    title: "Bioidentical Hormone Therapy in Puerto Vallarta: What to Know Before You Go",
    description: "Complete guide to bioidentical hormone replacement therapy (BHRT) in Puerto Vallarta for expat women and men — what it treats, costs, and what to expect. Dra. Esli Pérez Castro.",
    publishedAt: "2026-05-12",
    doctorSlug: "dra_esli_perez_castro",
    specialtySlug: "medicina-regenerativa-puerto-vallarta",
    keywords: ["bioidentical hormone therapy Puerto Vallarta","BHRT Puerto Vallarta","hormone replacement therapy Mexico expat","anti-aging hormone therapy Puerto Vallarta"],
    coverImage: "/doctors/dra_esli_perez_castro.jpg",
    content: `
<h2>Why Expats in Puerto Vallarta Are Turning to Bioidentical HRT</h2>
<p>Among the thousands of Americans and Canadians who retire or live part-time in Puerto Vallarta, bioidentical hormone replacement therapy (BHRT) has become one of the most sought-after medical services. The reasons are practical: BHRT is significantly more affordable than in the US and Canada, and the growing medical community in Versalles includes physicians with formal training in anti-aging and regenerative medicine.</p>
<p><strong>Dra. Esli Pérez Castro</strong> at <strong>Madeira Medical Group</strong> specializes in regenerative and aesthetic medicine, including comprehensive hormonal optimization for both women and men.</p>

<h2>What Is Bioidentical Hormone Therapy?</h2>
<p>BHRT uses hormones that are chemically identical to those your body produces naturally — estradiol, progesterone, testosterone, DHEA, and others — derived from plant sources (usually yam or soy). Unlike synthetic hormones used in traditional HRT, bioidentical hormones are designed to match your body's own molecular structure precisely.</p>
<p>BHRT is used to address symptoms of perimenopause, menopause, andropause (male hormone decline), thyroid dysfunction, and adrenal fatigue.</p>

<h2>Symptoms That Respond Well to BHRT</h2>
<ul>
  <li>Hot flashes, night sweats, sleep disruption</li>
  <li>Fatigue, brain fog, difficulty concentrating</li>
  <li>Mood changes, anxiety, depression</li>
  <li>Low libido, vaginal dryness</li>
  <li>Weight gain, especially abdominal fat</li>
  <li>Hair thinning, dry skin</li>
  <li>In men: low testosterone symptoms (low energy, muscle loss, mood changes)</li>
</ul>

<h2>What Does BHRT Cost in Puerto Vallarta?</h2>
<ul>
  <li><strong>Initial consultation + comprehensive hormone panel:</strong> $150–$300 USD</li>
  <li><strong>Monthly BHRT (oral/transdermal):</strong> $80–$200 USD/month</li>
  <li><strong>Pellet therapy (3–6 month duration):</strong> $350–$700 USD per insertion</li>
  <li><strong>Follow-up hormone testing (every 3–6 months):</strong> $80–$150 USD</li>
</ul>
<p>In the US, comparable BHRT programs typically cost $200–$500/month. Puerto Vallarta offers significant savings, especially for long-term treatment.</p>

<h2>The BHRT Process at Madeira Medical Group</h2>
<ol>
  <li><strong>Comprehensive intake consultation</strong> covering symptoms, medical history, and goals</li>
  <li><strong>Hormone panel blood work</strong> (estradiol, progesterone, testosterone, thyroid, cortisol, DHEA)</li>
  <li><strong>Individualized protocol design</strong> — dosing, delivery method (pellets, creams, oral, injections)</li>
  <li><strong>Ongoing monitoring</strong> via telehealth and periodic labs</li>
</ol>

<h2>Frequently Asked Questions</h2>
<details>
  <summary><strong>Is BHRT safe?</strong></summary>
  <p>When properly prescribed and monitored, BHRT has an excellent safety profile for most patients. The key is individualized dosing based on labs, symptoms, and medical history — not a one-size-fits-all approach. Dra. Pérez reviews each case comprehensively before prescribing.</p>
</details>
<details>
  <summary><strong>Can I continue my treatment remotely after returning home?</strong></summary>
  <p>Yes. Dra. Pérez works with many expat patients via telehealth for ongoing follow-up. Labs can be drawn locally and shared digitally for prescription adjustments.</p>
</details>
`,
  },

  // ── ART-15 ─────────────────────────────────────────────────
  {
    slug: "ultrasonido-3d-4d-embarazo-puerto-vallarta",
    lang: "es",
    title: "Ultrasonido 3D y 4D en Puerto Vallarta: Guía completa para mamás",
    description: "¿Cuándo hacerse el ultrasonido 3D o 4D durante el embarazo? Semanas ideales, diferencias entre tecnologías y dónde realizarlo en Puerto Vallarta. Dra. Devy Ojeda.",
    publishedAt: "2026-05-13",
    doctorSlug: "dra_devy_michelle_ojeda_castellon",
    specialtySlug: "ginecologo-puerto-vallarta",
    keywords: ["ultrasonido 3D 4D Puerto Vallarta","ultrasonido embarazo Puerto Vallarta","ultrasonido 4D precio Puerto Vallarta","ginecóloga embarazo Puerto Vallarta"],
    coverImage: "/doctors/dra_devy_michelle_ojeda_castellon.jpg",
    content: `
<h2>Ultrasonido 3D y 4D: más que una foto, una ventana al desarrollo de tu bebé</h2>
<p>El ultrasonido obstétrico ha evolucionado enormemente. El ultrasonido 2D tradicional sigue siendo la herramienta diagnóstica principal, pero el <strong>ultrasonido 3D</strong> (imágenes tridimensionales estáticas) y el <strong>4D</strong> (imágenes tridimensionales en movimiento en tiempo real) ofrecen una experiencia completamente diferente: puedes ver el rostro de tu bebé, sus expresiones, cómo mueve las manos y responde a estímulos.</p>
<p>En <strong>Madeira Medical Group</strong>, la <strong>Dra. Devy Michelle Ojeda Castellón</strong>, ginecóloga y obstetra, realiza ultrasonidos 3D y 4D en consultorio, sin necesidad de trasladarte a un hospital.</p>

<h2>¿Cuándo es el mejor momento para el ultrasonido 3D/4D?</h2>
<p>La semana ideal para obtener las mejores imágenes es entre las <strong>26 y 32 semanas de embarazo</strong>. En este rango:</p>
<ul>
  <li>El bebé tiene suficiente grasa subcutánea para que su piel se vea definida</li>
  <li>Todavía hay espacio suficiente de líquido amniótico alrededor del bebé para imágenes claras</li>
  <li>El bebé está suficientemente desarrollado para mostrar expresiones faciales</li>
</ul>
<p>Después de las 34 semanas, el bebé ocupa más espacio y hay menos líquido, lo que puede dificultar obtener buenas imágenes.</p>

<h2>Diferencia entre ultrasonido 2D, 3D y 4D</h2>
<ul>
  <li><strong>2D:</strong> Imágenes planas en escala de grises. Es el estándar diagnóstico para medir al bebé, evaluar la placenta y detectar anomalías.</li>
  <li><strong>3D:</strong> Imágenes tridimensionales estáticas del bebé. Permite ver el volumen y la forma del rostro.</li>
  <li><strong>4D:</strong> Video en tiempo real del bebé en 3D. Ves al bebé moverse, bostezar, sonreír o chuparse el dedo.</li>
  <li><strong>HD/5D:</strong> Tecnología más reciente con mayor resolución de imagen y modo HDlive que simula iluminación natural.</li>
</ul>

<h2>¿El ultrasonido 3D/4D reemplaza al ultrasonido de rutina?</h2>
<p>No. Los ultrasonidos 3D y 4D son complementarios, no sustitutos. El ultrasonido estructural de las 20 semanas (morfológico) sigue siendo la exploración de referencia para descartar malformaciones. El 3D/4D es principalmente emocional y puede mostrar algunos hallazgos adicionales.</p>

<h2>Preguntas frecuentes</h2>
<details>
  <summary><strong>¿El ultrasonido 3D/4D tiene algún riesgo para el bebé?</strong></summary>
  <p>No existe evidencia de riesgo cuando lo realiza un profesional médico con fines diagnósticos o de seguimiento. Los ultrasonidos disponibles en centros comerciales sin supervisión médica son los que generan preocupación por uso indiscriminado.</p>
</details>
<details>
  <summary><strong>¿Necesito beber agua antes del ultrasonido?</strong></summary>
  <p>Para ultrasonidos obstétricos en el segundo y tercer trimestre no se requiere preparación especial. En el primer trimestre, tener la vejiga moderadamente llena puede mejorar la visualización.</p>
</details>
`,
  },

  // ── ART-16 ─────────────────────────────────────────────────
  {
    slug: "menopause-management-puerto-vallarta",
    lang: "en",
    title: "Menopause Management in Puerto Vallarta: HRT Options for Expat Women",
    description: "A practical guide to managing perimenopause and menopause in Puerto Vallarta — HRT options, local specialists, costs, and what expat women need to know. Dr. Mario Rendón.",
    publishedAt: "2026-05-13",
    doctorSlug: "dr_mario_alejandro_rendon_acosta",
    specialtySlug: "ginecologo-puerto-vallarta",
    keywords: ["menopause treatment Puerto Vallarta","HRT Puerto Vallarta expat","perimenopause doctor Puerto Vallarta","menopause specialist Puerto Vallarta English"],
    coverImage: "/doctors/dr_mario_alejandro_rendon_acosta.jpg",
    content: `
<h2>Navigating Menopause as an Expat in Puerto Vallarta</h2>
<p>For the thousands of women over 45 who live in or visit Puerto Vallarta, managing perimenopause and menopause locally is not only possible — it's often a better experience than dealing with overwhelmed healthcare systems back home.</p>
<p><strong>Dr. Mario Alejandro Rendón Acosta</strong>, gynecologist-obstetrician at <strong>Madeira Medical Group</strong>, manages the full spectrum of menopausal care including hormone replacement therapy, non-hormonal options, and long-term wellness monitoring.</p>

<h2>Perimenopause vs. Menopause: Understanding the Difference</h2>
<p><strong>Perimenopause</strong> is the transition phase — usually beginning in the mid-40s — when estrogen levels start fluctuating and symptoms begin. Cycles become irregular; hot flashes, sleep disruption, and mood changes may appear. This phase can last 4–10 years.</p>
<p><strong>Menopause</strong> is defined as 12 consecutive months without a menstrual period. The average age is 51. Post-menopause, the focus shifts to long-term health: bone density, cardiovascular health, and quality of life.</p>

<h2>Hormone Replacement Therapy Options in Puerto Vallarta</h2>
<ul>
  <li><strong>Transdermal estradiol patches or gel:</strong> The preferred delivery route — bypasses liver metabolism, lower clot risk.</li>
  <li><strong>Micronized progesterone (Utrogestan):</strong> For women with an intact uterus; better safety profile than synthetic progestins.</li>
  <li><strong>Local vaginal estrogen:</strong> For vaginal dryness and urinary symptoms without significant systemic absorption.</li>
  <li><strong>Testosterone (low-dose):</strong> For libido, energy, and cognitive function in selected patients.</li>
  <li><strong>Bioidentical pellets:</strong> Subcutaneous pellets providing steady hormone levels for 3–6 months.</li>
</ul>

<h2>What Does Menopause Care Cost in Puerto Vallarta?</h2>
<ul>
  <li><strong>Initial gynecological consultation:</strong> $800–$1,200 MXN ($40–$60 USD)</li>
  <li><strong>Hormone panel (E2, FSH, LH, testosterone, thyroid):</strong> $1,200–$2,500 MXN ($60–$125 USD)</li>
  <li><strong>Monthly HRT medications:</strong> $500–$1,500 MXN depending on protocol</li>
</ul>

<h2>Frequently Asked Questions</h2>
<details>
  <summary><strong>Is HRT safe? I've heard conflicting things.</strong></summary>
  <p>The evidence has evolved significantly since the 2002 WHI study. Current guidelines indicate that for healthy women under 60 or within 10 years of menopause, HRT benefits generally outweigh risks. The type of hormone, dose, and delivery route matter enormously. Dr. Rendón individualizes each prescription based on your health profile and lab results.</p>
</details>
<details>
  <summary><strong>Can I get a prescription in Puerto Vallarta and fill it at home?</strong></summary>
  <p>Yes. Mexican prescriptions for hormone medications are accepted at US and Canadian pharmacies for many common products. Dr. Rendón can also provide detailed treatment notes for your home physician.</p>
</details>
`,
  },

  // ── ART-17 ─────────────────────────────────────────────────
  {
    slug: "hipotiroidismo-endocrinologo-puerto-vallarta",
    lang: "es",
    title: "Hipotiroidismo en Puerto Vallarta: Cuándo Ver al Endocrinólogo y Qué Esperar",
    description: "Si tienes hipotiroidismo o sospecha de problemas de tiroides en Puerto Vallarta, esta guía explica cuándo acudir al especialista, qué estudios pedir y cómo es el tratamiento. Dra. Lidia Moreno.",
    publishedAt: "2026-05-14",
    doctorSlug: "dra_lidia_ivonne_moreno_rodriguez",
    specialtySlug: "endocrinologo-puerto-vallarta",
    keywords: ["hipotiroidismo Puerto Vallarta","endocrinólogo tiroides Puerto Vallarta","tiroides especialista Puerto Vallarta","endocrinólogo Puerto Vallarta diabetes"],
    coverImage: "/doctors/dra_lidia_ivonne_moreno_rodriguez.jpg",
    content: `
<h2>El problema de tiroides más común: el hipotiroidismo</h2>
<p>El hipotiroidismo — cuando la glándula tiroides produce menos hormona de la necesaria — es una de las enfermedades endocrinas más frecuentes en México, especialmente en mujeres. Se estima que afecta al <strong>10–15% de las mujeres mayores de 35 años</strong>, aunque muchas no están diagnosticadas porque los síntomas son inespecíficos y se atribuyen al estrés o al envejecimiento.</p>
<p>La <strong>Dra. Lidia Ivonne Moreno Rodríguez</strong>, endocrinóloga en <strong>Madeira Medical Group</strong> (Versalles, Puerto Vallarta), se especializa en el manejo de enfermedades tiroideas, diabetes y trastornos hormonales en adultos.</p>

<h2>Síntomas de hipotiroidismo: cuándo sospechar</h2>
<ul>
  <li>Fatiga persistente que no mejora con descanso</li>
  <li>Aumento de peso sin cambio en la dieta</li>
  <li>Sensación de frío aunque los demás estén bien</li>
  <li>Piel seca, cabello frágil y pérdida de cabello</li>
  <li>Estreñimiento crónico</li>
  <li>Dificultad para concentrarse, lentitud mental</li>
  <li>Depresión o estado de ánimo bajo</li>
  <li>Menstruaciones irregulares o más abundantes</li>
  <li>Colesterol elevado sin causa aparente</li>
</ul>

<h2>¿Qué estudios necesito?</h2>
<p>El diagnóstico inicial requiere:</p>
<ul>
  <li><strong>TSH (hormona estimulante de tiroides):</strong> El estudio de primera línea. Si está elevada, indica hipotiroidismo.</li>
  <li><strong>T4 libre:</strong> Para confirmar el diagnóstico y evaluar la severidad.</li>
  <li><strong>Anticuerpos anti-TPO:</strong> Para detectar hipotiroidismo autoinmune (Hashimoto).</li>
  <li><strong>Ultrasonido de tiroides:</strong> Si se palpa nódulo o bocio.</li>
</ul>
<p>Estos estudios están disponibles en <strong>BIOS LAB</strong>, el laboratorio clínico dentro del complejo Madeira Medical Group.</p>

<h2>¿Cómo es el tratamiento?</h2>
<p>El tratamiento estándar es la levotiroxina sódica (T4 sintética), que se toma en ayunas cada mañana. La dosis se ajusta con base en los niveles de TSH. La mayoría de los pacientes se estabilizan en 2–3 meses y después solo necesitan control anual.</p>

<h2>Preguntas frecuentes</h2>
<details>
  <summary><strong>¿El hipotiroidismo tiene cura?</strong></summary>
  <p>En la mayoría de los casos (hipotiroidismo autoinmune de Hashimoto) es una condición crónica que requiere tratamiento de por vida, pero perfectamente controlable. Con la dosis correcta de levotiroxina, los pacientes llevan una vida completamente normal.</p>
</details>
<details>
  <summary><strong>¿Puedo tomar el medicamento de tiroides con mis otros medicamentos?</strong></summary>
  <p>La levotiroxina interactúa con algunos suplementos (calcio, hierro) y medicamentos. La Dra. Moreno revisa todas tus medicaciones actuales en la consulta para indicarte el horario de toma correcto.</p>
</details>
`,
  },

  // ── ART-18 ─────────────────────────────────────────────────
  {
    slug: "managing-diabetes-thyroid-expat-puerto-vallarta",
    lang: "en",
    title: "Managing Diabetes and Thyroid Issues as an Expat in Puerto Vallarta",
    description: "Practical guide for expats managing diabetes, hypothyroidism, or other chronic endocrine conditions while living in or visiting Puerto Vallarta. Dra. Lidia Moreno.",
    publishedAt: "2026-05-14",
    doctorSlug: "dra_lidia_ivonne_moreno_rodriguez",
    specialtySlug: "endocrinologo-puerto-vallarta",
    keywords: ["endocrinologist Puerto Vallarta","diabetes doctor Puerto Vallarta expat","thyroid specialist Puerto Vallarta English","chronic disease management Puerto Vallarta"],
    coverImage: "/doctors/dra_lidia_ivonne_moreno_rodriguez.jpg",
    content: `
<h2>Living With Chronic Conditions in Puerto Vallarta: What Expats Need to Know</h2>
<p>Thousands of Americans and Canadians who live in or visit Puerto Vallarta manage chronic endocrine conditions — diabetes, hypothyroidism, metabolic syndrome, adrenal disorders. The good news: Puerto Vallarta's medical community, particularly in the Versalles district, is well-equipped to provide ongoing specialist care at a fraction of US costs.</p>
<p><strong>Dra. Lidia Ivonne Moreno Rodríguez</strong>, endocrinologist at <strong>Madeira Medical Group</strong>, works regularly with international patients and communicates effectively in English.</p>

<h2>Diabetes Management in Puerto Vallarta</h2>
<p>Managing diabetes in Mexico involves a few practical considerations:</p>
<ul>
  <li><strong>Insulin availability:</strong> All common insulin brands (Humalog/lispro, Lantus/glargine, NovoLog) are available at pharmacies. Prices are significantly lower than in the US — often 70–80% less without insurance.</li>
  <li><strong>Metformin and other oral agents:</strong> Widely available and affordable.</li>
  <li><strong>GLP-1 agonists (Ozempic/semaglutide, Trulicity):</strong> Available in Mexico with prescription — often at 40–60% of US prices.</li>
  <li><strong>Continuous glucose monitors (CGM):</strong> Dexcom and Libre sensors available at pharmacies and online.</li>
</ul>

<h2>Transferring Your Care to Puerto Vallarta</h2>
<p>Bring documentation of your current management: recent labs (HbA1c, TSH, lipids, kidney function), current medications and doses, and any recent specialist notes. Dra. Moreno can review your case and provide continuity of care, prescribe locally available equivalents, and order monitoring labs through BIOS LAB on-site.</p>

<h2>Lab Costs in Puerto Vallarta</h2>
<ul>
  <li><strong>HbA1c (glycated hemoglobin):</strong> $250–$400 MXN ($12–$20 USD)</li>
  <li><strong>Fasting glucose + insulin:</strong> $200–$350 MXN ($10–$18 USD)</li>
  <li><strong>Complete metabolic panel:</strong> $400–$700 MXN ($20–$35 USD)</li>
  <li><strong>TSH + free T4:</strong> $350–$600 MXN ($17–$30 USD)</li>
</ul>

<h2>Frequently Asked Questions</h2>
<details>
  <summary><strong>Do I need to bring a referral to see an endocrinologist in Mexico?</strong></summary>
  <p>No. In Mexico you can see a specialist directly without a referral. You can book an appointment with Dra. Moreno via WhatsApp and be seen the same or next day in most cases.</p>
</details>
<details>
  <summary><strong>How does Mexico's climate affect blood sugar management?</strong></summary>
  <p>Heat and increased physical activity (common in Puerto Vallarta) can lower blood sugar. Staying hydrated is essential. Dra. Moreno advises all diabetic patients on adjustments for tropical climate, especially during the summer months.</p>
</details>
`,
  },

  // ── ART-19 ─────────────────────────────────────────────────
  {
    slug: "endocrinologia-pediatrica-puerto-vallarta",
    lang: "es",
    title: "Endocrinología Pediátrica en Puerto Vallarta: Señales de que tu Hijo Necesita un Especialista",
    description: "¿Cuándo llevar a tu hijo al endocrinólogo pediatra en Puerto Vallarta? Señales de alerta, condiciones más comunes y qué esperar en la consulta. Dra. Fernanda Sánchez.",
    publishedAt: "2026-05-15",
    doctorSlug: "dra_fernanda_sanchez",
    specialtySlug: "endocrinologo-puerto-vallarta",
    keywords: ["endocrinóloga pediátrica Puerto Vallarta","diabetes infantil Puerto Vallarta","problemas crecimiento niños Puerto Vallarta","endocrinólogo niños Puerto Vallarta"],
    coverImage: "/doctors/dra_fernanda_sanchez.jpg",
    content: `
<h2>¿Qué trata un endocrinólogo pediatra?</h2>
<p>La endocrinología pediátrica es la especialidad médica que se ocupa de los trastornos hormonales en niños y adolescentes — desde problemas de crecimiento y pubertad precoz hasta diabetes tipo 1 y obesidad infantil con componente metabólico.</p>
<p>La <strong>Dra. Fernanda Sánchez</strong>, endocrinóloga pediátrica en <strong>Madeira Medical Group</strong> (Versalles, Puerto Vallarta), atiende a niños desde el nacimiento hasta los 18 años con alteraciones del sistema endocrino.</p>

<h2>Señales de alerta en niños: cuándo consultar al endocrinólogo</h2>
<p><strong>Problemas de crecimiento:</strong></p>
<ul>
  <li>Tu hijo está muy por debajo (o muy por encima) de la curva de crecimiento para su edad</li>
  <li>Ha dejado de crecer o creció muy poco en el último año</li>
  <li>Hay una diferencia notable de estatura con sus compañeros de la misma edad</li>
</ul>
<p><strong>Pubertad anormal:</strong></p>
<ul>
  <li><strong>Pubertad precoz:</strong> Desarrollo de vello púbico, senos o genitales antes de los 8 años en niñas o 9 años en niños</li>
  <li><strong>Pubertad tardía:</strong> Ausencia de caracteres sexuales secundarios después de los 13 años en niñas o 14 en niños</li>
</ul>
<p><strong>Diabetes tipo 1 en niños — síntomas urgentes:</strong></p>
<ul>
  <li>Sed excesiva y orina muy frecuente</li>
  <li>Pérdida de peso sin explicación</li>
  <li>Fatiga extrema, irritabilidad</li>
  <li>Visión borrosa</li>
</ul>
<p><strong>Otros motivos de consulta:</strong> obesidad infantil con resistencia a la insulina, hipotiroidismo congénito o adquirido, hiperplasia suprarrenal congénita.</p>

<h2>¿Qué pasa en la consulta de endocrinología pediátrica?</h2>
<p>La primera consulta incluye historia clínica detallada (antecedentes familiares son muy importantes), exploración física completa con medición de talla, peso, estadio puberal (escala de Tanner) y, si se requiere, solicitud de estudios de laboratorio e imagen.</p>

<h2>Preguntas frecuentes</h2>
<details>
  <summary><strong>¿El pediatra puede manejar la diabetes tipo 1 de mi hijo o necesito endocrinólogo?</strong></summary>
  <p>La diabetes tipo 1 en niños requiere manejo por un endocrinólogo pediatra. El control es más complejo que en adultos porque las necesidades de insulina cambian constantemente con el crecimiento, la actividad física y la pubertad.</p>
</details>
<details>
  <summary><strong>Mi hijo es "bajito de estatura", ¿necesita hormona de crecimiento?</strong></summary>
  <p>No todos los niños de baja estatura necesitan hormona de crecimiento. La Dra. Sánchez evalúa si la causa es una deficiencia real de GH u otras causas tratables de manera diferente. La indicación de GH requiere estudios específicos y criterios bien definidos.</p>
</details>
`,
  },

  // ── ART-21 ─────────────────────────────────────────────────
  {
    slug: "cuando-llevar-adulto-mayor-geriatra-puerto-vallarta",
    lang: "es",
    title: "¿Cuándo Llevar a un Adulto Mayor con el Geriatra? Señales Clave",
    description: "Guía para hijos y cuidadores: cuándo es necesario un geriatra (y no solo el médico de familia) para un adulto mayor en Puerto Vallarta. Dra. Adriana Turrubiates.",
    publishedAt: "2026-05-15",
    doctorSlug: "dra_adriana_turrubiates_flores",
    specialtySlug: "geriatra-puerto-vallarta",
    keywords: ["geriatra Puerto Vallarta","atención adulto mayor Puerto Vallarta","Alzheimer demencia especialista Puerto Vallarta","médico adultos mayores Puerto Vallarta"],
    coverImage: "/doctors/dra_adriana_turrubiates_flores.jpg",
    content: `
<h2>El geriatra: el especialista del envejecimiento que muchas familias desconocen</h2>
<p>Muchas familias en Puerto Vallarta saben que existe el internista, el cardiólogo o el neurólogo — pero desconocen al <strong>geriatra</strong>: el especialista en el cuidado integral del adulto mayor. La diferencia es fundamental: mientras el médico general o internista trata enfermedades específicas, el geriatra evalúa al paciente anciano de manera global, considerando sus condiciones múltiples, sus medicamentos, su función cognitiva y su calidad de vida como un todo.</p>
<p>La <strong>Dra. Adriana Turrubiates Flores</strong>, geriatra certificada en <strong>Madeira Medical Group</strong> (Versalles, Puerto Vallarta), atiende a adultos mayores de la región y a pacientes retirados extranjeros.</p>

<h2>Señales de que un adulto mayor necesita evaluación geriátrica</h2>
<p><strong>Caídas frecuentes:</strong> Una caída puede parecer un accidente, pero en un adulto mayor puede reflejar problemas de equilibrio, debilidad muscular, mareos por medicación o deterioro cognitivo incipiente.</p>
<p><strong>Pérdida de memoria o confusión:</strong> Olvidar dónde dejó las llaves es normal; olvidar el nombre de sus hijos o perderse en su propio vecindario no lo es. El geriatra distingue el envejecimiento normal del deterioro cognitivo y la demencia.</p>
<p><strong>Pérdida de peso sin causa aparente:</strong> Puede indicar depresión, problemas dentales, dificultad para deglutir o enfermedades subyacentes.</p>
<p><strong>Polifarmacia (5 o más medicamentos):</strong> Las interacciones medicamentosas son la causa más prevenible de hospitalizaciones en adultos mayores. El geriatra revisa y racionaliza los tratamientos.</p>
<p><strong>Dependencia funcional creciente:</strong> Dificultad para bañarse solo, vestirse, preparar alimentos o manejar el hogar.</p>

<h2>La valoración geriátrica integral: qué incluye</h2>
<p>La consulta geriátrica no es solo "ver cómo está" — es un proceso sistemático que evalúa:</p>
<ul>
  <li>Estado cognitivo (Mini-Mental, MoCA)</li>
  <li>Funcionalidad (actividades básicas e instrumentales de la vida diaria)</li>
  <li>Riesgo de caídas y equilibrio</li>
  <li>Estado nutricional</li>
  <li>Estado de ánimo y bienestar psicológico</li>
  <li>Revisión completa de medicamentos</li>
  <li>Red de apoyo social y familiar</li>
</ul>

<h2>Preguntas frecuentes</h2>
<details>
  <summary><strong>¿El geriatra solo atiende a personas con Alzheimer?</strong></summary>
  <p>No. El geriatra atiende a cualquier persona mayor de 65 años (o mayor de 60 con múltiples condiciones crónicas). Las consultas más frecuentes son por polifarmacia, fragilidad, prevención de caídas y optimización de la salud en la vejez.</p>
</details>
<details>
  <summary><strong>Mi padre tiene médico internista, ¿para qué el geriatra?</strong></summary>
  <p>El internista trata enfermedades específicas. El geriatra ve al paciente como un todo y coordina la atención multidisciplinaria. Muchas veces trabajan en equipo, no como sustitutos.</p>
</details>
`,
  },

  // ── ART-22 ─────────────────────────────────────────────────
  {
    slug: "nutriologo-puerto-vallarta-primera-consulta",
    lang: "es",
    title: "Nutriólogo en Puerto Vallarta: Qué Esperar en tu Primera Consulta (con Análisis InBody)",
    description: "Guía para quien nunca ha ido al nutriólogo: qué pasa en la primera consulta, qué es el análisis de composición corporal InBody y cómo se diseña tu plan alimentario. Dra. Aylin Santana.",
    publishedAt: "2026-05-16",
    doctorSlug: "dra_aylin_santana_ortiz",
    specialtySlug: "nutriologo-puerto-vallarta",
    keywords: ["nutriólogo Puerto Vallarta","nutriólogo Puerto Vallarta precio","InBody análisis composición corporal Puerto Vallarta","nutricionista Puerto Vallarta pérdida de peso"],
    coverImage: "/doctors/dra_aylin_santana_ortiz.jpg",
    content: `
<h2>Tu primera consulta con la nutrióloga: sin dietas de hambre, sin milagros</h2>
<p>Si nunca has ido al nutriólogo, es probable que tengas ideas preconcebidas: que te van a dar una dieta restrictiva, que tendrás que dejar de comer todo lo que te gusta o que es solo para perder peso. La realidad es diferente — la nutriología clínica es una especialidad médica que adapta la alimentación a tu biología, tu estilo de vida y tus objetivos específicos.</p>
<p>La <strong>Dra. Aylin Santana Ortiz</strong>, nutrióloga en <strong>Madeira Medical Group</strong> (Versalles, Puerto Vallarta), trabaja con pacientes que buscan desde pérdida de peso hasta mejora del rendimiento deportivo, control de enfermedades crónicas y recuperación nutricional post-quirúrgica.</p>

<h2>¿Qué pasa en la primera consulta?</h2>
<ol>
  <li><strong>Historia clínica y nutricional:</strong> Antecedentes, enfermedades, medicamentos, hábitos de sueño y actividad física, historial de dietas previas.</li>
  <li><strong>Análisis de composición corporal (InBody):</strong> Ver detalle abajo.</li>
  <li><strong>Evaluación de hábitos alimentarios:</strong> Registro de 24 horas, frecuencias de consumo, patrones de alimentación.</li>
  <li><strong>Objetivos y plan inicial:</strong> Metas realistas en función de tus resultados y estilo de vida.</li>
  <li><strong>Plan alimentario personalizado:</strong> No es una dieta genérica de internet — es un plan diseñado para ti.</li>
</ol>

<h2>¿Qué es el análisis InBody?</h2>
<p>El <strong>InBody</strong> es un equipo de bioimpedancia eléctrica que en 45 segundos analiza tu composición corporal real:</p>
<ul>
  <li><strong>Porcentaje de grasa corporal</strong> (y su distribución: visceral vs. subcutánea)</li>
  <li><strong>Masa muscular</strong> (total y por segmento: brazos, tronco, piernas)</li>
  <li><strong>Agua corporal total e intracelular/extracelular</strong></li>
  <li><strong>Tasa metabólica basal</strong> (cuántas calorías consume tu cuerpo en reposo)</li>
  <li><strong>Índice de masa corporal y relación cintura-cadera</strong></li>
</ul>
<p>Esta información es mucho más valiosa que solo el peso en la báscula — dos personas del mismo peso pueden tener composiciones corporales completamente diferentes y necesitar estrategias nutricionales distintas.</p>

<h2>Preguntas frecuentes</h2>
<details>
  <summary><strong>¿Cuánto cuesta la consulta con nutriólogo en Puerto Vallarta?</strong></summary>
  <p>La consulta inicial con análisis InBody cuesta entre $600 y $900 MXN en Madeira Medical Group. Las consultas de seguimiento son más económicas. Contáctanos por WhatsApp para confirmar disponibilidad y costo actualizado.</p>
</details>
<details>
  <summary><strong>¿Cuántas consultas necesito?</strong></summary>
  <p>Para pérdida de peso, se recomienda seguimiento cada 2–4 semanas inicialmente. Para objetivos de mantenimiento o control de enfermedades crónicas, la frecuencia varía. La mayoría de los pacientes notan cambios en 4–6 semanas con adherencia al plan.</p>
</details>
`,
  },

  // ── ART-23 ─────────────────────────────────────────────────
  {
    slug: "nutrition-consultation-puerto-vallarta-expats",
    lang: "en",
    title: "Nutrition Consultation in Puerto Vallarta: A Guide for Expats and Health-Conscious Visitors",
    description: "Everything expats and visitors need to know about seeing a nutritionist in Puerto Vallarta — what's included, costs, body composition analysis, and how to book. Dra. Aylin Santana.",
    publishedAt: "2026-05-16",
    doctorSlug: "dra_aylin_santana_ortiz",
    specialtySlug: "nutriologo-puerto-vallarta",
    keywords: ["nutritionist Puerto Vallarta","dietitian Puerto Vallarta expat","nutrition consultation Puerto Vallarta","healthy eating Puerto Vallarta"],
    coverImage: "/doctors/dra_aylin_santana_ortiz.jpg",
    content: `
<h2>Nutrition Care in Puerto Vallarta: More Than You'd Expect</h2>
<p>Puerto Vallarta attracts health-conscious visitors and expats who want to maintain or improve their wellbeing while enjoying life in a beach destination. Clinical nutrition services in the Versalles medical district are sophisticated, affordable, and available without the waiting lists common in the US and Canada.</p>
<p><strong>Dra. Aylin Santana Ortiz</strong>, clinical nutritionist at <strong>Madeira Medical Group</strong>, works with international patients on weight management, chronic disease nutrition, sports nutrition, and post-surgical dietary recovery.</p>

<h2>What Does a Nutrition Consultation Include?</h2>
<ul>
  <li><strong>Full nutritional history</strong> — dietary habits, medical conditions, medications, lifestyle</li>
  <li><strong>InBody body composition analysis</strong> — body fat %, muscle mass, visceral fat, metabolic rate</li>
  <li><strong>Dietary assessment</strong> — caloric intake, nutrient deficiencies, eating patterns</li>
  <li><strong>Personalized meal plan</strong> — adapted to Puerto Vallarta's food environment (local markets, restaurants, foods available)</li>
  <li><strong>Supplement recommendations</strong> if needed</li>
</ul>

<h2>Nutrition Consultation Costs in Puerto Vallarta</h2>
<ul>
  <li><strong>Initial consultation + InBody analysis:</strong> $30–$45 USD</li>
  <li><strong>Follow-up consultations:</strong> $20–$30 USD</li>
  <li><strong>Sports nutrition package (4 sessions):</strong> $100–$150 USD</li>
</ul>

<h2>Common Reasons Expats See a Nutritionist in Puerto Vallarta</h2>
<ul>
  <li><strong>Weight management:</strong> Adjusting to a beach lifestyle, managing weight gained during relocation</li>
  <li><strong>Diabetes and metabolic syndrome:</strong> Dietary management alongside medical treatment</li>
  <li><strong>Heart health:</strong> Cholesterol and blood pressure optimization through diet</li>
  <li><strong>Digestive issues:</strong> Adjusting to Mexican food, managing IBS or food sensitivities</li>
  <li><strong>Healthy aging:</strong> Muscle preservation, bone health, anti-inflammatory eating patterns</li>
</ul>

<h2>Frequently Asked Questions</h2>
<details>
  <summary><strong>Can I get a nutrition consultation in English?</strong></summary>
  <p>Dra. Santana communicates in Spanish; however, the team at Madeira Medical Group assists with translation and all meal plans and documentation can be provided in English.</p>
</details>
<details>
  <summary><strong>Is it worth seeing a nutritionist for just a short visit to Puerto Vallarta?</strong></summary>
  <p>Absolutely. Even one consultation with an InBody analysis provides valuable baseline data and a meal framework you can take home. Many visitors book a single session as part of a health-focused trip.</p>
</details>
`,
  },

  // ── ART-24 ─────────────────────────────────────────────────
  {
    slug: "english-speaking-therapist-puerto-vallarta",
    lang: "en",
    title: "Finding an English-Speaking Therapist in Puerto Vallarta: Your Options Explained",
    description: "A practical guide for expats and visitors looking for mental health support in English in Puerto Vallarta — what's available, costs, and how to book. Dra. Sindy Castillo.",
    publishedAt: "2026-05-17",
    doctorSlug: "dra_sindy_adriana_castillo_vera",
    specialtySlug: "psicologo-puerto-vallarta",
    keywords: ["therapist Puerto Vallarta English","psychologist Puerto Vallarta expat","mental health Puerto Vallarta English speaking","therapy Puerto Vallarta"],
    coverImage: "/doctors/dra_sindy_adriana_castillo_vera.jpg",
    content: `
<h2>Mental Health Support in Puerto Vallarta: Better Access Than You Think</h2>
<p>Finding a therapist in English is one of the most frequently asked questions in Puerto Vallarta's expat community. The demand is real — relocation stress, relationship challenges, grief, anxiety, and depression don't pause because you moved to paradise. The good news: quality mental health care in English is available in Puerto Vallarta.</p>
<p><strong>Dra. Sindy Adriana Castillo Vera</strong>, clinical psychologist at <strong>Madeira Medical Group</strong> (Versalles, Puerto Vallarta), offers individual therapy, couples counseling, and forensic psychology services.</p>

<h2>What Types of Therapy Are Available?</h2>
<ul>
  <li><strong>Individual therapy:</strong> Anxiety, depression, grief, trauma, life transitions, relationship issues, self-esteem</li>
  <li><strong>Couples therapy:</strong> Communication issues, conflict resolution, relationship recovery</li>
  <li><strong>Family therapy:</strong> Parenting challenges, blended family dynamics, family conflict</li>
  <li><strong>Online therapy / telehealth:</strong> For patients who are part-time residents or have returned home</li>
</ul>

<h2>Therapy Costs in Puerto Vallarta</h2>
<ul>
  <li><strong>Individual session (50 min):</strong> $700–$1,200 MXN ($35–$60 USD)</li>
  <li><strong>Couples session (60–80 min):</strong> $900–$1,500 MXN ($45–$75 USD)</li>
  <li><strong>Online session:</strong> Comparable pricing, payment via bank transfer or PayPal</li>
</ul>
<p>Compared to US out-of-pocket therapy rates ($150–$300 per session), Puerto Vallarta offers significant savings — making consistent weekly therapy financially sustainable for many expats.</p>

<h2>Expat-Specific Challenges That Therapy Can Help With</h2>
<ul>
  <li><strong>Relocation grief:</strong> Leaving family, friends, career, and familiar routines behind</li>
  <li><strong>Cultural adjustment:</strong> Navigating a new culture, language barriers, social isolation</li>
  <li><strong>Relationship stress:</strong> Moving abroad puts pressure on even healthy partnerships</li>
  <li><strong>Retirement identity:</strong> Many retirees struggle with loss of professional identity and sense of purpose</li>
  <li><strong>Health anxiety:</strong> Managing chronic conditions in a foreign healthcare system</li>
</ul>

<h2>Frequently Asked Questions</h2>
<details>
  <summary><strong>Is therapy in Puerto Vallarta confidential?</strong></summary>
  <p>Yes. Mexican professional ethics standards require the same confidentiality as in the US or Canada. Dra. Castillo follows the ethical code of the Mexican Psychology Council (Sociedad Mexicana de Psicología).</p>
</details>
<details>
  <summary><strong>Can I use my US or Canadian insurance for therapy in Puerto Vallarta?</strong></summary>
  <p>Some international health insurance plans reimburse out-of-network mental health care. Dra. Castillo can provide detailed invoices and session notes in English for insurance submission.</p>
</details>
`,
  },

  // ── ART-25 ─────────────────────────────────────────────────
  {
    slug: "blood-tests-puerto-vallarta-expats",
    lang: "en",
    title: "Getting Blood Tests in Puerto Vallarta: What Expats Need to Know",
    description: "Where to get lab work done in Puerto Vallarta, what tests to include in an annual checkup, prices, turnaround times, and how to read results. BIOS LAB at Madeira Medical Group.",
    publishedAt: "2026-05-17",
    doctorSlug: "bios_lab",
    specialtySlug: "laboratorio-clinico-puerto-vallarta",
    keywords: ["blood test Puerto Vallarta","lab work Puerto Vallarta expat","clinical laboratory Versalles Puerto Vallarta","annual checkup blood work Puerto Vallarta"],
    coverImage: "/doctors/bios_lab.jpg",
    content: `
<h2>Lab Work in Puerto Vallarta: Affordable, Fast, and No Appointment Needed</h2>
<p>One of the practical advantages of Puerto Vallarta's medical infrastructure that surprises expats and visitors: clinical laboratory services are fast, affordable, and widely available. <strong>BIOS LAB</strong>, the clinical laboratory at <strong>Madeira Medical Group</strong> in Versalles, offers a comprehensive menu of tests with results typically available same-day or within 24 hours.</p>

<h2>Common Lab Panels and Prices (USD)</h2>
<ul>
  <li><strong>Complete blood count (CBC):</strong> $8–$15 USD</li>
  <li><strong>Comprehensive metabolic panel (CMP):</strong> $15–$25 USD</li>
  <li><strong>Lipid panel (cholesterol, triglycerides, HDL, LDL):</strong> $12–$20 USD</li>
  <li><strong>Thyroid panel (TSH, free T3, free T4):</strong> $20–$40 USD</li>
  <li><strong>HbA1c (diabetes monitoring):</strong> $12–$20 USD</li>
  <li><strong>Complete hormone panel (FSH, LH, estradiol, testosterone, DHEA):</strong> $40–$80 USD</li>
  <li><strong>Vitamin D (25-OH):</strong> $15–$25 USD</li>
  <li><strong>PSA (prostate):</strong> $15–$25 USD</li>
  <li><strong>Annual comprehensive checkup panel:</strong> $60–$120 USD</li>
</ul>
<p>In the US, an annual comprehensive blood panel without insurance typically costs $300–$600. The same work in Puerto Vallarta costs 70–80% less.</p>

<h2>What Should Your Annual Blood Work Include?</h2>
<p>For adults over 40, a thorough annual panel typically includes:</p>
<ul>
  <li>Complete blood count — anemia, infection, immune function</li>
  <li>Comprehensive metabolic panel — kidney and liver function, electrolytes, glucose</li>
  <li>Lipid panel — cardiovascular risk assessment</li>
  <li>TSH — thyroid screening</li>
  <li>HbA1c — diabetes risk/monitoring</li>
  <li>Vitamin D — especially important in sunny climates (often counterintuitively low)</li>
  <li>PSA for men over 50; PAP/HPV for women per screening guidelines</li>
  <li>Ferritin and iron if fatigue is a concern</li>
</ul>

<h2>Practical Tips</h2>
<ul>
  <li><strong>Fasting:</strong> Most metabolic and lipid panels require 8–12 hours of fasting. Schedule your draw for early morning.</li>
  <li><strong>Results in English:</strong> BIOS LAB provides results with reference ranges. The on-site physicians at Madeira Medical Group can review and interpret results with you.</li>
  <li><strong>Walk-in friendly:</strong> Most routine tests don't require advance booking.</li>
</ul>

<h2>Frequently Asked Questions</h2>
<details>
  <summary><strong>Are Mexican lab results accepted by US/Canadian doctors?</strong></summary>
  <p>Yes. Lab values are universal — a TSH or HbA1c is interpreted the same way regardless of which lab ran it. Results include the laboratory name, accreditation, and reference ranges, which your home physician can review.</p>
</details>
<details>
  <summary><strong>How quickly are results available?</strong></summary>
  <p>Most routine panels are available same-day (3–6 hours). Specialized tests (hormones, genetic panels) may take 24–48 hours. Results can be sent digitally.</p>
</details>
`,
  },

  // ── ART-26 ─────────────────────────────────────────────────
  {
    slug: "tummy-tuck-liposuction-puerto-vallarta",
    lang: "en",
    title: "Tummy Tuck and Liposuction in Puerto Vallarta: Board-Certified Surgeon, Real Costs",
    description: "Complete guide to abdominoplasty and liposuction in Puerto Vallarta — real prices, recovery tips, how to choose a certified plastic surgeon. Dra. Daniela Ciambelli.",
    publishedAt: "2026-05-18",
    doctorSlug: "dra_daniela_anahi_ciambelli_romero",
    specialtySlug: "cirugia-plastica-puerto-vallarta",
    keywords: ["tummy tuck Puerto Vallarta","liposuction Puerto Vallarta","plastic surgery Puerto Vallarta cost","abdominoplasty Puerto Vallarta"],
    coverImage: "/doctors/dra_daniela_anahi_ciambelli_romero.jpg",
    content: `
<h2>Plastic Surgery in Puerto Vallarta: What Medical Tourists Are Discovering</h2>
<p>Puerto Vallarta has quietly become one of Mexico's most active destinations for plastic surgery tourism. Board-certified surgeons trained at top Mexican institutions (UNAM, Universidad de Guadalajara) offer procedures at 40–60% of US prices — with recovery in a world-class beach city.</p>
<p><strong>Dra. Daniela Anahí Ciambelli Romero</strong>, plastic and reconstructive surgeon at <strong>Madeira Medical Group</strong>, specializes in body contouring, facial rejuvenation, and breast procedures.</p>

<h2>Tummy Tuck (Abdominoplasty) Costs in Puerto Vallarta</h2>
<ul>
  <li><strong>Full abdominoplasty:</strong> $5,500–$8,500 USD (vs. $12,000–$18,000 in the US)</li>
  <li><strong>Mini tummy tuck:</strong> $3,500–$5,500 USD</li>
  <li><strong>Liposuction (per area):</strong> $1,800–$3,500 USD</li>
  <li><strong>Lipo + tummy tuck (mommy makeover component):</strong> $7,000–$11,000 USD</li>
  <li><strong>Full mommy makeover (tummy tuck + breast):</strong> $10,000–$16,000 USD</li>
</ul>
<p>These prices include surgeon fees, anesthesiology, operating room, and post-op care. Hospital stay (if required) is additional.</p>

<h2>Is It Safe to Have a Tummy Tuck in Puerto Vallarta?</h2>
<p>Safety in plastic surgery depends on three factors: surgeon credentials, facility accreditation, and patient selection. Always verify:</p>
<ul>
  <li><strong>CMCP certification:</strong> The Consejo Mexicano de Cirugía Plástica, Estética y Reconstructiva is the official certifying body. Dra. Ciambelli holds this certification.</li>
  <li><strong>Hospital affiliation:</strong> Major procedures should be performed in a properly equipped surgical facility, not an office procedure room.</li>
  <li><strong>Realistic patient selection:</strong> Be wary of surgeons who agree to operate on everyone regardless of health status.</li>
</ul>

<h2>Tummy Tuck Recovery in Puerto Vallarta</h2>
<p>Most patients require 5–7 days before comfortable travel. Recovery tips specific to Puerto Vallarta:</p>
<ul>
  <li>Arrange a hotel room or Airbnb near the clinic (Versalles neighborhood is ideal)</li>
  <li>Avoid the beach for at least 3–4 weeks (sun exposure and water)</li>
  <li>Puerto Vallarta's warm climate can increase swelling slightly — stay in air-conditioned spaces initially</li>
  <li>Dra. Ciambelli provides WhatsApp follow-up for all patients after return</li>
</ul>

<h2>Frequently Asked Questions</h2>
<details>
  <summary><strong>How many trips do I need for a tummy tuck?</strong></summary>
  <p>One trip is sufficient in most cases: pre-op consultation and labs (1–2 days), surgery, 4–6 days recovery in Puerto Vallarta, then cleared to fly. Dra. Ciambelli offers virtual pre-op consultations to minimize your in-country time.</p>
</details>
<details>
  <summary><strong>Can I combine a tummy tuck with other procedures?</strong></summary>
  <p>Yes — combining procedures (liposuction, breast augmentation) is common and reduces overall recovery time. Combination cases must be carefully planned to stay within safe limits of surgical time and blood loss. Dra. Ciambelli evaluates each case individually.</p>
</details>
`,
  },

  // ── ART-27 ─────────────────────────────────────────────────
  {
    slug: "bichectomia-puerto-vallarta",
    lang: "es",
    title: "Bichectomía en Puerto Vallarta: Todo lo que Necesitas Saber Antes de Hacértela",
    description: "Guía completa sobre bichectomía en Puerto Vallarta: qué es, cómo se hace, precio real, recuperación, riesgos y cómo saber si eres candidata. Dra. Daniela Ciambelli.",
    publishedAt: "2026-05-18",
    doctorSlug: "dra_daniela_anahi_ciambelli_romero",
    specialtySlug: "cirugia-plastica-puerto-vallarta",
    keywords: ["bichectomía Puerto Vallarta","bichectomía precio Puerto Vallarta","reducción bolsas de Bichat Puerto Vallarta","bichectomía cirujana plástica Puerto Vallarta"],
    coverImage: "/doctors/dra_daniela_anahi_ciambelli_romero.jpg",
    content: `
<h2>¿Qué es la bichectomía?</h2>
<p>La bichectomía es un procedimiento quirúrgico mínimamente invasivo que consiste en la extracción de las <strong>bolsas de Bichat</strong> — acúmulos de grasa encapsulada ubicados en las mejillas, entre el músculo masetero y el buccinador. Su reducción o extracción total estiliza el rostro, define los pómulos y afina la zona media de la cara, logrando un efecto de rostro más anguloso y esculpido.</p>
<p>En <strong>Madeira Medical Group</strong>, la <strong>Dra. Daniela Anahí Ciambelli Romero</strong>, cirujana plástica certificada, realiza este procedimiento bajo anestesia local con incisiones intraorales (por dentro de la boca), sin cicatrices visibles en la piel.</p>

<h2>¿Soy candidata para la bichectomía?</h2>
<p>La bichectomía es adecuada para pacientes que:</p>
<ul>
  <li>Tienen mejillas voluminosas que no cambian con dieta o ejercicio</li>
  <li>Desean un rostro más definido y anguloso</li>
  <li>Están en peso corporal estable (no en proceso activo de pérdida de peso)</li>
  <li>Son mayores de 18 años (el rostro termina de madurar entre los 18 y 22 años)</li>
</ul>
<p><strong>No es recomendable</strong> para personas con rostro delgado o muy adultos, ya que la pérdida de volumen facial natural con la edad puede exagerar el resultado con el tiempo.</p>

<h2>¿Cómo se realiza la bichectomía?</h2>
<ol>
  <li><strong>Valoración previa:</strong> Análisis facial para determinar si el volumen es de bolsas de Bichat o de otra causa (grasa subcutánea, estructura ósea, hipertrofia del masetero).</li>
  <li><strong>Anestesia local</strong> intraoral — sin sedación general en la mayoría de los casos.</li>
  <li><strong>Pequeña incisión</strong> (1–1.5 cm) por dentro de la mejilla — completamente invisible por fuera.</li>
  <li><strong>Extracción de la bolsa de grasa</strong> — total o parcial según el plan diseñado.</li>
  <li><strong>Sutura reabsorbible</strong> — no requiere retirar puntos.</li>
  <li>Duración total: <strong>45–60 minutos</strong>.</li>
</ol>

<h2>Precio de la bichectomía en Puerto Vallarta</h2>
<ul>
  <li><strong>Bichectomía bilateral (las dos mejillas):</strong> $18,000–$30,000 MXN ($900–$1,500 USD)</li>
  <li>Incluye: honorarios médicos, anestesia local, materiales quirúrgicos, seguimiento postoperatorio.</li>
</ul>

<h2>Recuperación: ¿cuánto tiempo necesito?</h2>
<p>La recuperación es relativamente corta: inflamación notable los primeros 5–7 días, dieta blanda durante 1–2 semanas, evitar actividad física intensa por 10 días. Los resultados definitivos se aprecian entre los 3 y 6 meses, cuando baja toda la inflamación.</p>

<h2>Preguntas frecuentes</h2>
<details>
  <summary><strong>¿La bichectomía es permanente?</strong></summary>
  <p>Sí. Las bolsas de Bichat extraídas no se regeneran. Sin embargo, cambios significativos de peso o el envejecimiento natural seguirán afectando el volumen facial general.</p>
</details>
<details>
  <summary><strong>¿Se puede combinar con armonización facial?</strong></summary>
  <p>Sí, frecuentemente se combina con ácido hialurónico en pómulos o mentón para complementar el resultado. Dra. Ciambelli coordina con el equipo de medicina estética de Madeira Medical Group para planes integrales.</p>
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
