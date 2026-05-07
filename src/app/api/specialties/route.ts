import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { getAllSpecialtiesAdmin, createSpecialty } from "@/lib/db/specialties";

export async function GET() {
  try {
    const specialties = await getAllSpecialtiesAdmin();
    return NextResponse.json(specialties);
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await req.json();
    const specialty = await createSpecialty(body);
    return NextResponse.json(specialty, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
