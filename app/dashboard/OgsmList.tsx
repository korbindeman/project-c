"use client";

import { ConfirmDelete } from "@/components/ConfirmDelete";
import { Input } from "@/components/ui/input";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Prisma, User } from "@prisma/client";
import { useState } from "react";
import { CreateOgsmButton } from "./CreateOgsmButton";
import { OgsmCard } from "./OgsmCard";

type OgsmWithCreator = Prisma.OgsmGetPayload<{
  include: {
    creator: true;
  };
}>;

interface OgsmListProps {
  ogsms: OgsmWithCreator[];
  user: User;
}

const OgsmList = ({ ogsms, user }: OgsmListProps) => {
  const [ogsmList, setOgsmList] = useState(ogsms);
  const [searchQuery, setSearchQuery] = useState("");
  function handleSearch(value: string) {
    setSearchQuery(value);
  }

  const createOgsm = async (title: string) => {
    const res = await fetch("/api/ogsm", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        userId: user.id,
      }),
    });
    const newOgsm = await res.json();
    setOgsmList([...ogsmList, newOgsm]);
  };

  const deleteOgsm = async (idToDelete: number) => {
    await fetch(`/api/ogsm?id=${idToDelete}`, { method: "DELETE" });
    setOgsmList(
      ogsmList.filter((ogsm: OgsmWithCreator) => ogsm.id !== idToDelete),
    );
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
        <CreateOgsmButton createOgsmCallback={createOgsm} />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {ogsmList.map((ogsm: OgsmWithCreator) => {
          if (ogsm.title.toLowerCase().includes(searchQuery.toLowerCase())) {
            return (
              <div className="group relative" key={ogsm.id}>
                <ConfirmDelete deleteCallback={() => deleteOgsm(ogsm.id)}>
                  <span className="absolute right-0 top-6 z-10 hidden -translate-y-1/3 translate-x-1/3 cursor-pointer items-center justify-center rounded-full bg-gray-300 p-0.5 opacity-80 transition hover:opacity-100 group-hover:block">
                    <XMarkIcon className="h-4 w-4 text-gray-500" />
                  </span>
                </ConfirmDelete>
                <OgsmCard ogsm={ogsm} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export { OgsmList };
