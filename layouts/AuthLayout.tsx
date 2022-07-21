/**@jsx h */

import { ComponentChildren, h } from "preact";
import { tw } from "twind";

interface Props {
  children: ComponentChildren;
}
export default function AuthLayout({ children }: Props) {
  return (
    <div className={tw`min-h-screen bg-gray-100 grid place-items-center`}>
     {children}
    </div>
  );
}
