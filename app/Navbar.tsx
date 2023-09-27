import Link from "next/link";

function Tab() {
  return <div className="rounded-md bg-gray-200 px-4 py-2">Tab</div>;
}

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b p-4">
      <div className="flex items-center gap-2">
        <Link href="/">OGSM</Link>
        <ul className="flex gap-2">
          <Tab />
          <Tab />
          <Tab />
        </ul>
      </div>
      <ul className="flex gap-2">
        <li className="">
          <Link href="/">Profile</Link>
        </li>
        <li className="">
          <Link href="/">Test</Link>
        </li>
        <li className="">
          <Link href="/">Settings</Link>
        </li>
      </ul>
    </nav>
  );
}
