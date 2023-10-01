import { BellIcon, Cog6ToothIcon } from "@heroicons/react/20/solid";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b p-3">
      <div className="w-1/3"></div>
      <div className="w-1/3">
        <input
          type="text"
          className="w-full rounded border px-2 py-1 text-sm"
          placeholder="Search..."
        />
      </div>
      <div className="flex w-1/3 justify-end gap-2">
        <div className="relative cursor-pointer rounded-full bg-gray-100 p-2 transition hover:bg-gray-200">
          <BellIcon className="h-5 w-5 text-gray-500" />
          <span className="absolute right-0 top-0 inline-flex -translate-y-1/4 translate-x-1/4 transform items-center justify-center rounded-full bg-red-600 px-1.5 py-1 text-xs font-bold leading-none text-red-100">
            2
          </span>
        </div>
        <div className="cursor-pointer rounded-full bg-gray-100 p-2 transition hover:bg-gray-200">
          <Cog6ToothIcon className="h-5 w-5 text-gray-500" />
        </div>
      </div>
    </nav>
  );
}
