"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// import { Popover, Transition } from "@headlessui/react";
import { ReactNode } from "react";

type Props = { button: ReactNode; children?: ReactNode };
export default function Dropdown({ button, children }: Props) {
  return (
    <Popover>
      <PopoverTrigger>{button}</PopoverTrigger>

      <PopoverContent className="">
        {/* <Card className="p-4"> */}
        {children}
        {/* </Card> */}
      </PopoverContent>
    </Popover>
  );
}
