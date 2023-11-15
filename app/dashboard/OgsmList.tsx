"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Ogsm } from "@prisma/client";
import Link from "next/link";
import { useState } from "react";

interface ProjectCardProps {
  ogsm: Ogsm;
}
function ProjectCard({ ogsm }: ProjectCardProps) {
  return (
    <Link href={`/ogsm/${ogsm.slug}`}>
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

type Props = { ogsms: any };
export default function OgsmList({ ogsms }: Props) {
  const [ogsmList, setOgsmList] = useState(ogsms);

  const demoOgsm = () => {
    setOgsmList([...ogsmList, { title: "New ogsm", slug: "1" }]);
  };
  return (
    <div className="w-3/4">
      <h2 className="mb-4 text-2xl font-semibold tracking-tight">Ogsms</h2>
      <div className="flex justify-between pb-4">
        <Input placeholder="Search ogsms" className="w-96" />
        <Button onClick={demoOgsm}>Create new</Button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {ogsmList.map((ogsm: any) => (
          <ProjectCard ogsm={ogsm} key={ogsm.id} />
        ))}
      </div>
    </div>
  );
}
