/**@jsx h */

import { ComponentChildren, h } from "preact";
import { tw } from "twind";
import GraphIcon from "@icons/GraphIcon.tsx";
import ProductIcon from "@icons/ProductIcon.tsx";
import UserIcon from "@icons/UserIcon.tsx";
import SettingIcon from "@icons/SettingIcon.tsx";
import OrderIcon from "@icons/OrderIcon.tsx";
interface Props {
  children: ComponentChildren;
}
export default function AdminLayout({ children }: Props) {
  return (
    <div className={tw`flex`}>
      {/* sidebar  */}
      <aside className={tw`bg-white max-w-xs w-full h-screen p-6  shadow`}>
        <section className={tw`flex flex-col space-y-6`}>
          {/* logo  */}
          <a href="/" className={tw`flex space-x-3 items-center`}>
            <img className={tw`w-10 h-10`} src="/logo.svg" alt="Shop logo" />
            <h1 className={tw`text-xl font-bold`}>Dashboard</h1>
          </a>

          {/* menu items  */}

          <div className={tw`flex flex-col space-y-3`}>
            {menus.map((menu) => (
              <a
                href={menu.href}
                className={tw`font-medium text-gray-500 hover:text-gray-900 flex items-center space-x-2 py-3 px-2 hover:bg-gray-100 rounded-md transition ease-in-out  duration-300`}
              >
                <div>{menu.icon}</div>
                <p>{menu.name}</p>
              </a>
            ))}
          </div>
        </section>
      </aside>
      <main className={tw`w-full `}>
        <nav className={tw`flex justify-end items-center p-6 `}>
          <div className={tw`flex space-x-6 items-center `}>
            <div className={tw`relative`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={tw`w-8 h-8`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>

              <span
                className={tw`animate-bounce absolute w-2 h-2 rounded-full bg-red-500 top-2 right-1`}
              ></span>
            </div>
            <a
              href="/admin/profile"
              className={tw`flex items-center space-x-3`}
            >
              <img
                src="https://avatars.githubusercontent.com/u/57381638?v=4"
                alt="profile avatar"
                className={tw`w-8 h-8 rounded-full`}
              />
              <h2 className={tw`font-medium text-gray-500`}>Harsh Mangalam</h2>
            </a>
          </div>
        </nav>
        <div className={tw`px-6`}>{children}</div>
      </main>
    </div>
  );
}

const menus = [
  {
    name: "Overview",
    icon: <GraphIcon />,
    href: "/admin",
  },
  {
    name: "Plants",
    icon: <ProductIcon />,
    href: "/admin/plants",
  },
  {
    name: "Customers",
    icon: <UserIcon />,
    href: "admin/customers",
  },
  {
    name: "Orders",
    icon: <OrderIcon />,
    href: "admin/orders",
  },

  {
    name: "Settings",
    icon: <SettingIcon />,
    href: "/admin/settings",
  },
];
