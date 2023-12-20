"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { OgsmWithIncludes } from "../ogsm/[slug]/state";
import DialogDemo from "./CreatePopUp";

interface ProjectCardProps {
  ogsm: OgsmWithIncludes;
}
function ProjectCard({ ogsm }: ProjectCardProps) {
  return (
    <Link href={`/ogsm/${ogsm.slug}`}>
      <Card>
        <CardHeader>
          <h3 className="text-sm tracking-tight">{ogsm.title}</h3>
          <p className="text-xs text-muted-foreground">
            Created by {ogsm.creator ? ogsm.creator.name : "(could not load creator)" /*shows a placeholder if creator is null for some reason*/}
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

  const newOgsm = async (title: string) => {
    const res = await fetch("/api/ogsm", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        objective: "",
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
        <DialogDemo CreateFunc={newOgsm} />
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
