import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// Secret token to prevent unauthorized revalidation
const SECRET = process.env.REVALIDATE_SECRET || "madeira-revalidate-2026";

export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get("secret");

  if (secret !== SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { path } = await req.json().catch(() => ({ path: null }));

  if (path) {
    revalidatePath(path);
    return NextResponse.json({ revalidated: true, path });
  }

  // Revalidate all main pages at once
  const paths = [
    "/es",
    "/en",
    "/es/medicos",
    "/en/medicos",
    "/es/blog",
    "/en/blog",
    "/es/especialidades",
    "/en/especialidades",
  ];

  for (const p of paths) {
    revalidatePath(p);
  }
  // Also revalidate all dynamic routes
  revalidatePath("/[lang]", "layout");
  revalidatePath("/[lang]/medicos/[slug]", "page");
  revalidatePath("/[lang]/blog/[slug]", "page");
  revalidatePath("/[lang]/especialidades/[slug]", "page");

  return NextResponse.json({ revalidated: true, paths });
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get("secret");

  if (secret !== SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Revalidate everything
  revalidatePath("/[lang]", "layout");
  revalidatePath("/[lang]/medicos/[slug]", "page");
  revalidatePath("/[lang]/blog/[slug]", "page");
  revalidatePath("/[lang]/especialidades/[slug]", "page");
  revalidatePath("/es/renta-consultorios-medicos-puerto-vallarta");
  revalidatePath("/en/medical-office-rental-puerto-vallarta");

  return NextResponse.json({ revalidated: true, timestamp: new Date().toISOString() });
}
