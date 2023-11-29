import { prisma } from "@/lib/prisma";
import Header from "./Header";
import OgsmBoard from "./OgsmBoard";

export async function getOgsm(slug: string) {
  const allOgsm = await prisma.ogsm.findUnique({
    where: {
      slug: slug,
    },
    include: {
      creator: true,
      goals: {
        orderBy: { id: "asc" },
      },
      strategies: {
        include: {
          dashboard: {
            orderBy: { id: "asc" },
          },
          actions: {
            orderBy: { id: "asc" },
          },
        },
      },
    },
  });

  return allOgsm;
}

export default async function Ogsm({ params }: { params: { slug: string } }) {
  const ogsm = await getOgsm(params.slug);

  return (
    <div className="">
      <Header title={ogsm?.title} creator={ogsm?.creator.name} />
      <main className="container mx-auto py-6">
        <OgsmBoard ogsm={ogsm} />
      </main>
    </div>
  );
}
