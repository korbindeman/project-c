import { Card, CardContent } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import { Action } from "@prisma/client";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import OgsmList from "./OgsmList";

interface ActionCard {
  action: Action;
}
function ActionCard({ action }: ActionCard) {
  return (
    <Link href="" className="">
      <Card className="mb-2">
        <CardContent className="py-2">
          <h3
            dangerouslySetInnerHTML={{ __html: action.content }}
            className="text-sm tracking-tight"
          ></h3>
          <p className="text-xs text-muted-foreground">
            Created by Korbin de Man
          </p>
          <div className="mt-2 flex items-center gap-1">
            <div className="text-xs text-neutral-500">Municipality Ogsm</div>
            <div className="inline-block rounded-sm bg-green-100 px-1 py-0.5 text-xs text-green-800">
              {action.status}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

async function getOgsms() {
  const ogsms = await prisma.ogsm.findMany();
  return ogsms;
}

async function getActions() {
  const actions = await prisma.action.findMany();
  return actions;
}

export default async function Dashboard() {
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
        {/* <div className="">
          <Separator orientation="vertical" />
        </div> */}
        {/* <div className="">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight">
            Your Actions
          </h2>
          <div className="flex pb-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Most Recent" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="ogsm">By Ogsm</SelectItem>
                <SelectItem value="priority">Priority</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {actions.map((action) => (
            <ActionCard action={action} key={action.id} />
          ))}
        </div> */}
      </main>
    </div>
  );
}
