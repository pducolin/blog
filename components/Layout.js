import Head from "next/head";
import { Header } from "@components/Header";
import {
  IconLove,
  IconNextJS,
  IconReact,
  IconTailwindCss,
} from "@components/Icons";

export const Layout = ({ children, pageTitle, ...props }) => {
  return (
    <>
      <div className="min-h-screen bg-backgroundSecondary">
        <div className="flex flex-col min-h-screen m-auto bg-backgroundPrimary md:w-2/3 xl:1/2">
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <title>{pageTitle}</title>
          </Head>
          <section className="flex-grow h-full">
            <Header />
            <div>{children}</div>
          </section>
          <footer className="flex flex-row justify-center flex-grow-0 h-10 gap-2 p-2 font-sans text-sm align-text-bottom bg-secondary text-frontPrimary">
            Built with <IconReact size={22} /> | <IconNextJS size={22} /> |
            <IconTailwindCss size={22} />
            and <IconLove size={22} /> by{" "}
            <span className="font-mono">poladuco</span>
          </footer>
        </div>
      </div>
    </>
  );
};
