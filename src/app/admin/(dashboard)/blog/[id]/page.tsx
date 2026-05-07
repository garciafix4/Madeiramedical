import { notFound } from "next/navigation";
import { getPostById } from "@/lib/db/blog";
import { getAllDoctorsAdmin } from "@/lib/db/doctors";
import { getAllSpecialtiesAdmin } from "@/lib/db/specialties";
import { BlogForm } from "../BlogForm";
import { DeletePostButton } from "./DeletePostButton";

type Props = { params: Promise<{ id: string }> };

export default async function EditBlogPage({ params }: Props) {
  const { id } = await params;
  const [post, doctors, specialties] = await Promise.all([
    getPostById(id),
    getAllDoctorsAdmin().catch(() => []),
    getAllSpecialtiesAdmin().catch(() => []),
  ]);

  if (!post) notFound();

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Editar artículo</h1>
        <DeletePostButton id={post.id} title={post.title} />
      </div>
      <BlogForm post={post} doctors={doctors} specialties={specialties} />
    </div>
  );
}
