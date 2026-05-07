import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { getDoctorById, updateDoctor, deleteDoctor } from "@/lib/db/doctors";

type Params = { params: Promise<{ id: string }> };

export async function GET(_req: NextRequest, { params }: Params) {
  const { id } = await params;
  const doctor = await getDoctorById(id);
  if (!doctor) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(doctor);
}

export async function PUT(req: NextRequest, { params }: Params) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  try {
    const body = await req.json();
    const doctor = await updateDoctor(id, body);
    revalidatePath("/", "layout");
    revalidatePath(`/es/medicos/${doctor.slug}`);
    revalidatePath(`/en/medicos/${doctor.slug}`);
    return NextResponse.json(doctor);
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  try {
    const doctor = await getDoctorById(id);
    await deleteDoctor(id);
    if (doctor) {
      revalidatePath("/", "layout");
      revalidatePath(`/es/medicos/${doctor.slug}`);
      revalidatePath(`/en/medicos/${doctor.slug}`);
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
