import React from "react";

type Props = {
  children: any;
};

export const metadata = {
  title: "Next 13 tutorial",
  description: "about this application",
  keywords: ["web development, web design, javascript, nextjs, react, angular"],
};

export default function AboutLayout({ children }: Props) {
  return (
    <div>
      <h1>this is the about layout</h1>
      {children}
    </div>
  );
}
