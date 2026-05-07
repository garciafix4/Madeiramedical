"use client";

import { useState } from "react";
import { Check } from "lucide-react";

type AnyObj = Record<string, unknown>;

interface Props {
  config: Record<string, unknown>;
}

const TABS = [
  { key: "SITE", label: "General" },
  { key: "HERO", label: "Hero" },
  { key: "AGENDA", label: "Agenda" },
  { key: "LOCATION", label: "Ubicación" },
  { key: "RENTAL", label: "Renta" },
];

export function ContentEditor({ config }: Props) {
  const [activeTab, setActiveTab] = useState("SITE");
  const [sections, setSections] = useState<Record<string, AnyObj>>(
    Object.fromEntries(TABS.map(({ key }) => [key, (config[key] as AnyObj) ?? {}]))
  );
  const [saving, setSaving] = useState<string | null>(null);
  const [saved, setSaved] = useState<string | null>(null);

  function updateField(tab: string, field: string, value: unknown) {
    setSections((prev) => ({
      ...prev,
      [tab]: { ...prev[tab], [field]: value },
    }));
  }

  async function save(key: string) {
    setSaving(key);
    try {
      const res = await fetch("/api/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key, value: sections[key] }),
      });
      if (!res.ok) throw new Error("Error al guardar");
      setSaved(key);
      setTimeout(() => setSaved(null), 3000);
    } catch {
      alert("Error al guardar los cambios");
    } finally {
      setSaving(null);
    }
  }

  const inputClass = "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  function Field({ tab, field, label, type = "text", placeholder = "" }: {
    tab: string; field: string; label: string; type?: string; placeholder?: string;
  }) {
    const val = (sections[tab]?.[field] as string) ?? "";
    return (
      <div>
        <label className={labelClass}>{label}</label>
        {type === "textarea" ? (
          <textarea value={val} onChange={(e) => updateField(tab, field, e.target.value)} rows={3} className={inputClass + " resize-none"} placeholder={placeholder} />
        ) : (
          <input type={type} value={val} onChange={(e) => updateField(tab, field, e.target.value)} className={inputClass} placeholder={placeholder} />
        )}
      </div>
    );
  }

  function SaveButton({ tabKey }: { tabKey: string }) {
    return (
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-6">
        <button
          onClick={() => save(tabKey)}
          disabled={saving === tabKey}
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
        >
          {saving === tabKey ? "Guardando..." : "Guardar cambios"}
        </button>
        {saved === tabKey && (
          <span className="flex items-center gap-1.5 text-sm text-green-600">
            <Check size={14} />
            Guardado
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-gray-200 bg-gray-50">
        {TABS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-5 py-3 text-sm font-medium transition-colors ${
              activeTab === key
                ? "bg-white border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="p-6 space-y-5">
        {/* SITE */}
        {activeTab === "SITE" && (
          <>
            <Field tab="SITE" field="name" label="Nombre del negocio" />
            <Field tab="SITE" field="tagline" label="Tagline / Subtítulo" />
            <Field tab="SITE" field="phone" label="Teléfono" placeholder="+52 322 293-6235" />
            <Field tab="SITE" field="email" label="Correo electrónico" type="email" />
            <Field tab="SITE" field="address" label="Dirección" />
            <Field tab="SITE" field="whatsapp" label="WhatsApp (solo números)" placeholder="523222936235" />
            <SaveButton tabKey="SITE" />
          </>
        )}

        {/* HERO */}
        {activeTab === "HERO" && (
          <>
            <Field tab="HERO" field="badge" label="Badge / Etiqueta pequeña" placeholder="Último consultorio disponible" />
            <Field tab="HERO" field="headline" label="Título principal" />
            <Field tab="HERO" field="subheadline" label="Subtítulo" />
            <Field tab="HERO" field="body" label="Texto del hero" type="textarea" />
            <div className="grid grid-cols-2 gap-4">
              <Field tab="HERO" field="cta1.label" label="Botón 1 — Texto" />
              <Field tab="HERO" field="cta1.href" label="Botón 1 — Enlace" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Field tab="HERO" field="cta2.label" label="Botón 2 — Texto" />
              <Field tab="HERO" field="cta2.href" label="Botón 2 — Enlace" />
            </div>
            <SaveButton tabKey="HERO" />
          </>
        )}

        {/* AGENDA */}
        {activeTab === "AGENDA" && (
          <>
            <Field tab="AGENDA" field="headline" label="Título de la sección" />
            <Field tab="AGENDA" field="body" label="Descripción" type="textarea" />
            <div className="grid grid-cols-2 gap-4">
              <Field tab="AGENDA" field="cta.label" label="Botón — Texto" />
              <Field tab="AGENDA" field="cta.href" label="Botón — Enlace (WhatsApp)" />
            </div>
            <SaveButton tabKey="AGENDA" />
          </>
        )}

        {/* LOCATION */}
        {activeTab === "LOCATION" && (
          <>
            <Field tab="LOCATION" field="badge" label="Badge" />
            <Field tab="LOCATION" field="headline" label="Título" />
            <Field tab="LOCATION" field="body" label="Descripción" type="textarea" />
            <div>
              <p className={labelClass}>Estadísticas (3 tarjetas)</p>
              {[0, 1, 2].map((i) => {
                const stats = (sections["LOCATION"]?.stats as AnyObj[]) ?? [{}, {}, {}];
                return (
                  <div key={i} className="grid grid-cols-2 gap-3 mb-3">
                    <input
                      type="text"
                      value={(stats[i]?.value as string) ?? ""}
                      onChange={(e) => {
                        const updated = [...stats];
                        updated[i] = { ...updated[i], value: e.target.value };
                        updateField("LOCATION", "stats", updated);
                      }}
                      placeholder={`Valor ${i + 1} (ej. 55+)`}
                      className={inputClass}
                    />
                    <input
                      type="text"
                      value={(stats[i]?.label as string) ?? ""}
                      onChange={(e) => {
                        const updated = [...stats];
                        updated[i] = { ...updated[i], label: e.target.value };
                        updateField("LOCATION", "stats", updated);
                      }}
                      placeholder={`Etiqueta ${i + 1}`}
                      className={inputClass}
                    />
                  </div>
                );
              })}
            </div>
            <SaveButton tabKey="LOCATION" />
          </>
        )}

        {/* RENTAL */}
        {activeTab === "RENTAL" && (
          <>
            <Field tab="RENTAL" field="badge" label="Badge" />
            <Field tab="RENTAL" field="headline" label="Título" />
            <Field tab="RENTAL" field="body" label="Descripción" type="textarea" />
            <div className="grid grid-cols-2 gap-4">
              <Field tab="RENTAL" field="cta1.label" label="Botón 1 — Texto" />
              <Field tab="RENTAL" field="cta1.href" label="Botón 1 — Enlace" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Field tab="RENTAL" field="cta2.label" label="Botón 2 — Texto" />
              <Field tab="RENTAL" field="cta2.href" label="Botón 2 — Enlace" />
            </div>
            <SaveButton tabKey="RENTAL" />
          </>
        )}
      </div>
    </div>
  );
}
