/**@jsx h */

import { ComponentChildren, h } from "preact";
import { tw } from "twind";
import GraphIcon from "@icons/GraphIcon.tsx";
import ProductIcon from "@icons/ProductIcon.tsx";
import UserIcon from "@icons/UserIcon.tsx";
import SettingIcon from "@icons/SettingIcon.tsx";
import OrderIcon from "@icons/OrderIcon.tsx";
import NotificationIcon from "@icons/Notificationicon.tsx";
interface Props {
  children: ComponentChildren;
  pathname: string;
}
export default function AdminLayout({ children, pathname }: Props) {
  return (
    <div>
      {/* dashboard sidebar */}
      <aside
        className={tw`absolute top-0 left-0 bottom-0 overflow-y-auto bg-white w-[20%]  p-6  shadow`}
      >
        <section className={tw`flex flex-col space-y-6`}>
          {/*  dashboard sidebar logo  */}
          <a href="/" className={tw`flex space-x-3 items-center`}>
            <img className={tw`w-10 h-10`} src="/logo.svg" alt="Shop logo" />
            <h1 className={tw`text-xl font-bold`}>Dashboard</h1>
          </a>

          {/* dashboard sidebar menu links  */}

          <div className={tw`flex flex-col space-y-3`}>
            {menus.map((menu) => (
              <a
                href={menu.href}
                className={tw`${
                  pathname === menu.href
                    ? "text-gray-900 bg-gray-100"
                    : "text-gray-500"
                } font-medium  hover:text-gray-900 flex items-center space-x-2 py-3 px-2 hover:bg-gray-100 rounded-md transition ease-in-out  duration-300`}
              >
                <div>{menu.icon}</div>
                <p>{menu.name}</p>
              </a>
            ))}
          </div>
        </section>
      </aside>

      {/* dashboard main content  */}
      <main className={tw`ml-[20%] h-screen overflow-y-auto pb-4`}>
        {/* dashboard navbar  */}
        <nav className={tw`flex justify-end items-center p-6 `}>
          <div className={tw`flex space-x-6 items-center `}>
            <div className={tw`relative`}>
              <NotificationIcon />

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
    href: "/admin/customers",
  },
  {
    name: "Orders",
    icon: <OrderIcon />,
    href: "/admin/orders",
  },

  {
    name: "Settings",
    icon: <SettingIcon />,
    href: "/admin/settings",
  },
];
