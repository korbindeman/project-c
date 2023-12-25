import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { content, strategyId } = await request.json();
  const createdDashboard = await prisma.dashboard.create({
    data: {
      content,
      strategyId,
    },
  });
  return Response.json(createdDashboard, { status: 201 });
}

export async function PUT(request: NextRequest) {
  const { content, id } = await request.json();
  const updatedDashboard = await prisma.dashboard.update({
    where: {
      id,
    },
    data: {
      content,
    },
  });

  return Response.json({ updatedDashboard });
}

export async function DELETE(request: NextRequest) {
  const id = parseInt(request.nextUrl.searchParams.get("id")!);
  await prisma.dashboard.delete({
    where: {
      id,
    },
  });
  return Response.json({}, { status: 204 });
}
