import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="h-16 bg-primary flex items-center">
        <nav className="ml-1 h-full w-6/12 sm:w-4/12 py-1 flex items-center space-x-8 font-mono">
          <Link href="/">
            <a className="h-full">
              <img
                className="rounded-full border-frontSecondary hover:border-secondary focus:border-secondary h-full border-2  box-border"
                alt="poladuco"
                src="https://github.com/pducolin.png"
              />
            </a>
          </Link>{" "}
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
        </nav>
      </header>
    </>
  );
}
