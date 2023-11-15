import RichTextField from "@/components/RichTextField";
import { Card } from "@/components/ui/card";
import { Action, Dashboard, Goal } from "@prisma/client";
import { ReactNode } from "react";
import TextWrapper from "./TextWrapper";

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

// TODO: give this a better name

type Props = { ogsm: any };
export default function OgsmBoard({ ogsm }: Props) {
  return (
    <div className="grid grid-cols-5 gap-2">
      <Section title="Goal" className="col-span-5">
        <Card>
          <RichTextField content={ogsm?.objective} className="max-w-full p-2" />
        </Card>
      </Section>
      <Section title="Goals" className="">
        <Card className="h-full">
          <TextWrapper
            initialContent={ogsm?.goals.map((goal: Goal) => goal.content)}
          ></TextWrapper>
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
                <RichTextField content={strategy.content} />
              </div>
              <div className="border-r">
                <TextWrapper
                  initialContent={strategy.dashboard.map(
                    (dashboard: Dashboard) => dashboard.content,
                  )}
                />
              </div>
              <div className="col-span-2">
                <TextWrapper
                  initialContent={strategy.actions.map(
                    (action: Action) => action.content,
                  )}
                ></TextWrapper>
              </div>
            </div>
          ))}
        </Card>
      </Section>
      <div className="col-span-4"></div>
    </div>
  );
}
