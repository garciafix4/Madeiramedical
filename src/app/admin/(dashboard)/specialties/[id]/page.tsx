import { notFound } from "next/navigation";
import { getSpecialtyById } from "@/lib/db/specialties";
import { getAllDoctorsAdmin } from "@/lib/db/doctors";
import { SpecialtyForm } from "../SpecialtyForm";

type Props = { params: Promise<{ id: string }> };

export default async function EditSpecialtyPage({ params }: Props) {
  const { id } = await params;
  const [specialty, doctors] = await Promise.all([
    getSpecialtyById(id),
    getAllDoctorsAdmin().catch(() => []),
  ]);
  if (!specialty) notFound();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Editar especialidad</h1>
      <SpecialtyForm specialty={specialty} doctors={doctors} />
    </div>
  );
}
