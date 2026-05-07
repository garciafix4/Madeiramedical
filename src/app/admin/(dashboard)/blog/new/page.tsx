import { getAllDoctorsAdmin } from "@/lib/db/doctors";
import { getAllSpecialtiesAdmin } from "@/lib/db/specialties";
import { BlogForm } from "../BlogForm";

export default async function NewBlogPage() {
  const [doctors, specialties] = await Promise.all([
    getAllDoctorsAdmin().catch(() => []),
    getAllSpecialtiesAdmin().catch(() => []),
  ]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Nuevo artículo</h1>
      <BlogForm doctors={doctors} specialties={specialties} />
    </div>
  );
}
