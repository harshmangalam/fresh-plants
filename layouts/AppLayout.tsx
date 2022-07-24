/**@jsx h */

import { Head } from "$fresh/runtime.ts";
import { ComponentChildren, h } from "preact";
import { tw } from "twind";

interface Props {
  children: ComponentChildren;
  title:string
}
export default function AppLayout({ children ,title}: Props) {
  return (
    <div className={tw`min-h-screen bg-gray-100`}>
      <Head>
        <title>{title}</title>
      </Head>
      <main className={tw`py-4 px-4 max-w-6xl mx-auto`}>{children}</main>
    </div>
  );
}
