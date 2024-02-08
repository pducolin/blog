import { IconGithub, IconRSS, IconTwitter } from "app/components/Icons"

import Image from "next/image"
import Link from "next/link"
import React from "react"

export const Header = () => {
  return (
    <header className="flex items-center flex-none p-2 bg-primary h-14">
      <nav className="flex items-center justify-between w-full h-full font-mono">
        <Link
          href="/"
          className="box-border h-full transition duration-500 ease-in-out border-2 rounded-full outline-none border-primary hover:opacity-70 focus:opacity-70 focus:outline-none hover:border-frontPrimary focus:border-frontPrimary">

          <Image
            title="home"
            className="h-full rounded-full object-cover"
            alt="poladuco"
            height={36}
            width={36}
            src="https://github.com/pducolin.png"
          />

        </Link>
        <div className="flex flex-row justify-center flex-grow space-x-8 justify-self-center md:space-x-20">
          <Link
            href="/"
            title="home"
            className="p-1 transition duration-500 ease-in-out border-b-2 border-opacity-0 outline-none text-frontSecondary hover:text-frontPrimary focus:text-frontPrimary border-frontPrimary hover:border-opacity-100 focus:border-opacity-100">
            
              Home
            
          </Link>
          <span className="pointer-events-none text-frontSecondary">|</span>
          <Link
            href="/about"
            title="about"
            className="p-1 transition duration-500 ease-in-out border-b-2 border-opacity-0 outline-none text-frontSecondary hover:text-frontPrimary focus:text-frontPrimary border-frontPrimary hover:border-opacity-100 focus:border-opacity-100">
            
              About
            
          </Link>
        </div>
        <div className="flex flex-row mr-2 space-x-1 md:space-x-2">
          <a
            href="https://twitter.com/poladuco"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 transition duration-500 ease-in-out border-b-2 border-opacity-0 outline-none border-frontPrimary hover:border-opacity-100 focus:border-opacity-100"
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
            className="p-1 transition duration-500 ease-in-out border-b-2 border-opacity-0 outline-none border-frontPrimary hover:border-opacity-100 focus:border-opacity-100 "
          >
            <IconGithub
              size="20px"
              className="fill-current text-frontSecondary hover:fill-current hover:text-frontPrimary focus:border-opacity-100 focus:fill-current focus:text-frontPrimary"
            />
          </a>
          <Link
            href="/rss.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 transition duration-500 ease-in-out border-b-2 border-opacity-0 outline-none border-frontPrimary hover:border-opacity-100 focus:border-opacity-100 "
          >
            <IconRSS
              size="20px"
              className="fill-current text-frontSecondary hover:fill-current hover:text-frontPrimary focus:border-opacity-100 focus:fill-current focus:text-frontPrimary"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
}
