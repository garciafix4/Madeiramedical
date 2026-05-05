"use client";

import type { Dict } from "@/lib/i18n/es";

interface Props {
  d: Dict;
  specialties: string[];
}

export function ContactForm({ d, specialties }: Props) {
  const f = d.contact.fields;

  return (
    <form
      className="rounded-2xl p-8 shadow-lg border border-gray-100"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{f.name}</label>
          <input
            type="text"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            placeholder={f.placeholder.name}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{f.email}</label>
          <input
            type="email"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            placeholder={f.placeholder.email}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{f.phone}</label>
          <input
            type="tel"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            placeholder={f.placeholder.phone}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{f.specialty}</label>
          <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-700">
            <option value="">{f.placeholder.specialty}</option>
            {specialties.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
            <option value="otra">{f.placeholder.specialtyOther}</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{f.message}</label>
          <textarea
            rows={3}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
            placeholder={f.placeholder.message}
          />
        </div>
        <button
          type="submit"
          className="btn-gradient w-full py-3 rounded-lg font-semibold text-white"
        >
          {f.submit}
        </button>
      </div>
    </form>
  );
}
