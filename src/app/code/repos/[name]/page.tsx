import React, { Suspense } from "react";
import Repo from "../../../../components/repos/repo";
import Link from "next/link";
import RepoDirs from "../../../../components/repos/reposDirs";
import Loading from "../../../loading";

type Props = {
  params: any;
};

export default async function RepoPage({ params }: Props) {
  const { name } = params;

  return (
    <div className="max-w-6xl bg-white mx-auto py-4 mt-10 shadow-md px-3 rounded-md flex flex-col gap-y-3">
      <Link href="/code/repos" className="w-48 mr-auto">
        <button className=" px-3 py-2 inline-flex items-center justify-center bg-transparent border border-slate-500 text-slate-900 font-medium hover:bg-blue-500 hover:text-white hover:border-blue-400 text-sm rounded-md">
          back to repositories
        </button>
      </Link>
      <Suspense fallback={<Loading />}>
        {/* @ts-expect-error Async Server Component */}
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div className="italic">Loading directories...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
}
