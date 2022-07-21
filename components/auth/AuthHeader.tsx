/**@jsx h */

import { h } from "preact";
import { tw } from "twind";

interface Props {
  text: string;
  linkName: string;
  linkHref: string;
}

export default function AuthHeader({ linkHref, linkName, text }: Props) {
  return (
    <section className={tw`flex flex-col space-y-2 items-center`}>
      <div className={tw`flex flex-col items-center space-y-2`}>
        <img className={tw`w-12 h-12`} src="/logo.svg" alt="Shop logo" />
        <h2 className={tw`text-xl font-bold`}>Fresh Shop</h2>
      </div>
      <p className={tw`font-medium text-sm text-gray-500`}>
        <span>{text}</span>
        <a className={tw`font-medium text-blue-400 ml-1`} href={linkHref}>
          {linkName}
        </a>
      </p>
    </section>
  );
}
