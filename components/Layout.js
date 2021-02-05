import Head from "next/head";
import { Header } from "@components/Header";
import { IconLove, IconNextJS, IconReact, IconTailwindCss } from "./Icons";

export const Layout = ({ children, pageTitle, ...props }) => {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>
      <section className="h-full">
        <Header />
        <div>{children}</div>
      </section>
      <footer className="flex flex-row gap-2 h-10 bg-secondary text-frontPrimary p-2 text-sm align-text-bottom font-mono">
        Built with <IconReact size={22} /> | <IconNextJS size={22} /> |
        <IconTailwindCss size={22} />
        and <IconLove size={22} /> by poladuco
      </footer>
    </div>
  );
};
