import Link from "next/link";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="h-20 bg-white shadow-md ">
      <div className="w-full h-full flex md:flex-row flex-col items-center justify-center  md:justify-between px-4">
        <div className="w-full flex items-center justify-center md:w-1/4 ">
          <Link href="/" className="text-3xl leading-wide text-blue-500">
            Michaels Next Js
          </Link>
        </div>
        <div className="w-fit flex items-center gap-x-4">
          <Link href="/about">about</Link>
          <Link href="/about/team">our team</Link>
          <Link href="/code/repos">code</Link>
        </div>
      </div>
    </header>
  );
}
