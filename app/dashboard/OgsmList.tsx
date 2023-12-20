"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Ogsm } from "@prisma/client";
import Link from "next/link";
import { useState } from "react";
import DialogDemo from "./CreatePopUp";
import { OgsmWithIncludes } from "../ogsm/[slug]/state";

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
  const [searchQuery, setSearchQuery] = useState("");
  function handleSearch(value: string) {
    setSearchQuery(value)
    console.log(searchQuery)
  }

  const newOgsm = async (Title: string, Objective: string) => {
    const res = await fetch("/api/ogsm", {
      method: "POST",
      body: JSON.stringify({
        title: Title,
        objective: Objective,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    setOgsmList([...ogsmList, res.body]);
  };
  return (
    <div className="w-full">
      <h2 className="mb-4 text-2xl font-semibold tracking-tight">Your OGSMs</h2>
      <div className="flex justify-between pb-4">
        <Input placeholder="Search ogsms" className="w-96" onChange={(e) => handleSearch(e.target.value)} />
        <DialogDemo CreateFunc={newOgsm} /> {/*new create OGSM button with UI popup*/}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {ogsmList.map((ogsm: OgsmWithIncludes) => {
          if (ogsm.title.toLowerCase().includes(searchQuery.toLowerCase()) === true) {
            return <ProjectCard ogsm={ogsm} key={ogsm.id} />
          }

        })}
      </div>
    </div>
  );
}
