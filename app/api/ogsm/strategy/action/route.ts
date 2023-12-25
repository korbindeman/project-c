import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { content, strategyId } = await request.json();
  const createdAction = await prisma.action.create({
    data: {
      content,
      strategyId,
    },
  });
  return Response.json(createdAction, { status: 201 });
}

export async function PUT(request: NextRequest) {
  const { content, id } = await request.json();
  const updatedAction = await prisma.action.update({
    where: {
      id,
    },
    data: {
      content,
    },
  });

  return Response.json({ updatedAction });
}

export async function DELETE(request: NextRequest) {
  const id = parseInt(request.nextUrl.searchParams.get("id")!);
  await prisma.action.delete({
    where: {
      id,
    },
  });
  return Response.json({}, { status: 204 });
}
