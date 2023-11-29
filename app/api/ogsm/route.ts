import { prisma } from "@/lib/prisma";
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

// export async function PUT(request: NextRequest, ogsm: Ogsm) {
//   const test_ogsm = await getOgsm("1");

//   const updatedPost = await prisma.ogsm.update({
//     where: { id: test_ogsm?.id },
//     data: { goals :{
//       test_ogsm.goals
//     }},
//     include: {
//       goals: {},
//       strategies: {
//         include: {
//           dashboard: {},
//           actions: {
//             orderBy: { id: "asc" },
//           },
//         },
//       },
//     },
//   });
//   return Response.json({ test: 1 });
// }
