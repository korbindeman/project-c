import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { prisma } from "@/lib/prisma";
import { Action, Ogsm } from "@prisma/client";
import Link from "next/link";

interface ProjectCardProps {
  ogsm: Ogsm;
}
function ProjectCard({ ogsm }: ProjectCardProps) {
  return (
    <Link href="/ogsm/1">
      <Card>
        <CardHeader>
          <h3 className="text-sm tracking-tight">{ogsm.title}</h3>
          <p className="text-xs text-muted-foreground">
            Created by Korbin de Man
          </p>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">Modified 3 mins ago</p>
        </CardContent>
      </Card>
    </Link>
  );
}

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
            <div className="text-xs text-neutral-500">Example Ogsm</div>
            <div className="inline-block rounded-sm bg-green-100 px-1 py-0.5 text-xs text-green-800">
              Finished
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
  const ogsms = await getOgsms();
  const actions = await getActions();

  return (
    <div className="container mx-auto py-8">
      <main className="flex items-stretch gap-8">
        <div className="w-3/4">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight">Ogsms</h2>
          <div className="flex justify-between pb-4">
            <Input placeholder="Search ogsms" className="w-96" />
            <Button>Create new</Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {ogsms.map((ogsm) => (
              <ProjectCard ogsm={ogsm} key={ogsm.id} />
            ))}
          </div>
        </div>
        <div className="">
          <Separator orientation="vertical" />
        </div>
        <div className="">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight">
            Actions
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
        </div>
      </main>
    </div>
  );
}
