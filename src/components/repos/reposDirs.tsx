import Link from "next/link";
import React from "react";

type Props = { name: string };

async function fetchRepoContents(name: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(
    `https://api.github.com/repos/mambo-dev/${name}/contents`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const contents = response.json();

  return contents;
}

export default async function RepoDirs({ name }: Props) {
  const contents = await fetchRepoContents(name);
  const dirs: any[] = contents.filter((content: any) => content.type === "dir");

  return (
    <>
      <h3 className="text-sm font-medium text-slate-600">directories</h3>
      <ul className="list-disc px-4">
        {dirs.map((dir: any) => {
          return (
            <li key={dir.path}>
              <Link
                className="text-blue-500 hover:underline hover:text-blue-500 font-semibold text-sm"
                href={`${dir.html_url}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {dir.path}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
