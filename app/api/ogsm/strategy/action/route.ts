import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { content, strategyId } = await request.json();
  const newStrategy = await prisma.action.create({
    data: {
      content,
      status: "",
      strategyId,
    },
  });
  return Response.json(newStrategy);
}

export async function PUT(request: NextRequest) {
  const { content, id } = await request.json();
  const newAction = await prisma.action.update({
    where: {
      id,
    },
    data: {
      content,
    },
  });

  return Response.json({ newAction });
}

export async function DELETE(request: NextRequest) {
  const id = parseInt(request.nextUrl.searchParams.get("id")!);
  await prisma.action.delete({
    where: {
      id: id,
    },
  });
  return Response.json(
    {
      message: `Action with id ${id} successfully deleted`,
    },
    { status: 200 },
  );
}
