import hrLogo from "@/public/hr-logo.svg";
import {
  ArrowLeftOnRectangleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b p-3">
      <div className="flex items-center justify-between">
        <div className="w-1/3">
          <Link href={"/dashboard"}>
            <Image className="h-12 w-12" src={hrLogo} alt="Hogeschool logo" />
          </Link>
        </div>
        <div className="w-1/3">
          <ul className="flex justify-end gap-2">
            <div className="">
              <li className="cursor-pointer rounded-full bg-neutral-100 p-2 transition hover:bg-neutral-200">
                <Cog6ToothIcon className="h-5 w-5 text-neutral-500" />
              </li>
            </div>
            {/* <Notifications>
              <li className="relative cursor-pointer rounded-full bg-neutral-100 p-2 transition hover:bg-neutral-200">
                <BellIcon className="h-5 w-5 text-neutral-500" />
              </li>
            </Notifications> */}
            <Link href={"/api/auth/signout"}>
              <li className="cursor-pointer rounded-full bg-neutral-100 p-2 transition hover:bg-neutral-200">
                <ArrowLeftOnRectangleIcon className="h-5 w-5 text-neutral-500" />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
