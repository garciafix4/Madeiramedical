import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { getSpecialtyById, updateSpecialty, deleteSpecialty } from "@/lib/db/specialties";

type Params = { params: Promise<{ id: string }> };

export async function GET(_req: NextRequest, { params }: Params) {
  const { id } = await params;
  const specialty = await getSpecialtyById(id);
  if (!specialty) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(specialty);
}

export async function PUT(req: NextRequest, { params }: Params) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  try {
    const body = await req.json();
    const specialty = await updateSpecialty(id, body);
    revalidatePath(`/es/especialidades/${specialty.slug}`);
    revalidatePath(`/en/especialidades/${specialty.slug}`);
    return NextResponse.json(specialty);
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  try {
    await deleteSpecialty(id);
    revalidatePath("/", "layout");
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
