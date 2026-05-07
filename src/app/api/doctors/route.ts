import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { getAllDoctorsAdmin, createDoctor } from "@/lib/db/doctors";

export async function GET() {
  try {
    const doctors = await getAllDoctorsAdmin();
    return NextResponse.json(doctors);
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await req.json();
    const doctor = await createDoctor(body);
    return NextResponse.json(doctor, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
