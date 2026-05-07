"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FAQEditor } from "@/components/admin/FAQEditor";
import type { Specialty } from "@/lib/db/specialties";
import type { Doctor } from "@/lib/db/doctors";

interface Props {
  specialty?: Specialty;
  doctors: Doctor[];
}

export function SpecialtyForm({ specialty, doctors }: Props) {
  const router = useRouter();
  const isEdit = !!specialty;

  const [slug, setSlug] = useState(specialty?.slug ?? "");
  const [name, setName] = useState(specialty?.name ?? "");
  const [nameEn, setNameEn] = useState(specialty?.name_en ?? "");
  const [headline, setHeadline] = useState(specialty?.headline ?? "");
  const [headlineEn, setHeadlineEn] = useState(specialty?.headline_en ?? "");
  const [description, setDescription] = useState(specialty?.description ?? "");
  const [descriptionEn, setDescriptionEn] = useState(specialty?.description_en ?? "");
  const [keywords, setKeywords] = useState((specialty?.keywords ?? []).join(", "));
  const [doctorSlugs, setDoctorSlugs] = useState<string[]>(specialty?.doctor_slugs ?? []);
  const [faq, setFaq] = useState(specialty?.faq ?? []);
  const [active, setActive] = useState(specialty?.active ?? true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function toggleDoctor(slug: string) {
    setDoctorSlugs((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSaving(true);

    const body = {
      slug,
      name,
      name_en: nameEn,
      headline,
      headline_en: headlineEn,
      description,
      description_en: descriptionEn,
      keywords: keywords.split(",").map((k) => k.trim()).filter(Boolean),
      doctor_slugs: doctorSlugs,
      faq,
      active,
    };

    try {
      const url = isEdit ? `/api/specialties/${specialty!.id}` : "/api/specialties";
      const method = isEdit ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Error al guardar");
      }
      router.push("/admin/specialties");
      router.refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error al guardar");
    } finally {
      setSaving(false);
    }
  }

  const inputClass = "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";
  const taClass = inputClass + " resize-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
      {/* Slug */}
      <div>
        <label className={labelClass}>Slug (URL) *</label>
        <input type="text" value={slug} onChange={(e) => setSlug(e.target.value)} required className={inputClass} placeholder="especialidad-puerto-vallarta" />
      </div>

      {/* Names */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Nombre (ES) *</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Nombre (EN)</label>
          <input type="text" value={nameEn} onChange={(e) => setNameEn(e.target.value)} className={inputClass} />
        </div>
      </div>

      {/* Headlines */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Titular (ES)</label>
          <input type="text" value={headline} onChange={(e) => setHeadline(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Titular (EN)</label>
          <input type="text" value={headlineEn} onChange={(e) => setHeadlineEn(e.target.value)} className={inputClass} />
        </div>
      </div>

      {/* Descriptions */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Descripción (ES)</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={5} className={taClass} />
        </div>
        <div>
          <label className={labelClass}>Descripción (EN)</label>
          <textarea value={descriptionEn} onChange={(e) => setDescriptionEn(e.target.value)} rows={5} className={taClass} />
        </div>
      </div>

      {/* Keywords */}
      <div>
        <label className={labelClass}>Palabras clave <span className="text-gray-400 font-normal">(separadas por comas)</span></label>
        <input type="text" value={keywords} onChange={(e) => setKeywords(e.target.value)} className={inputClass} />
      </div>

      {/* Doctors */}
      <div>
        <label className={labelClass}>Médicos vinculados</label>
        <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto border border-gray-200 rounded-lg p-3">
          {doctors.map((d) => (
            <label key={d.slug} className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={doctorSlugs.includes(d.slug)}
                onChange={() => toggleDoctor(d.slug)}
                className="rounded"
              />
              <span className="truncate">{d.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div>
        <label className={labelClass}>Preguntas Frecuentes (FAQ)</label>
        <FAQEditor value={faq} onChange={setFaq} />
      </div>

      {/* Active */}
      <div className="flex items-center gap-3">
        <button type="button" onClick={() => setActive(!active)} className={`relative w-10 h-5 rounded-full transition-colors ${active ? "bg-blue-600" : "bg-gray-300"}`}>
          <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform ${active ? "translate-x-5" : ""}`} />
        </button>
        <span className="text-sm text-gray-700">{active ? "Activa (visible en el sitio)" : "Inactiva"}</span>
      </div>

      {error && <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">{error}</p>}

      <div className="flex gap-3 pt-2">
        <button type="submit" disabled={saving} className="bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors">
          {saving ? "Guardando..." : isEdit ? "Guardar cambios" : "Crear especialidad"}
        </button>
        <button type="button" onClick={() => router.back()} className="bg-white text-gray-700 border border-gray-300 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
          Cancelar
        </button>
      </div>
    </form>
  );
}
