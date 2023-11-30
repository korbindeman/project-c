import { prisma } from "@/lib/prisma";
import { Ogsm } from "@prisma/client";
import { NextRequest } from "next/server";

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
        objective: ogsm.objective
      },
    });
    return Response.json({ updatedOgsm });
  })
}
