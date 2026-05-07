import { getAllConfig } from "@/lib/db/config";
import { ContentEditor } from "./ContentEditor";

export default async function ContentPage() {
  const config = await getAllConfig().catch(() => ({}));

  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Contenido del Sitio</h1>
        <p className="text-sm text-gray-500 mt-0.5">Edita los textos, datos de contacto y secciones del sitio web</p>
      </div>
      <ContentEditor config={config} />
    </div>
  );
}
