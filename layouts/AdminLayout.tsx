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
    <div className={tw`grid grid-cols-12 bg-white`}>
      {/* dashboard sidebar */}
      <aside className={tw`col-span-4 p-4 border-r`}>
        <section className={tw`flex flex-col space-y-6`}>
         
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
      <div className={tw`p-4 col-span-8`}>{children}</div>
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
