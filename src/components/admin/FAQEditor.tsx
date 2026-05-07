"use client";

import { Plus, Trash2, ChevronUp, ChevronDown } from "lucide-react";

interface FAQ {
  q: string;
  a: string;
}

interface Props {
  value: FAQ[];
  onChange: (faqs: FAQ[]) => void;
}

export function FAQEditor({ value, onChange }: Props) {
  function add() {
    onChange([...value, { q: "", a: "" }]);
  }

  function remove(i: number) {
    onChange(value.filter((_, idx) => idx !== i));
  }

  function update(i: number, field: "q" | "a", text: string) {
    const updated = [...value];
    updated[i] = { ...updated[i], [field]: text };
    onChange(updated);
  }

  function move(i: number, dir: -1 | 1) {
    const updated = [...value];
    const j = i + dir;
    if (j < 0 || j >= updated.length) return;
    [updated[i], updated[j]] = [updated[j], updated[i]];
    onChange(updated);
  }

  return (
    <div className="space-y-3">
      {value.map((faq, i) => (
        <div key={i} className="border border-gray-200 rounded-lg p-3 bg-gray-50 space-y-2">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-medium text-gray-500">Pregunta {i + 1}</span>
            <div className="flex gap-1">
              <button type="button" onClick={() => move(i, -1)} className="p-1 text-gray-400 hover:text-gray-600">
                <ChevronUp size={14} />
              </button>
              <button type="button" onClick={() => move(i, 1)} className="p-1 text-gray-400 hover:text-gray-600">
                <ChevronDown size={14} />
              </button>
              <button type="button" onClick={() => remove(i)} className="p-1 text-red-400 hover:text-red-600">
                <Trash2 size={14} />
              </button>
            </div>
          </div>
          <input
            type="text"
            value={faq.q}
            onChange={(e) => update(i, "q", e.target.value)}
            placeholder="Pregunta"
            className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 bg-white"
          />
          <textarea
            value={faq.a}
            onChange={(e) => update(i, "a", e.target.value)}
            placeholder="Respuesta"
            rows={3}
            className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 bg-white resize-none"
          />
        </div>
      ))}

      <button
        type="button"
        onClick={add}
        className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-medium"
      >
        <Plus size={15} />
        Agregar pregunta
      </button>
    </div>
  );
}
