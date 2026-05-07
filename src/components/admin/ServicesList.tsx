"use client";

import { Plus, Trash2 } from "lucide-react";

interface Props {
  value: string[];
  onChange: (services: string[]) => void;
}

export function ServicesList({ value, onChange }: Props) {
  function add() {
    onChange([...value, ""]);
  }

  function remove(i: number) {
    onChange(value.filter((_, idx) => idx !== i));
  }

  function update(i: number, text: string) {
    const updated = [...value];
    updated[i] = text;
    onChange(updated);
  }

  return (
    <div className="space-y-2">
      {value.map((service, i) => (
        <div key={i} className="flex items-center gap-2">
          <input
            type="text"
            value={service}
            onChange={(e) => update(i, e.target.value)}
            placeholder={`Servicio ${i + 1}`}
            className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          <button
            type="button"
            onClick={() => remove(i)}
            className="p-1.5 text-red-400 hover:text-red-600"
          >
            <Trash2 size={14} />
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={add}
        className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-medium"
      >
        <Plus size={15} />
        Agregar servicio
      </button>
    </div>
  );
}
