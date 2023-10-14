import RichTextField from "@/components/RichTextField";
import { Action } from "@prisma/client";

type Props = { action: Action };
export default function Action({ action }: Props) {
  return (
    <div className="rounded p-2 transition hover:bg-neutral-50">
      <RichTextField content={action.content} />
      <div className="inline-block rounded-sm bg-green-100 px-1 py-0.5 text-xs text-green-800">
        {action.status}
      </div>
    </div>
  );
}
