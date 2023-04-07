import Image from "next/image";
import React from "react";

type Props = {};

export default function Loading({}: Props) {
  return (
    <div className="h-fit mx-auto mt-32 bg-white">
      <div className="flex justify-center items-center h-full">
        <Image
          alt="loader"
          className="h-16 w-16"
          width={500}
          height={500}
          src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
        />
      </div>
    </div>
  );
}
