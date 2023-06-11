import Image from "next/image";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Matt's Website",
  description: "Matt March's personal website/blog.",
};

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Hero />
        <main>{children}</main>
        <footer className="flex flex-col m-4 h-9 justify-between items-stretch text-center dark:text-slate-400 text-slate-800">
          <hr className="border-slate-600" />© 2020 Matt March
        </footer>
      </body>
    </html>
  );
};

const Hero = () => (
  <header className="h-80 relative">
    <div className="-z-10">
      <Image
        priority
        src="/bridge.jpg"
        fill
        alt="Photo of the Clifton Suspension Bridge"
        className="object-cover object-[center_25%]"
      />
    </div>
    <div className="relative flex flex-row justify-between h-full items-center p-24 text-3xl font-bold bg-gradient-to-tr from-[#02061788]">
      <a href="/" className="text-white">
        Matt&apos;s Website
      </a>
    </div>
  </header>
);
