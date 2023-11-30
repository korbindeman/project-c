import { prisma } from "@/lib/prisma";
import { Action } from "@prisma/client";
import { NextRequest } from "next/server";

export async function PUT(request: NextRequest) {
    // TODO: make this error if no  strategies are given
    const actionsUpdated: Action[] = await request.json();
    actionsUpdated.forEach(async (action: Action) => {
        await prisma.action.update({
            where: {
                id: action.id,
            },
            data: {
                content: action.content,

            },
        });
    });

    return Response.json({ actionsUpdated });
}
