import { prisma } from "@/lib/prisma";
import { Goal } from "@prisma/client";
import { NextRequest } from "next/server";

export async function PUT(request: NextRequest) {
  // TODO: make this error if no ogsm or goals are given
  const goalstoUpdate: Goal[] = await request.json();
  goalstoUpdate.forEach(async (goal: Goal) => {
    await prisma.goal.update({
      where: {
        //ogsmId: goal.ogsmId,
        id: goal.id,
      },
      data: {
        content: goal.content,
      },
    });
  });

  return Response.json({ goalstoUpdate });
}
