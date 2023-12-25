import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { content, ogsmId } = await request.json();
  const createdStrategy = await prisma.strategy.create({
    data: {
      content,
      ogsmId,
    },
  });
  return Response.json(createdStrategy, { status: 201 });
}

export async function PUT(request: NextRequest) {
  const { content, id } = await request.json();
  const updatedStrategy = await prisma.strategy.update({
    where: {
      id,
    },
    data: {
      content,
    },
  });

  return Response.json(updatedStrategy);
}

export async function DELETE(request: NextRequest) {
  const id = parseInt(request.nextUrl.searchParams.get("id")!);
  await prisma.strategy.delete({
    where: {
      id: id,
    },
  });
  return Response.json({}, { status: 204 });
}
