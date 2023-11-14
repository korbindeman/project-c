import RichTextField from "@/components/RichTextField";
import { Card } from "@/components/ui/card";
import { Action, Dashboard, Goal } from "@prisma/client";
import { ReactNode } from "react";

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
interface PaddingThingProps {
  children: ReactNode;
}
function PaddingThing({ children }: PaddingThingProps) {
  return <div className="px-2 py-1">{children}</div>;
}

type Props = { ogsm: any };
export default function OgsmBoard({ ogsm }: Props) {
  return (
    <div className="grid grid-cols-5 gap-2">
      <Section title="Goal" className="col-span-5">
        <Card>
          <PaddingThing>
            <RichTextField content={ogsm?.objective} />
          </PaddingThing>
        </Card>
      </Section>
      <Section title="Goals" className="">
        <Card className="h-full">
          <PaddingThing>
            {ogsm?.goals.map((goal: Goal) => (
              <RichTextField content={goal.content} key={goal.id} />
            ))}
          </PaddingThing>
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
              <div className="border-r">
                <PaddingThing>
                  <RichTextField content={strategy.content} />
                </PaddingThing>
              </div>
              <div className="border-r">
                <PaddingThing>
                  {strategy.dashboard.map((dashboard: Dashboard) => (
                    <RichTextField
                      content={dashboard.content}
                      key={dashboard.id}
                    />
                  ))}
                </PaddingThing>
              </div>
              <div className="col-span-2">
                <PaddingThing>
                  {strategy.actions.map((action: Action) => (
                    <div key={action.id}>
                      <RichTextField content={action.content} />
                      <div className="inline-block rounded-sm bg-green-100 px-1 py-0.5 text-xs text-green-800">
                        {action.status}
                      </div>
                    </div>
                  ))}
                </PaddingThing>
              </div>
            </div>
          ))}
        </Card>
      </Section>
      <div className="col-span-4"></div>
    </div>
  );
}
