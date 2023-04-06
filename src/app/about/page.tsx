import Link from "next/link";
import React from "react";

type Props = {};

export default function AboutPage({}: Props) {
  return (
    <div>
      {" "}
      <h1>about michael</h1>
      <ul className="px-4">
        <li>
          <Link
            className="text-blue-500 hover:text-blue-600 hover:underline"
            href="/"
          >
            home
          </Link>
        </li>

        <li>
          <Link
            className="text-blue-500 hover:text-blue-600 hover:underline"
            href="/about/team"
          >
            team
          </Link>
        </li>
      </ul>
    </div>
  );
}
