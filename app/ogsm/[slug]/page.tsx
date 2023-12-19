import { prisma } from "@/lib/prisma";
import Header from "./Header";
import OgsmBoard from "./OgsmBoard";
import { ogsmContext } from "./ogsmContext";

async function getOgsm(slug: string) {
  const allOgsm = await prisma.ogsm.findUniqueOrThrow({
    where: {
      slug: slug,
    },
    include: {
      creator: true,
      goals: true,
      strategies: {
        include: {
          dashboard: true,
          actions: true,
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
        <ogsmContext.Provider value={ogsm}>
          <OgsmBoard />
        </ogsmContext.Provider>
      </main>
    </div>
  );
}
