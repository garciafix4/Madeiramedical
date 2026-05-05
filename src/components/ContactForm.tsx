"use client";

import { CONTACT, DOCTORS, SITE } from "@/lib/content";

export function ContactForm() {
  return (
    <form
      className="rounded-2xl p-8 shadow-lg border border-gray-100"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {CONTACT.formFields.name}
          </label>
          <input
            type="text"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            placeholder="Dr. Juan Pérez"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {CONTACT.formFields.email}
          </label>
          <input
            type="email"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            placeholder="doctor@ejemplo.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {CONTACT.formFields.phone}
          </label>
          <input
            type="tel"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            placeholder="+52 322 000 0000"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {CONTACT.formFields.specialty}
          </label>
          <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-700">
            <option value="">Selecciona tu especialidad</option>
            {DOCTORS.specialties.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
            <option value="otra">Otra especialidad</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {CONTACT.formFields.message}
          </label>
          <textarea
            rows={3}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
            placeholder="Cuéntanos más sobre tus necesidades..."
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90"
          style={{ backgroundColor: "#023047" }}
        >
          {CONTACT.submitLabel}
        </button>
      </div>
    </form>
  );
}
