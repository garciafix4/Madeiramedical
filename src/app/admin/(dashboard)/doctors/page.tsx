import Link from "next/link";
import Image from "next/image";
import { getAllDoctorsAdmin } from "@/lib/db/doctors";
import { Plus, Pencil } from "lucide-react";
import { DeleteDoctorButton } from "./DeleteDoctorButton";

export default async function DoctorsListPage() {
  const doctors = await getAllDoctorsAdmin().catch(() => []);

  return (
    <div className="p-8 max-w-6xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Médicos</h1>
          <p className="text-sm text-gray-500 mt-0.5">{doctors.length} médicos</p>
        </div>
        <Link
          href="/admin/doctors/new"
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          <Plus size={15} />
          Agregar médico
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            {/* Photo */}
            <div className="relative h-40 bg-gray-100">
              {doctor.photo ? (
                <Image
                  src={doctor.photo}
                  alt={doctor.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-300 text-4xl">👨‍⚕️</div>
              )}
              {!doctor.active && (
                <div className="absolute top-2 right-2 bg-gray-900/70 text-white text-xs px-2 py-0.5 rounded-full">
                  Inactivo
                </div>
              )}
            </div>
            {/* Info */}
            <div className="p-4">
              <p className="font-medium text-gray-900 text-sm truncate">{doctor.name}</p>
              <p className="text-xs text-gray-500 mt-0.5 truncate">{doctor.specialty}</p>
              {doctor.phone && (
                <p className="text-xs text-gray-400 mt-0.5">{doctor.phone}</p>
              )}
              {/* Actions */}
              <div className="flex items-center gap-2 mt-3">
                <Link
                  href={`/admin/doctors/${doctor.id}`}
                  className="flex items-center gap-1.5 text-xs text-blue-600 border border-blue-200 px-2.5 py-1.5 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <Pencil size={12} />
                  Editar
                </Link>
                <DeleteDoctorButton id={doctor.id} name={doctor.name} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
