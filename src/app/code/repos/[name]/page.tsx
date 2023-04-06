import React from "react";

type Props = {
  params: any;
};

export default function Repo({ params }: Props) {
  const { name } = params;
  return (
    <div className="max-w-6xl bg-white mx-auto py-4 mt-10 shadow-md px-3 rounded-md">
      {name}
    </div>
  );
}
