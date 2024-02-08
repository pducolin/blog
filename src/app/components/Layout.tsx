// import { IconLove, IconNextJS, IconReact, IconTailwindCss } from "app/components/Icons"

// import { Header } from "app/components/Header"
// import React from "react"

// const ANALYTICS_ENABLED = process.env.NODE_ENV === "production"

// interface LayoutProps {
//   children: React.ReactNode[];
//   pageTitle: string;
//   currentURL: string;
//   description: string;
//   previewImage: string;
//   twitterHandle: string;
//   isPost?: boolean;
// }

// export const Layout = ({
//   children,
//   pageTitle,
//   currentURL,
//   description,
//   previewImage,
//   twitterHandle,
//   isPost
// }: LayoutProps) => {
//   return (
//     <>
//       <div className="min-h-screen bg-backgroundSecondary">
//         <div className="flex flex-col min-h-screen m-auto bg-backgroundPrimary md:w-2/3 xl:w-3/5">


//           <section className="flex-grow h-full">
//             <Header />
//             <div>{children}</div>
//           </section>
//           <footer className="flex flex-row justify-center flex-grow-0 h-10 gap-2 p-2 font-sans text-sm align-text-bottom bg-secondary text-frontPrimary">
//             Built with <IconReact size={22} />
//             {" | "}
//             <IconNextJS size={22} />
//             {" | "}
//             <IconTailwindCss size={22} />
//             {" and "}
//             <IconLove size={22} />
//             {" by "}
//             <span className="font-mono">poladuco</span>
//           </footer>
//         </div>
//       </div>
//     </>
//   )
// }
