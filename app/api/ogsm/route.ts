import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";
import slugify from "slugify";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const { title, userId } = await request.json();
  const slug = slugify(title);
  const createdOgsm = await prisma.ogsm.create({
    include: {
      creator: true,
    },
    data: {
      title,
      objective: "",
      userId,
      slug,
    },
  });
  return Response.json(createdOgsm, { status: 201 });
}

export async function PUT(request: NextRequest) {
  const { id, objective } = await request.json();
  const updatedOgsm = await prisma.ogsm.update({
    where: {
      id,
    },
    data: {
      objective,
    },
  });
  return Response.json(updatedOgsm);
}

export async function DELETE(request: NextRequest) {
  const id = parseInt(request.nextUrl.searchParams.get("id")!);
  await prisma.ogsm.delete({
    where: {
      id,
    },
  });
  return Response.json({}, { status: 204 });
}
