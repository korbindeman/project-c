import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { content, strategyId } = await request.json();
  const newStrategy = await prisma.dashboard.create({
    data: {
      content,
      strategyId,
    },
  });
  return Response.json(newStrategy);
}

export async function PUT(request: NextRequest) {
  const { content, id } = await request.json();
  const newDashboard = await prisma.dashboard.update({
    where: {
      id: id,
    },
    data: {
      content,
    },
  });

  return Response.json({ newDashboard });
}

export async function DELETE(request: NextRequest) {
  const id = parseInt(request.nextUrl.searchParams.get("id")!);
  await prisma.dashboard.delete({
    where: {
      id: id,
    },
  });
  return Response.json(
    {
      message: `Dashboard with id ${id} successfully deleted`,
    },
    { status: 200 },
  );
}
