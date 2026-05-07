import Link from "next/link";
import { getAllDoctorsAdmin } from "@/lib/db/doctors";
import { getAllPostsAdmin } from "@/lib/db/blog";
import { getAllSpecialtiesAdmin } from "@/lib/db/specialties";
import { FileText, Stethoscope, Star, Plus } from "lucide-react";

export default async function DashboardPage() {
  const [doctors, posts, specialties] = await Promise.all([
    getAllDoctorsAdmin().catch(() => []),
    getAllPostsAdmin().catch(() => []),
    getAllSpecialtiesAdmin().catch(() => []),
  ]);

  const recentPosts = posts.slice(0, 5);

  const stats = [
    { label: "Médicos", value: doctors.length, icon: Stethoscope, href: "/admin/doctors", color: "bg-blue-500" },
    { label: "Artículos de Blog", value: posts.length, icon: FileText, href: "/admin/blog", color: "bg-green-500" },
    { label: "Especialidades", value: specialties.length, icon: Star, href: "/admin/specialties", color: "bg-purple-500" },
  ];

  return (
    <div className="p-8 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Bienvenido al panel de administración de Madeira Medical Group</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        {stats.map(({ label, value, icon: Icon, href, color }) => (
          <Link
            key={href}
            href={href}
            className="bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-300 transition-colors"
          >
            <div className={`w-10 h-10 ${color} rounded-lg flex items-center justify-center mb-3`}>
              <Icon size={20} className="text-white" />
            </div>
            <p className="text-3xl font-bold text-gray-900">{value}</p>
            <p className="text-sm text-gray-500 mt-0.5">{label}</p>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">Acciones rápidas</h2>
        <div className="flex gap-3">
          <Link
            href="/admin/blog/new"
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            <Plus size={15} />
            Nuevo artículo
          </Link>
          <Link
            href="/admin/doctors/new"
            className="flex items-center gap-2 bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            <Plus size={15} />
            Agregar médico
          </Link>
        </div>
      </div>

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <div>
          <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">Artículos recientes</h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            {recentPosts.map((post, i) => (
              <Link
                key={post.id}
                href={`/admin/blog/${post.id}`}
                className={`flex items-center justify-between px-5 py-3.5 hover:bg-gray-50 transition-colors ${i < recentPosts.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <div>
                  <p className="text-sm font-medium text-gray-900">{post.title}</p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {post.lang.toUpperCase()} · {post.published_at ?? "Sin fecha"}
                  </p>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full ${post.published ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                  {post.published ? "Publicado" : "Borrador"}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
