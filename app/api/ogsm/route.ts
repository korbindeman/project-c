import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import slugify from "slugify";

export const dynamic = "force-dynamic"; // defaults to force-static
// get full ogsm from prisma
export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams;
  const slug = query.get("ogsm")?.toString();
  const ogsm = await prisma.ogsm.findUnique({
    where: {
      slug: slug,
    },
    include: {
      creator: true,
      goals: {
        orderBy: { id: "asc" },
        select: {
          id: true,
          content: true,
        },
      },
      strategies: {
        include: {
          dashboard: {},
          actions: {},
        },
      },
    },
  });
  var ogsmContent = ogsm;
  return Response.json({ ogsmContent });
}

export async function PUT(request: NextRequest) {
  const { objective, id } = await request.json();
  const updatedOgsm = await prisma.ogsm.update({
    where: {
      id,
    },
    data: {
      objective,
    },
  });

  return Response.json({ updatedOgsm });
}

export async function POST(request: NextRequest) {
  const { title, userId } = await request.json();
  const slug = slugify(`${title}-${Math.floor(Math.random() * 100)}`);
  const newOgsm = await prisma.ogsm.create({
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
  return Response.json(newOgsm);
}

export async function DELETE(request: NextRequest) {
  const id = parseInt(request.nextUrl.searchParams.get("id")!);
  await prisma.ogsm.delete({
    where: {
      id: id,
    },
  });
  return NextResponse.json(
    {
      message: `Ogsm with id ${id} successfully deleted`,
    },
    { status: 200 },
  );
}
