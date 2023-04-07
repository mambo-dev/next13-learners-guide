import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

async function fetchRepos() {
  const response = await fetch("https://api.github.com/users/mambo-dev/repos", {
    next: {
      revalidate: 60,
    },
  });

  const repos = response.json();
  return repos;
}

type Props = {};

type Repo = {
  githubOwnerId: number;
  githubOwnerName: string;
  githubOwnerProfileLink: string;
  githubOwnerAvatarLink: string;
  githubRepoName: string;
  githubRepoLink: string;
  githubRepoCreatedAt: string;
  githubRepoHomePage: string;
  githubRepoId: number;
};

export default async function ReposPage({}: Props) {
  const repos = await fetchRepos();

  const showRepoDataAs: Repo[] = repos.map((repo: any) => {
    return {
      githubOwnerId: repo.owner.id,
      githubOwnerName: repo.owner.login,
      githubOwnerProfileLink: repo.owner.html_url,
      githubOwnerAvatarLink: repo.owner.avatar_url,
      githubRepoId: repo.id,
      githubRepoName: repo.name,
      githubRepoLink: repo.html_url,
      githubRepoCreatedAt: repo.created_at,
      githubRepoDescription: repo.description,
    };
  });
  return (
    <div className="flex flex-col items-center justify-center mx-auto w-full md:max-w-4xl ">
      <div className="w-full h-full py-8 gap-y-4 px-3">
        <h1 className="text-center text-3xl"> Github Repositories </h1>
        <ul className="flex flex-col items-center gap-y-4">
          {showRepoDataAs.map((repo) => {
            return (
              <li
                key={repo.githubRepoId}
                className="w-full  bg-white hover:shadow-lg shadow-md rounded-lg py-3 px-2 flex items-center justify-start gap-x-4"
              >
                <Link
                  href={`${repo.githubOwnerProfileLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-20 h-20 rounded-full bg-white"
                >
                  <Image
                    alt="profile link"
                    src={repo.githubOwnerAvatarLink}
                    width={500}
                    height={500}
                    className="w-full h-full rounded-full"
                    sizes=""
                  />
                </Link>
                <div className="flex flex-col flex-1 gap-y-2 text-slate-700 items-center justify-start text-left">
                  <Link
                    href={`/code/repos/${repo.githubRepoName}`}
                    className="font-semibold  mr-auto"
                  >
                    {repo.githubRepoName}
                  </Link>
                  <p className="text-left mr-auto font-medium text-sm">
                    {repo.githubOwnerName}
                  </p>
                  <div className="w-full  flex items-center justify-end ml-auto">
                    <Link
                      href={`${repo.githubOwnerProfileLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white"
                    >
                      <button className="outline-none w-full h-full inline-flex items-center justify-center">
                        <HiOutlineArrowTopRightOnSquare className="w-6 h-6" />
                      </button>
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
