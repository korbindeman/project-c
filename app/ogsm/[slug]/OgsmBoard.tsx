import { Card } from "@/components/ui/card";
import { Action, Dashboard, Goal } from "@prisma/client";
import { ReactNode } from "react";
import TextField from "./TextField";
import { TextFieldGroup } from "./TextFieldGroup";

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

type Props = { ogsm: any };
export default function OgsmBoard({ ogsm }: Props) {
  return (
    <div className="grid grid-cols-5 gap-2">
      <Section title="Objective" className="col-span-5">
        <Card className="p-1">
          <TextField content={ogsm?.objective} />
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
        <Card>
          {ogsm?.strategies.map((strategy: any) => (
            <div
              className="grid grid-cols-4 border-b last:border-0"
              key={strategy.id}
            >
              <div className="border-r px-2 py-1">
                <TextField content={strategy.content} />
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
            </div>
          ))}
        </Card>
      </Section>
      <div className="col-span-4"></div>
    </div>
  );
}
