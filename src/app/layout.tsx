import { IconLove, IconNextJS, IconReact, IconTailwindCss } from "app/components/Icons"

import { Header } from "app/components/Header"
import { Metadata } from "next"
import Script from "next/script"
import {config} from "config/sitemap"

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  metadataBase: new URL(config.siteURL),
  twitter: {
    card: "summary",
    creator: config.twitterHandle,
  },
  openGraph: {
    siteName: "poladuco.com",
    title: config.title,
    description: config.description,
    type: "website"
  },
}

const ANALYTICS_ENABLED = process.env.NODE_ENV === "production"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {ANALYTICS_ENABLED &&
        <Script data-goatcounter="https://poladuco.goatcounter.com/count"
                async
                src="//gc.zgo.at/count.js"/>
      }
      <body>
      <div className="min-h-screen bg-backgroundSecondary">
        <div className="flex flex-col min-h-screen m-auto bg-backgroundPrimary md:w-2/3 xl:w-3/5">
          <><Header/>{children}</>
          </div>
          </div>
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
          </body>
    </html>
  )
}