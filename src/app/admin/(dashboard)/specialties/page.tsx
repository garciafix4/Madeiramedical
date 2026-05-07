import Link from "next/link";
import { getAllSpecialtiesAdmin } from "@/lib/db/specialties";
import { Plus, Pencil } from "lucide-react";

export default async function SpecialtiesListPage() {
  const specialties = await getAllSpecialtiesAdmin().catch(() => []);

  return (
    <div className="p-8 max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Especialidades</h1>
          <p className="text-sm text-gray-500 mt-0.5">{specialties.length} especialidades</p>
        </div>
        <Link
          href="/admin/specialties/new"
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          <Plus size={15} />
          Nueva especialidad
        </Link>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Nombre</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Slug</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Médicos</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Estado</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {specialties.map((s, i) => (
              <tr key={s.id} className={i < specialties.length - 1 ? "border-b border-gray-100" : ""}>
                <td className="px-5 py-3.5">
                  <p className="font-medium text-gray-900">{s.name}</p>
                  {s.name_en && <p className="text-xs text-gray-400 mt-0.5">{s.name_en}</p>}
                </td>
                <td className="px-4 py-3.5 text-xs text-gray-500 font-mono">{s.slug}</td>
                <td className="px-4 py-3.5 text-gray-600">{s.doctor_slugs?.length ?? 0}</td>
                <td className="px-4 py-3.5">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${s.active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                    {s.active ? "Activa" : "Inactiva"}
                  </span>
                </td>
                <td className="px-4 py-3.5">
                  <Link href={`/admin/specialties/${s.id}`} className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors inline-flex">
                    <Pencil size={14} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
