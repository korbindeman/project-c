import { Input } from "@/components/ui/input";
import {
  BellIcon,
  Cog6ToothIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import Notifications from "./Notifications";

export default function Navbar() {
  return (
    <nav className="border-b p-3">
      <div className="flex items-center justify-between">
        <div className="w-1/3"></div>
        <div className="w-1/3">
          <Input type="text" className="shadow-none" placeholder="Search..." />
        </div>
        <div className="w-1/3">
          <ul className="flex justify-end gap-2">
            <div className="">
              <li className="cursor-pointer rounded-full bg-neutral-100 p-2 transition hover:bg-neutral-200">
                <Cog6ToothIcon className="h-5 w-5 text-neutral-500" />
              </li>
            </div>
            <Notifications>
              <li className="relative cursor-pointer rounded-full bg-neutral-100 p-2 transition hover:bg-neutral-200">
                <BellIcon className="h-5 w-5 text-neutral-500" />
              </li>
            </Notifications>
            <Link href={"/dashboard"}>
              <li className="cursor-pointer rounded-full bg-neutral-100 p-2 transition hover:bg-neutral-200">
                <UserCircleIcon className="h-5 w-5 text-neutral-500" />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
