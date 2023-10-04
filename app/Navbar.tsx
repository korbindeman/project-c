import {
  BellIcon,
  Cog6ToothIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import Notifications from "./Notifications";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b p-3">
      <div className="w-1/3"></div>
      <div className="w-1/3">
        <input
          type="text"
          className="w-full rounded border px-2 py-1 text-sm outline-none transition hover:bg-gray-50 focus:bg-gray-50"
          placeholder="Search..."
        />
      </div>
      <div className="w-1/3">
        <ul className="flex justify-end gap-2">
          <div className="">
            <li className="cursor-pointer rounded-full bg-gray-100 p-2 transition hover:bg-gray-200">
              <Cog6ToothIcon className="h-5 w-5 text-gray-500" />
            </li>
          </div>
          <Notifications>
            <li className="relative cursor-pointer rounded-full bg-gray-100 p-2 transition hover:bg-gray-200">
              <BellIcon className="h-5 w-5 text-gray-500" />
            </li>
          </Notifications>
          <Link href={"/dashboard"}>
            <li className="cursor-pointer rounded-full bg-gray-100 p-2 transition hover:bg-gray-200">
              <UserCircleIcon className="h-5 w-5 text-gray-500" />
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
