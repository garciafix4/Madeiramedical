import { es } from "./es";
import { en } from "./en";

export type Lang = "es" | "en";

export const dictionaries = { es, en };

export function getDict(lang: string) {
  return dictionaries[lang as Lang] ?? dictionaries.es;
}

export const SPECIALTIES = [
  { es: "Cirugía Oral y Maxilofacial", en: "Oral & Maxillofacial Surgery" },
  { es: "Ortodoncia e Invisalign", en: "Orthodontics & Invisalign" },
  { es: "Ortopedia Maxilofacial", en: "Maxillofacial Orthopedics" },
  { es: "Psicología Clínica", en: "Clinical Psychology" },
  { es: "Armonización Facial", en: "Facial Harmonization" },
  { es: "Rehabilitación Dental", en: "Dental Rehabilitation" },
  { es: "Cirugía Plástica", en: "Plastic Surgery" },
  { es: "Endocrinología", en: "Endocrinology" },
  { es: "Laboratorio Clínico", en: "Clinical Laboratory" },
  { es: "Ginecología y Obstetricia", en: "Gynecology & Obstetrics" },
  { es: "Pediatría", en: "Pediatrics" },
  { es: "Medicina Regenerativa", en: "Regenerative Medicine" },
  { es: "Implantología", en: "Implantology" },
  { es: "Nutrición", en: "Nutrition" },
  { es: "Medicina Interna", en: "Internal Medicine" },
  { es: "Cardiología", en: "Cardiology" },
  { es: "Dermatología", en: "Dermatology" },
  { es: "Urología", en: "Urology" },
  { es: "Medicina Alternativa", en: "Alternative Medicine" },
  { es: "Alergología e Inmunología", en: "Allergology & Immunology" },
];
