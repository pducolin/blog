import Link from "next/link";
import { IconTwitter, IconGithub } from "./Icons";

export const Header = () => {
  return (
    <header className="bg-primary flex items-center h-14 p-2">
      <nav className="h-full w-full flex items-center justify-between font-mono">
        <Link href="/">
          <a className="h-full">
            <img
              className="rounded-full border-frontSecondary border-2 hover:opacity-70 focus:opacity-70 focus:outline-none h-full hover:border-frontPrimary focus:border-frontPrimary  box-border"
              alt="poladuco"
              src="https://github.com/pducolin.png"
            />
          </a>
        </Link>
        <div className="flex flex-row flex-grow justify-self-center space-x-8 md:space-x-28 justify-center">
          <Link href="/">
            <a className=" text-frontSecondary hover:text-frontPrimary focus:text-frontPrimary hover:underline focus:underline">
              Home
            </a>
          </Link>
          <span className="text-frontSecondary pointer-events-none">|</span>
          <Link href="/about">
            <a className=" text-frontSecondary hover:text-frontPrimary focus:text-frontPrimary hover:underline focus:underline">
              About
            </a>
          </Link>
        </div>
        <div className="flex flex-row space-x-1 md:space-x-2 mr-2">
          <a
            href="https://twitter.com/poladuco"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b-2 border-opacity-0 border-frontPrimary hover:border-opacity-100 p-1"
          >
            <IconTwitter
              size="20px"
              className="fill-current text-frontSecondary hover:fill-current hover:text-frontPrimary focus:fill-current focus:text-frontPrimary"
            />
          </a>
          <a
            href="https://github.com/pducolin"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b-2 border-opacity-0 border-frontPrimary hover:border-opacity-100 p-1 transition duration-500 ease-in-out "
          >
            <IconGithub
              size="20px"
              className="fill-current text-frontSecondary hover:fill-current hover:text-frontPrimary focus:fill-current focus:text-frontPrimary"
            />
          </a>
        </div>
      </nav>
    </header>
  );
};
