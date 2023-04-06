import Header from "../components/layout/Header";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Next 13 tutorial",
  description: "learn about next js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="w-full min-h-screen">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
