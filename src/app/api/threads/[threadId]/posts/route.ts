import { NextResponse } from "next/server";
import prisma from "../../../../../..//lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { threadId: string } }
) {
  const threadId = params.threadId;

  try {
    const posts = await prisma.post.findMany({
      where: {
        threadId: parseInt(threadId),
      },
      include: {
        user: {
          select: { username: true },
        },
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.error("投稿の取得エラー:", error); // 詳細なエラーログを出力
    return NextResponse.json(
      { error: "投稿の取得に失敗しました" },
      { status: 500 }
    );
  }
}

export async function POST(
  request: Request,
  { params }: { params: { threadId: string } }
) {
  const threadId = params.threadId;
  const body = await request.json();
  const { content, userId } = body;

  try {
    const post = await prisma.post.create({
      data: {
        content,
        threadId: parseInt(threadId),
        userId: userId,
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "投稿の保存に失敗しました" },
      { status: 500 }
    );
  }
}
