import { notFound } from "next/navigation";
import { getDoctorById } from "@/lib/db/doctors";
import { DoctorForm } from "../DoctorForm";

type Props = { params: Promise<{ id: string }> };

export default async function EditDoctorPage({ params }: Props) {
  const { id } = await params;
  const doctor = await getDoctorById(id);
  if (!doctor) notFound();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Editar médico</h1>
      <DoctorForm doctor={doctor} />
    </div>
  );
}
