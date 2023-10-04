import { Popover, Transition } from "@headlessui/react";
import Card from "./Card";
import { Fragment, ReactNode } from "react";

type Props = { button: ReactNode; children?: ReactNode };
export default function Dropdown({ button, children }: Props) {
  return (
    <Popover className="relative">
      <Popover.Button as="div">{button}</Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-1"
      >
        <Popover.Panel className="absolute -right-1 top-10 z-10">
          <div className="w-96">
            <Card>{children}</Card>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
