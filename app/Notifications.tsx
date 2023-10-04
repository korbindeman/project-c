"use client";

import Card from "@/components/Card";
import Dropdown from "@/components/Dropdown";
import { Popover } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { ReactNode } from "react";

function Notification() {
  return (
    <div className="cursor-pointer border-b px-2 py-4 last:border-b-0 hover:bg-gray-50">
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
    <Dropdown
      button={
        <>
          {children}{" "}
          <span className="absolute right-0 top-0 inline-flex -translate-y-1/4 translate-x-1/4 transform items-center justify-center rounded-full bg-red-600 px-1.5 py-1 text-xs font-bold leading-none text-red-100">
            2
          </span>
        </>
      }
    >
      <div className="flex items-center justify-between pb-3">
        <h2 className="">Notifications</h2>
        <span className="flex cursor-pointer items-center p-1 text-xs font-semibold text-blue-500 transition hover:text-blue-600">
          <CheckIcon className="h-4 w-4" />
          Mark as read
        </span>
      </div>
      <div className="max-h-72 overflow-y-auto rounded border">
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
      </div>
    </Dropdown>
  );
}