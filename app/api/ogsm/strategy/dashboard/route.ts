import { prisma } from "@/lib/prisma";
import { Dashboard } from "@prisma/client";
import { NextRequest } from "next/server";

export async function PUT(request: NextRequest) {
  // TODO: make this error if no  strategies are given
  const dashboardsUpdated: Dashboard[] = await request.json();
  dashboardsUpdated.forEach(async (dashboard: Dashboard) => {
    await prisma.dashboard.update({
      where: {
        //ogsmId: goal.ogsmId,
        id: dashboard.id,
      },
      data: {
        content: dashboard.content,
      },
    });
  });

  return Response.json({ dashboardsUpdated });
}
