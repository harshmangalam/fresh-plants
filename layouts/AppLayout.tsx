/**@jsx h */

import { Head } from "$fresh/runtime.ts";
import { ComponentChildren, h } from "preact";
import { tw } from "twind";
import CartIcon from "@icons/CartIcon.tsx"

interface Props {
  children: ComponentChildren;
  title: string;
}
export default function AppLayout({ children, title }: Props) {
  return (
    <div className={tw`min-h-screen bg-gray-100`}>
      <Head>
        <title>{title}</title>
      </Head>
      <nav className={tw`bg-white`}>
        <div
          className={tw`flex items-center justify-between h-16 max-w-6xl mx-auto`}
        >
          <a href="/" className={tw`flex space-x-3 items-center`}>
            <img className={tw`w-10 h-10`} src="/logo.svg" alt="Shop logo" />
            <h1 className={tw`text-2xl font-medium`}>Fresh Plants</h1>
          </a>

          <div>
            <a href="/cart" className={tw``}>
              <CartIcon />
            </a>
          </div>
        </div>
      </nav>
      <main className={tw`py-4 px-4 max-w-6xl mx-auto`}>{children}</main>
    </div>
  );
}
