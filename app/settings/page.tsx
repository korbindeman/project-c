import Link from "next/link";

export default async function Settings() {
  return (
    <div className="flex">
      <div>
        <div
          className="menu"
          style={{
            backgroundColor: "#f0f0f0",
            padding: "10px",
            border: "1px solid #ccc",
          }}
        >
          <Link href="settings/account">
            <li className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
              Account
            </li>
          </Link>
          <Link href="settings/appearance">
            <li className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
              Appearance
            </li>
          </Link>
          <Link href="settings/notifications">
            <li className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
              Notifications
            </li>
          </Link>
          <Link href="settings/advanced_settings">
            <li className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
              Advanced Settings
            </li>
          </Link>
        </div>
        <div className="flex-1 p-4"></div>
      </div>
    </div>
  );
}
