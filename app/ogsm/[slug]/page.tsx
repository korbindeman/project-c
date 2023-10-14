import Card from "@/components/Card";
import RichTextField from "@/components/RichTextField";
import Tooltip from "@/components/Tooltip";
import { prisma } from "@/lib/prisma";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { EyeIcon, LinkIcon, StarIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { ReactNode } from "react";
import Action from "./Action";

interface SectionProps {
  title: string | ReactNode;
  children: ReactNode;
  className?: string;
}
function Section({ title, children, className }: SectionProps) {
  return (
    <div className={className + " flex h-full flex-col"}>
      <h2 className="py-1 text-sm text-neutral-500">{title}</h2>
      <div className="grow">{children}</div>
    </div>
  );
}

async function getData(slug: string) {
  const allOgsm = await prisma.ogsm.findUnique({
    where: {
      slug: slug,
    },
    include: {
      goals: {
        orderBy: { id: "asc" },
      },
      strategies: {
        include: {
          dashboard: {
            orderBy: { id: "asc" },
          },
          actions: {
            orderBy: { id: "asc" },
          },
        },
      },
    },
  });

  return allOgsm;
}

export default async function Ogsm({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug);

  return (
    <main>
      <Link
        href="/dashboard"
        className="mb-1 mt-12 flex items-center text-sm text-neutral-600 transition hover:text-neutral-700"
      >
        <ArrowLeftIcon className="mr-1 h-4 w-4" />
        Back
      </Link>
      <div className="mb-6 flex items-center justify-between">
        <div className="">
          <h1>{data?.title}</h1>
          <p className="text-sm text-neutral-500">Created by Korbin de Man</p>
        </div>
        <div className="flex gap-1">
          <Tooltip content="Favorite">
            <div className="cursor-pointer rounded-full bg-amber-100 p-2 transition hover:bg-amber-200">
              <span className="flex items-center gap-1 text-sm text-amber-600">
                <StarIcon className="h-5 w-5" />
              </span>
            </div>
          </Tooltip>

          <Tooltip content="Share">
            <div className="cursor-pointer rounded-full bg-blue-100 p-2 transition hover:bg-blue-200">
              <span className="flex items-center gap-1 text-sm text-blue-600">
                <LinkIcon className="h-5 w-5" />
              </span>
            </div>
          </Tooltip>
          <div className="cursor-pointer rounded-full bg-neutral-100 p-2 transition hover:bg-neutral-200">
            <span className="flex items-center gap-1 px-1 text-sm text-neutral-600">
              <EyeIcon className="h-5 w-5" />
              Viewing
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2">
        <Section title="Objective" className="col-span-5">
          <Card noPadding>
            <div className="p-1 py-4">
              <RichTextField content={data?.objective} />
            </div>
          </Card>
        </Section>
        <Section title="Goals" className="">
          <Card noPadding>
            <div className="p-1">
              {data?.goals.map((goal) => (
                <RichTextField content={goal.content} key={goal.id} />
              ))}
            </div>
          </Card>
        </Section>
        <Section
          title={
            <div className="grid grid-cols-4">
              <h2 className="text-sm text-neutral-500">Strategy</h2>
              <h2 className="text-sm text-neutral-500">Dashboard</h2>
              <h2 className="text-sm text-neutral-500">Actions</h2>
            </div>
          }
          className="col-span-4"
        >
          <Card noPadding>
            {data?.strategies.map((strategy) => (
              <div
                className="grid grid-cols-4 border-b last:border-0"
                key={strategy.id}
              >
                <div className="border-r p-1">
                  <RichTextField content={strategy.content} />
                </div>
                <div className="border-r p-1">
                  {strategy.dashboard.map((dashboard) => (
                    <RichTextField
                      content={dashboard.content}
                      key={dashboard.id}
                    />
                  ))}
                </div>
                <div className="col-span-2 p-1">
                  {strategy.actions.map((action) => (
                    <Action action={action} key={action.id} />
                  ))}
                </div>
              </div>
            ))}
          </Card>
        </Section>
        <div className="col-span-4"></div>
      </div>
    </main>
  );
}
