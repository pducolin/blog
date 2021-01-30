import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="h-16 bg-primary flex items-center">
        <nav className="ml-1 h-full w-full py-1 flex items-center justify-between font-mono">
          <Link href="/">
            <a className="h-full">
              <img
                className="rounded-full border-frontSecondary hover:border-secondary focus:border-secondary h-full border-2  box-border"
                alt="poladuco"
                src="https://github.com/pducolin.png"
              />
            </a>
          </Link>
          <div className="flex flex-row flex-grow justify-self-center space-x-8 md:space-x-28 justify-center">
            <Link href="/">
              <a className=" text-frontSecondary hover:text-secondary focus:text-secondary">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className=" text-frontSecondary hover:text-secondary focus:text-secondary">
                About
              </a>
            </Link>
          </div>
          <div>Twitter | Github</div>
        </nav>
      </header>
    </>
  );
}
