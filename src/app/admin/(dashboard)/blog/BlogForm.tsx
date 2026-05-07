"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { RichTextEditor } from "@/components/admin/RichTextEditor";
import { ImageUpload } from "@/components/admin/ImageUpload";
import type { BlogPost } from "@/lib/db/blog";
import type { Doctor } from "@/lib/db/doctors";
import type { Specialty } from "@/lib/db/specialties";

interface Props {
  post?: BlogPost;
  doctors: Doctor[];
  specialties: Specialty[];
}

function toSlug(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function BlogForm({ post, doctors, specialties }: Props) {
  const router = useRouter();
  const isEdit = !!post;

  const [title, setTitle] = useState(post?.title ?? "");
  const [slug, setSlug] = useState(post?.slug ?? "");
  const [lang, setLang] = useState<"es" | "en">(post?.lang ?? "es");
  const [description, setDescription] = useState(post?.description ?? "");
  const [publishedAt, setPublishedAt] = useState(post?.published_at ?? "");
  const [doctorSlug, setDoctorSlug] = useState(post?.doctor_slug ?? "");
  const [specialtySlug, setSpecialtySlug] = useState(post?.specialty_slug ?? "");
  const [keywords, setKeywords] = useState((post?.keywords ?? []).join(", "));
  const [coverImage, setCoverImage] = useState(post?.cover_image ?? "");
  const [content, setContent] = useState(post?.content ?? "");
  const [published, setPublished] = useState(post?.published ?? true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function handleTitleChange(value: string) {
    setTitle(value);
    if (!isEdit) setSlug(toSlug(value));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSaving(true);

    const body = {
      title,
      slug,
      lang,
      description,
      published_at: publishedAt || null,
      doctor_slug: doctorSlug || null,
      specialty_slug: specialtySlug || null,
      keywords: keywords.split(",").map((k) => k.trim()).filter(Boolean),
      cover_image: coverImage || null,
      content,
      published,
    };

    try {
      const url = isEdit ? `/api/blog/${post!.id}` : "/api/blog";
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

      router.push("/admin/blog");
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
    <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl">
      {/* Row 1: Title + Lang */}
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <label className={labelClass}>Título *</label>
          <input type="text" value={title} onChange={(e) => handleTitleChange(e.target.value)} required className={inputClass} placeholder="Título del artículo" />
        </div>
        <div>
          <label className={labelClass}>Idioma</label>
          <select value={lang} onChange={(e) => setLang(e.target.value as "es" | "en")} className={inputClass}>
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>

      {/* Slug */}
      <div>
        <label className={labelClass}>Slug (URL)</label>
        <input type="text" value={slug} onChange={(e) => setSlug(e.target.value)} required className={inputClass} placeholder="url-del-articulo" />
        <p className="text-xs text-gray-400 mt-1">/{lang}/blog/{slug || "..."}</p>
      </div>

      {/* Description */}
      <div>
        <label className={labelClass}>Descripción (meta) <span className="text-gray-400 font-normal">~155 caracteres</span></label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={2} className={inputClass} placeholder="Descripción para SEO y redes sociales" />
      </div>

      {/* Row: Date, Doctor, Specialty */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className={labelClass}>Fecha de publicación</label>
          <input type="date" value={publishedAt} onChange={(e) => setPublishedAt(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Médico autor</label>
          <select value={doctorSlug} onChange={(e) => setDoctorSlug(e.target.value)} className={inputClass}>
            <option value="">— ninguno —</option>
            {doctors.map((d) => (
              <option key={d.slug} value={d.slug}>{d.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>Especialidad relacionada</label>
          <select value={specialtySlug} onChange={(e) => setSpecialtySlug(e.target.value)} className={inputClass}>
            <option value="">— ninguna —</option>
            {specialties.map((s) => (
              <option key={s.slug} value={s.slug}>{s.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Keywords */}
      <div>
        <label className={labelClass}>Palabras clave <span className="text-gray-400 font-normal">(separadas por comas)</span></label>
        <input type="text" value={keywords} onChange={(e) => setKeywords(e.target.value)} className={inputClass} placeholder="palabra clave 1, palabra clave 2, ..." />
      </div>

      {/* Cover Image */}
      <div>
        <ImageUpload value={coverImage} onChange={setCoverImage} label="Imagen de portada" folder="blog" />
      </div>

      {/* Content */}
      <div>
        <label className={labelClass}>Contenido del artículo</label>
        <RichTextEditor value={content} onChange={setContent} placeholder="Escribe el contenido del artículo..." />
      </div>

      {/* Published toggle */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setPublished(!published)}
          className={`relative w-10 h-5 rounded-full transition-colors ${published ? "bg-blue-600" : "bg-gray-300"}`}
        >
          <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform ${published ? "translate-x-5" : ""}`} />
        </button>
        <span className="text-sm text-gray-700">{published ? "Publicado" : "Borrador"}</span>
      </div>

      {error && <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">{error}</p>}

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={saving}
          className="bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
        >
          {saving ? "Guardando..." : isEdit ? "Guardar cambios" : "Publicar artículo"}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="bg-white text-gray-700 border border-gray-300 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
