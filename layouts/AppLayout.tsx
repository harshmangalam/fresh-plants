/**@jsx h */

import { ComponentChildren, h } from "preact";
import { tw } from "twind";

interface Props {
  children: ComponentChildren;
}
export default function AppLayout({ children }: Props) {
  return (
    <div className={tw`min-h-screen bg-gray-100`}>
      <main className={tw`py-4`}>{children}</main>
    </div>
  );
}
