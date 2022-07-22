/**@jsx h */

import { ComponentChildren, h } from "preact";
import { tw } from "twind";

interface Props {
  children: ComponentChildren;
}
export default function AdminLayout({ children }: Props) {
  return (
    <div className={tw`h-screen flex`}>
      {/* sidebar  */}
      <aside
        className={tw`bg-white max-w-xs w-full h-full flex flex-col justify-between`}
      >
        <section className={tw`flex flex-col space-y-6`}>

            {/* logo  */}
          <a href="/" className={tw`flex space-x-3 items-center`}>
            <img className={tw`w-10 h-10`} src="/logo.svg" alt="Shop logo" />
            <h2 className={tw`text-xl font-bold`}>Dashboard</h2>
          </a>

            {/* menu items  */}


        </section>

        <section></section>
      </aside>
      <main>
        <nav className={``}></nav>
      </main>
    </div>
  );
}

