"use client";

import { Card } from "@/components/ui/card";
import { PlusCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Action, Dashboard, Goal } from "@prisma/client";
import { ReactNode, useState } from "react";
import TextField from "./TextField";
import { TextFieldGroup } from "./TextFieldGroup";
import { OgsmWithIncludes } from "./state";

interface SectionProps {
  title: string | ReactNode;
  children: ReactNode;
  className?: string;
}
function Section({ title, children, className }: SectionProps) {
  return (
    <div className={className + " flex h-full flex-col"}>
      <h2 className="ml-1 py-1 text-sm font-semibold tracking-tight text-neutral-500">
        {title}
      </h2>
      <div className="grow">{children}</div>
    </div>
  );
}

type Props = { ogsm: OgsmWithIncludes };
export default function OgsmBoard({ ogsm }: Props) {
  const [strategies, setStrategies] = useState(ogsm?.strategies);

  const createNewStrategy = () => {
    setStrategies([
      ...strategies,
      { content: "", ogsmId: ogsm.id, dashboard: [], actions: [], id: 999 }, // TODO: temporary untill uniqid
    ]);
  };

  const deleteStrategy = (deleteId: number) => {
    setStrategies(strategies.filter((strategy) => deleteId != strategy.id));
  };

  return (
    <div className="grid grid-cols-5 gap-2">
      <Section title="Objective" className="col-span-5">
        <Card className="p-1">
          <TextField
            content={ogsm?.objective}
            updateField={() => {
              return;
            }}
            id={"999"}
            // TODO: temporary
          />
        </Card>
      </Section>
      <Section title="Goals" className="">
        <Card className="h-full">
          <TextFieldGroup
            initialContent={ogsm.goals.map((goal: Goal) => goal.content)}
          />
        </Card>
      </Section>
      <Section
        title={
          <div className="grid grid-cols-4">
            <h2 className="text-sm">Strategy</h2>
            <h2 className="text-sm">Dashboard</h2>
            <h2 className="text-sm">Actions</h2>
          </div>
        }
        className="col-span-4"
      >
        {strategies.length === 0 ? (
          <></>
        ) : (
          <Card>
            {strategies.map((strategy: any) => (
              <div
                className="group/strategy relative grid grid-cols-4 border-b last:border-0"
                key={strategy.id}
              >
                <div className="border-r p-1">
                  <TextField
                    content={strategy.content}
                    updateField={() => {
                      return;
                    }}
                    id={"999"}
                    // TODO: temporary
                  />
                </div>
                <div className="border-r">
                  <TextFieldGroup
                    initialContent={strategy.dashboard.map(
                      (dashboard: Dashboard) => dashboard.content,
                    )}
                  />
                </div>
                <div className="col-span-2">
                  <TextFieldGroup
                    initialContent={strategy.actions.map(
                      (action: Action) => action.content,
                    )}
                  ></TextFieldGroup>
                </div>
                <div className="absolute -right-16 top-1/2 hidden -translate-y-1/2 p-4 group-hover/strategy:block">
                  <div
                    className="cursor-pointer rounded-full bg-red-200 p-2 transition hover:bg-red-300"
                    onClick={() => deleteStrategy(strategy.id)}
                  >
                    <XMarkIcon className="h-6 w-6 text-red-500" />
                  </div>
                </div>
              </div>
            ))}
          </Card>
        )}
        <Card
          className="mt-2 cursor-pointer p-4 transition first:mt-0 hover:bg-gray-100"
          onClick={createNewStrategy}
        >
          <span className="flex items-center text-sm text-muted-foreground">
            <PlusCircleIcon className="mr-2 h-5 w-5" />
            Add strategy
          </span>
        </Card>
      </Section>
      <div className="col-span-4"></div>
    </div>
  );
}
