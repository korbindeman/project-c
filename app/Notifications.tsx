"use client";

import Card from "@/components/Card";
import { Popover } from "@headlessui/react";
import { ReactNode } from "react";

function Notification() {
  return (
    <div className="cursor-pointer border-b px-2 py-4 hover:bg-gray-50">
      <div className="flex items-start gap-2">
        <div className="py-1.5">
          <div className="h-2 w-2 rounded-full bg-blue-400"></div>
        </div>
        <div className="">
          <h3 className="text-sm">Notification title</h3>
          <p className="text-xs text-gray-500">
            Notification description. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  );
}

type Props = { children: ReactNode };
export default function Notifications({ children }: Props) {
  return (
    <Popover className="relative">
      <Popover.Button>{children}</Popover.Button>

      <Popover.Panel className="absolute -right-1 top-10 z-10">
        <div className="w-80">
          <Card>
            <h2 className="border-b pb-3">Notifications</h2>
            <Notification />
            <Notification />
          </Card>
        </div>
      </Popover.Panel>
    </Popover>
  );
}
