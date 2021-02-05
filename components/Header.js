import Link from "next/link";
import { IconTwitter, IconGithub } from "./Icons";

export const Header = () => {
  return (
    <header className="bg-primary flex items-center h-14 p-2">
      <nav className="h-full w-full flex items-center justify-between font-mono">
        <Link href="/">
          <a className="h-full outline-none border-primary border-2 rounded-full hover:opacity-70 focus:opacity-70 focus:outline-none hover:border-frontPrimary focus:border-frontPrimary box-border transition duration-500 ease-in-out">
            <img
              title="home"
              className="rounded-full h-full"
              alt="poladuco"
              src="https://github.com/pducolin.png"
            />
          </a>
        </Link>
        <div className="flex flex-row flex-grow justify-self-center space-x-8 md:space-x-20 justify-center">
          <Link href="/">
            <a title='home' alt='home' className="outline-none text-frontSecondary hover:text-frontPrimary focus:text-frontPrimary border-b-2 border-opacity-0 border-frontPrimary hover:border-opacity-100 focus:border-opacity-100 p-1 transition duration-500 ease-in-out">
              Home
            </a>
          </Link>
          <span className="text-frontSecondary pointer-events-none">|</span>
          <Link href="/about">
            <a title='about' alt='about' className="outline-none text-frontSecondary hover:text-frontPrimary focus:text-frontPrimary border-b-2 border-opacity-0 border-frontPrimary hover:border-opacity-100 focus:border-opacity-100 p-1 transition duration-500 ease-in-out">
              About
            </a>
          </Link>
        </div>
        <div className="flex flex-row space-x-1 md:space-x-2 mr-2">
          <a
            href="https://twitter.com/poladuco"
            target="_blank"
            rel="noopener noreferrer"
            className="outline-none border-b-2 border-opacity-0 border-frontPrimary hover:border-opacity-100 focus:border-opacity-100 p-1 transition duration-500 ease-in-out"
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
            className="outline-none border-b-2 border-opacity-0 border-frontPrimary hover:border-opacity-100 focus:border-opacity-100 p-1 transition duration-500 ease-in-out "
          >
            <IconGithub
              size="20px"
              className="fill-current text-frontSecondary hover:fill-current hover:text-frontPrimary focus:border-opacity-100 focus:fill-current focus:text-frontPrimary"
            />
          </a>
        </div>
      </nav>
    </header>
  );
};
