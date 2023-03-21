import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <header className="justify-between p-2 bg-slate-50 drop-shadow flex items-center">
        <Link href="/Homepage/Homepage">
          <Image
            src={require("../public/橫LOGO.svg")}
            alt="logo"
            width={250}
          ></Image>
        </Link>
        <div className="text-right mr-8">
          <button className="bg-[#c0c0c0] rounded-md font-mono text-white hover:bg-gray-400">
            <Link href="/Login/Login">Login</Link>
          </button>
        </div>
      </header>
    </div>
  );
}
