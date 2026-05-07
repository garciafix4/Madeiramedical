import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { getAllPostsAdmin, createPost } from "@/lib/db/blog";

export async function GET() {
  try {
    const posts = await getAllPostsAdmin();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await req.json();
    const post = await createPost(body);
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
