"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ImageUpload } from "@/components/admin/ImageUpload";
import { ServicesList } from "@/components/admin/ServicesList";
import type { Doctor } from "@/lib/db/doctors";

interface Props {
  doctor?: Doctor;
}

function toSlug(name: string) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "_");
}

export function DoctorForm({ doctor }: Props) {
  const router = useRouter();
  const isEdit = !!doctor;

  const [name, setName] = useState(doctor?.name ?? "");
  const [slug, setSlug] = useState(doctor?.slug ?? "");
  const [specialty, setSpecialty] = useState(doctor?.specialty ?? "");
  const [phone, setPhone] = useState(doctor?.phone ?? "");
  const [photo, setPhoto] = useState(doctor?.photo ?? "");
  const [services, setServices] = useState<string[]>(doctor?.services ?? [""]);
  const [active, setActive] = useState(doctor?.active ?? true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function handleNameChange(value: string) {
    setName(value);
    if (!isEdit) setSlug(toSlug(value));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSaving(true);

    const body = {
      name,
      slug,
      specialty,
      phone,
      photo,
      services: services.filter(Boolean),
      active,
      lang: "es",
    };

    try {
      const url = isEdit ? `/api/doctors/${doctor!.id}` : "/api/doctors";
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
      router.push("/admin/doctors");
      router.refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error al guardar");
    } finally {
      setSaving(false);
    }
  }

  const inputClass = "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      {/* Photo */}
      <ImageUpload value={photo} onChange={setPhoto} label="Foto del médico" folder="doctors" />

      {/* Name + Slug */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Nombre completo *</label>
          <input type="text" value={name} onChange={(e) => handleNameChange(e.target.value)} required className={inputClass} placeholder="Dr. Nombre Apellido" />
        </div>
        <div>
          <label className={labelClass}>Slug (URL)</label>
          <input type="text" value={slug} onChange={(e) => setSlug(e.target.value)} required className={inputClass} placeholder="dr_nombre_apellido" />
        </div>
      </div>

      {/* Specialty */}
      <div>
        <label className={labelClass}>Especialidad *</label>
        <input type="text" value={specialty} onChange={(e) => setSpecialty(e.target.value)} required className={inputClass} placeholder="Ej: Ortodoncia · Invisalign" />
      </div>

      {/* Phone */}
      <div>
        <label className={labelClass}>Teléfono</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} placeholder="322 293 6235" />
      </div>

      {/* Services */}
      <div>
        <label className={labelClass}>Servicios / Tratamientos</label>
        <ServicesList value={services} onChange={setServices} />
      </div>

      {/* Active toggle */}
      <div className="flex items-center gap-3">
        <button type="button" onClick={() => setActive(!active)} className={`relative w-10 h-5 rounded-full transition-colors ${active ? "bg-blue-600" : "bg-gray-300"}`}>
          <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform ${active ? "translate-x-5" : ""}`} />
        </button>
        <span className="text-sm text-gray-700">{active ? "Activo (visible en el sitio)" : "Inactivo (oculto)"}</span>
      </div>

      {error && <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">{error}</p>}

      <div className="flex gap-3 pt-2">
        <button type="submit" disabled={saving} className="bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors">
          {saving ? "Guardando..." : isEdit ? "Guardar cambios" : "Agregar médico"}
        </button>
        <button type="button" onClick={() => router.back()} className="bg-white text-gray-700 border border-gray-300 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
          Cancelar
        </button>
      </div>
    </form>
  );
}
