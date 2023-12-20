"use client";

import { ConfirmDelete } from "@/components/ConfirmDelete";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useState } from "react";
import { OgsmWithIncludes } from "../ogsm/[slug]/state";
import DialogDemo from "./CreatePopUp";

interface ProjectCardProps {
  ogsm: OgsmWithIncludes;
}
function ProjectCard({ ogsm }: ProjectCardProps) {
  return (
    <div className="group relative">
      <ConfirmDelete
        deleteCallback={async () => {
          await fetch(`/api/ogsm?ogsm=${ogsm.id}`, { method: "DELETE" });
        }}
      >
        <span className="absolute right-0 top-6 z-10 hidden -translate-y-1/3 translate-x-1/3 cursor-pointer items-center justify-center rounded-full bg-gray-300 p-0.5 opacity-80 transition hover:opacity-100 group-hover:block">
          <XMarkIcon className="h-4 w-4 text-gray-500" />
        </span>
      </ConfirmDelete>
      <Link href={`/ogsm/${ogsm.slug}`}>
        <Card>
          <CardHeader>
            <h3 className="text-sm tracking-tight">{ogsm.title}</h3>
            <p className="text-xs text-muted-foreground">
              Created by{" "}
              {
                ogsm.creator
                  ? ogsm.creator.name
                  : "(could not load creator)" /*shows a placeholder if creator is null for some reason*/
              }
            </p>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Modified 3 mins ago</p>
          </CardContent> {/*if made functional, save a Date() object to a property of ogsm, update this to the time of the last edit and then display the time that has passed since then above*/}
        </Card>
      </Link>
    </div>
  );
}

type Props = { ogsms: any };
export default function OgsmList({ ogsms }: Props) {
  const [ogsmList, setOgsmList] = useState(ogsms);
  const [searchQuery, setSearchQuery] = useState("");
  function handleSearch(value: string) {
    setSearchQuery(value);
    console.log(searchQuery);
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
        <Input
          placeholder="Search ogsms"
          className="w-96"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <DialogDemo CreateFunc={newOgsm} />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {ogsmList.map((ogsm: OgsmWithIncludes) => {
          if (
            ogsm.title.toLowerCase().includes(searchQuery.toLowerCase()) ===
            true
          ) {
            return <ProjectCard ogsm={ogsm} key={ogsm.id} />;
          }
        })}
      </div>
    </div>
  );
}
