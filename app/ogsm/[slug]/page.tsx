import { prisma } from "@/lib/prisma";
import { Action, Dashboard, Strategy } from "@prisma/client";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Header } from "./Header";
import { OgsmBoard } from "./OgsmBoard";

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

interface OgsmProps {
  params: { slug: string };
}

const Ogsm = async ({ params }: OgsmProps) => {
  const session = await getServerSession();

  if (!session) {
    redirect("/api/auth/signin");
  }

  const ogsm = await getOgsm(params.slug);

  const objective = ogsm.objective;
  const strategies = ogsm.strategies as Strategy[];
  const goals = ogsm.goals;
  const dashboard: Dashboard[] = [];
  const actions: Action[] = [];
  ogsm.strategies.forEach((strategy) => {
    dashboard.push(...strategy.dashboard);
    actions.push(...strategy.actions);
  });

  return (
    <>
      <Header title={ogsm?.title} creator={ogsm?.creator.name} />
      <main className="container mx-auto py-6">
        <OgsmBoard
          ogsmId={ogsm.id}
          initialObjective={objective}
          initialGoals={goals}
          initialStrategies={strategies}
          initialDashboard={dashboard}
          initialActions={actions}
        />
      </main>
    </>
  );
};

export default Ogsm;
