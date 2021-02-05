import Head from "next/head";
import { Header } from "@components/Header";
import { IconLove, IconNextJS, IconReact, IconTailwindCss } from "./Icons";

export const Layout = ({ children, pageTitle, ...props }) => {
  return (
    <div className="flex flex-col h-screen w-full md:w-2/3 xl:1/2 m-auto">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>
      <section className="h-full">
        <Header />
        <div>{children}</div>
      </section>
      <footer className="flex flex-row gap-2 h-10 bg-secondary text-frontPrimary p-2 text-sm align-text-bottom font-sans justify-center">
        Built with <IconReact size={22} /> | <IconNextJS size={22} /> |
        <IconTailwindCss size={22} />
        and <IconLove size={22} /> by <span className='font-mono'>poladuco</span>
      </footer>
    </div>
  );
};
