import { IconLove, IconNextJS, IconReact, IconTailwindCss } from "@components/Icons"

import Head from "next/head"
import { Header } from "@components/Header"

const ANALYTICS_ENABLED = process.env.NODE_ENV === "production"

export const Layout = ({ children, pageTitle, currentURL, description, previewImage, isPost }) => {
  return (
    <>
      <div className="min-h-screen bg-backgroundSecondary">
        <div className="flex flex-col min-h-screen m-auto bg-backgroundPrimary md:w-2/3 xl:w-3/5">
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content={description} />
            {/* Twitter */}
            <meta name="twitter:card" content="summary" key="twcard" />
            <meta name="twitter:creator" content="@PolaDuco" key="twhandle" />

            {/* Open Graph */}
            <meta property="og:url" content={currentURL} key="ogurl" />
            <meta property="og:image" content={previewImage} key="ogimage" />
            <meta property="og:site_name" content="poladuco.com" key="ogsitename" />
            <meta property="og:title" content={pageTitle} key="ogtitle" />
            <meta property="og:description" content={description} key="ogdesc" />
            <meta property="og:type" content={isPost ? "article" : "website"} key="ogtype" />

            {ANALYTICS_ENABLED && (
              <script
                data-host="https://microanalytics.io"
                data-dnt="false"
                src="https://microanalytics.io/js/script.js"
                id="ZwSg9rf6GA"
                async
                defer
              />
            )}

            <title>{pageTitle}</title>
          </Head>

          <section className="flex-grow h-full">
            <Header />
            <div>{children}</div>
          </section>
          <footer className="flex flex-row justify-center flex-grow-0 h-10 gap-2 p-2 font-sans text-sm align-text-bottom bg-secondary text-frontPrimary">
            Built with <IconReact size={22} />
            {" | "}
            <IconNextJS size={22} />
            {" | "}
            <IconTailwindCss size={22} />
            {" and "}
            <IconLove size={22} />
            {" by "}
            <span className="font-mono">poladuco</span>
          </footer>
        </div>
      </div>
    </>
  )
}
