import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { OgsmList } from "./OgsmList";

const Dashboard = async () => {
  const session = await getServerSession();

  if (!session) {
    redirect("/api/auth/signin");
  }

  const user = await prisma.user.findFirst({
    where: {
      email: session.user?.email!,
    },
  });

  const ogsms = await prisma.ogsm.findMany({
    include: {
      creator: true,
    },
  });

  return (
    <div className="container mx-auto py-8">
      <main className="flex items-stretch gap-8">
        <OgsmList ogsms={ogsms} user={user!} />
      </main>
    </div>
  );
};

export default Dashboard;
