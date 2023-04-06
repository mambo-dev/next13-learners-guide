import Link from "next/link";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen px-2">
      <h1>welcome next js</h1>
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
            href="/about"
          >
            about
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
