import { prisma } from "@/lib/prisma";
import { StarIcon } from "@heroicons/react/20/solid";
import { Ogsm } from "@prisma/client";
import Link from "next/link";

interface ProjectCardProps {
  ogsm: Ogsm;
}

function ProjectCard({ ogsm }: ProjectCardProps) {
  return (
    <Link
      href="/ogsm/1"
      className="cursor-pointer rounded-lg border p-8 transition hover:bg-gray-50"
    >
      <div className="mb-14 flex justify-between">
        <div className="">
          <h2>{ogsm.title}</h2>
          <p className="text-sm text-gray-500">{ogsm.objective}</p>
        </div>
        <div className="p-1 text-yellow-400 transition hover:text-yellow-500">
          <StarIcon className="h-5 w-5" />
        </div>
      </div>
      <div className="">
        <h3 className="mb-0.5 text-sm text-gray-800">Tasks</h3>
        <div className="flex items-center">
          <span className="pr-2 text-sm text-gray-600">1/2</span>
          <div className="h-2.5 w-32 rounded-full bg-gray-200">
            <div className="h-2.5 w-[50%] rounded-full bg-blue-500"></div>
          </div>
        </div>
      </div>
    </Link>
  );
}

async function getData() {
  const ogsms = await prisma.ogsm.findMany();
  return ogsms;
}

export default async function Dashboard() {
  const data = await getData();
  return (
    <main className="grid grid-cols-3 gap-4">
      {data.map((ogsm) => (
        <ProjectCard ogsm={ogsm} key={ogsm.id} />
      ))}
    </main>
  );
}
