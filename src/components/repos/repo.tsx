import React from "react";

type Props = {
  name: string;
};

async function fetchRepo(name: string) {
  const response = await fetch(
    `https://api.github.com/repos/mambo-dev/${name}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const repo = response.json();

  return repo;
}

export default async function Repo({ name }: Props) {
  const repo = await fetchRepo(name);

  return (
    <div className="text-slate-700">
      <h1 className="font-semibold">{repo.name}</h1>
      <p className="text-left mr-auto font-medium text-sm">
        {repo.owner.login}
      </p>
    </div>
  );
}
