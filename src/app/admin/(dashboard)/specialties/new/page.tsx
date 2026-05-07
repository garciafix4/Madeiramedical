import { getAllDoctorsAdmin } from "@/lib/db/doctors";
import { SpecialtyForm } from "../SpecialtyForm";

export default async function NewSpecialtyPage() {
  const doctors = await getAllDoctorsAdmin().catch(() => []);
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Nueva especialidad</h1>
      <SpecialtyForm doctors={doctors} />
    </div>
  );
}
