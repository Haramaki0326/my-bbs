import { NextResponse } from "next/server";
import prisma from "../../../..//lib/prisma";

export async function GET() {
  try {
    const threads = await prisma.thread.findMany({
      include: {
        _count: {
          select: { posts: true },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(threads);
  } catch (error) {
    return NextResponse.json(
      { error: "スレッドの取得に失敗しました" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  const { title } = body;

  try {
    const thread = await prisma.thread.create({
      data: {
        title,
      },
    });

    return NextResponse.json(thread, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "スレッド作成に失敗しました" },
      { status: 500 }
    );
  }
}
