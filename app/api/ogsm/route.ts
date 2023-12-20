import { prisma } from "@/lib/prisma";
import { Ogsm } from "@prisma/client";
import { NextRequest } from "next/server";
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
  const updatedOgsm: Ogsm[] = await request.json();
  updatedOgsm.forEach(async (ogsm: Ogsm) => {
    await prisma.ogsm.update({
      where: {
        slug: ogsm.slug,
      },
      data: {
        title: ogsm.title,
        objective: ogsm.objective,
      },
    });
    return Response.json({ updatedOgsm });
  });
}

export async function POST(request: NextRequest) {
  const { title, objective } = await request.json();
  const userId = 1;
  const slug = slugify(`${title}-${Math.floor(Math.random() * 100)}`);
  const newOgsm = await prisma.ogsm.create({
    include: {},
    data: {
      title,
      objective,
      userId,
      slug,
    },
  });
  return Response.json(newOgsm);
}

export async function DELETE(request: NextRequest) {
  const ogsm = request.nextUrl.searchParams.get("ogsm")?.toString();
  const id = parseInt(ogsm!);
  try {
    await prisma.ogsm.delete({
      where: {
        id: id,
      },
    });
  } catch {}
}
