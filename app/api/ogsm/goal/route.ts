import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { content, ogsmId } = await request.json();
  const newGoal = await prisma.goal.create({
    data: {
      content,
      ogsmId,
    },
  });
  return Response.json(newGoal);
}

export async function PUT(request: NextRequest) {
  const { content, id } = await request.json();
  const newGoal = await prisma.goal.update({
    where: {
      id,
    },
    data: {
      content,
    },
  });

  return Response.json({ newGoal });
}

export async function DELETE(request: NextRequest) {
  const id = parseInt(request.nextUrl.searchParams.get("id")!);
  await prisma.goal.delete({
    where: {
      id,
    },
  });
  return Response.json(
    {
      message: `Goal with id ${id} successfully deleted`,
    },
    { status: 200 },
  );
}
