import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { getPostById, updatePost, deletePost } from "@/lib/db/blog";

type Params = { params: Promise<{ id: string }> };

export async function GET(_req: NextRequest, { params }: Params) {
  const { id } = await params;
  const post = await getPostById(id);
  if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(post);
}

export async function PUT(req: NextRequest, { params }: Params) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  try {
    const body = await req.json();
    const post = await updatePost(id, body);
    revalidatePath("/[lang]/blog", "page");
    revalidatePath(`/es/blog/${post.slug}`);
    revalidatePath(`/en/blog/${post.slug}`);
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  try {
    const post = await getPostById(id);
    await deletePost(id);
    if (post) {
      revalidatePath("/[lang]/blog", "page");
      revalidatePath(`/es/blog/${post.slug}`);
      revalidatePath(`/en/blog/${post.slug}`);
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
