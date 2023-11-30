import { prisma } from "@/lib/prisma";
import { Strategy } from "@prisma/client";
import { NextRequest } from "next/server";

export async function PUT(request: NextRequest) {
  // TODO: make this error if no  strategies are given
  const strategiesUpdated: Strategy[] = await request.json();
  strategiesUpdated.forEach(async (strategy: Strategy) => {
    await prisma.strategy.update({
      where: {
        //ogsmId: goal.ogsmId,
        id: strategy.id,
      },
      data: {
        content: strategy.content,
      },
    });
  });

  return Response.json({ strategiesUpdated });
}
