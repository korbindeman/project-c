import { StarIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

function ProjectCard() {
  return (
    <Link
      href="/ogsm/1"
      className="cursor-pointer rounded-lg border p-8 transition hover:bg-gray-50"
    >
      <div className="mb-14 flex justify-between">
        <div className="">
          <h2>Example Title</h2>
          <p className="text-sm text-gray-500">
            Example subtitle for this project.
          </p>
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

export default function Dashboard() {
  return (
    <main className="grid grid-cols-3 gap-4">
      <ProjectCard />
    </main>
  );
}
