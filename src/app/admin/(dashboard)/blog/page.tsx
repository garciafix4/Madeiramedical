import Link from "next/link";
import { getAllPostsAdmin } from "@/lib/db/blog";
import { Plus } from "lucide-react";
import { BlogTable } from "./BlogTable";

export default async function BlogListPage() {
  const posts = await getAllPostsAdmin().catch(() => []);

  return (
    <div className="p-8 max-w-6xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Blog</h1>
          <p className="text-sm text-gray-500 mt-0.5">{posts.length} artículos</p>
        </div>
        <Link
          href="/admin/blog/new"
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          <Plus size={15} />
          Nuevo artículo
        </Link>
      </div>

      <BlogTable posts={posts} />
    </div>
  );
}
