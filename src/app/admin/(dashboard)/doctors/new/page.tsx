import { DoctorForm } from "../DoctorForm";

export default function NewDoctorPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Agregar médico</h1>
      <DoctorForm />
    </div>
  );
}
