import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Header from "./Header";
import OgsmBoard from "./OgsmBoard";

async function getOgsm(slug: string) {
  const allOgsm = await prisma.ogsm.findUniqueOrThrow({
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
  const session = await getServerSession();

  if (!session) {
    redirect("/api/auth/signin");
  }

  const ogsm = await getOgsm(params.slug);

  return (
    <>
      <Header title={ogsm?.title} creator={ogsm?.creator.name} />
      <main className="container mx-auto py-6">
        <OgsmBoard ogsm={ogsm} />
      </main>
    </>
  );
}
