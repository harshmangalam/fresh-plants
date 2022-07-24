/** @jsx h */

import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";
import { h } from "preact";
import { tw } from "twind";
import { AuthContext } from "../context/auth.tsx";
import CartIcon from "@icons/CartIcon.tsx";
import ProfileIcon from "@icons/ProfileIcon.tsx";
import { useState } from "preact/hooks";

export default function App(props: AppProps) {
  const [currentUser, setCurrentUser] = useState({name:"Harsh"});

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className={tw`min-h-screen bg-gray-100`}>
        <Head>
          <meta name="description" content="Fresh Plants" />
        </Head>
        {/* navbar  */}
        <nav className={tw`bg-white`}>
          <div
            className={tw`flex items-center justify-between h-16 max-w-6xl mx-auto px-4`}
          >
            <a href="/" className={tw`flex space-x-3 items-center`}>
              <img className={tw`w-10 h-10`} src="/logo.svg" alt="Shop logo" />
              <h1 className={tw`text-2xl font-medium`}>Fresh Plants</h1>
            </a>

            <div className={tw`flex items-center space-x-4`}>
              <a href="/cart" className={tw``}>
                <CartIcon />
              </a>

              <a
                href={currentUser ? "/profile" : "/auth"}
                className={tw`flex gap-2 items-center`}
              >
                <ProfileIcon />
                {currentUser?.name}
              </a>
            </div>
          </div>
        </nav>
        <main className={tw`py-4 px-4 max-w-6xl mx-auto`}>
          <props.Component />
        </main>
      </div>
    </AuthContext.Provider>
  );
}
