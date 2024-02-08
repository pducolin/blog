import "tailwindcss/tailwind.css"

import { format, parse } from "date-fns"
import { getPostData, getSortedPostsData } from "lib/posts"

// import { IconBack } from "@components/Icons"
import { IconCalendar } from "app/components/Icons"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

const CodeRenderer = ({ language, value }) => (
  <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>
)

const renderers = {
  code: CodeRenderer
}

export function generateStaticParams() {
  return getSortedPostsData().map((post) => ({id: post.id}))
}


export default function BlogPost({ params }: { params: { id: string } }) {
  const {id} = params

  const {content, frontmatter, timeToRead} = getPostData({id})

  return (
    <>
      <div className="w-full h-52 relative">
        <Image
          src={frontmatter.heroImage.path.big}
          className="h-full object-cover w-full object-center shadow-sm absolute"
          alt={frontmatter.heroImage.alt}
          fill
        />
        <div className="absolute bottom-0 left-0 w-2/3 bg-secondary justify-center flex flex-col pl-4 gap-1 py-2 mb-2">
          <h1
            className="
          font-mono
          text-3xl
          font-semibold
          text-left
          text-frontSecondary"
          >
            {frontmatter.title}
          </h1>
          <div className="items-center text-frontSecondary flex flex-row justify-start gap-1">
            <IconCalendar size={14} className="fill-current text-frontSecondary" />
            <h2 className="italic text-sm text-frontSecondary mr-1">
              {format(parse(frontmatter.date, "yyyy-MM-dd", new Date()), "MMMM d, yyyy")}
            </h2>
            <h2 className="italic text-sm text-frontSecondary">
              ・ {timeToRead} min read
            </h2>
          </div>
        </div>
      </div>

      <article className="my-4">
        <div className="prose mx-6 md:mx-8 lg:mx-12 max-w-none">
          <ReactMarkdown renderers={renderers}>{content}</ReactMarkdown>
        </div>
        {frontmatter.original && (
          <div className="items-center text-frontSecondary flex flex-row justify-center mt-4 text-sm text-frontSecondarymr-1 italic gap-1">
            {/* <IconCalendar size={14} className="fill-current text-frontSecondary mr-1" /> */}
            <h2 className="">Originally published at</h2>
            <Link href={frontmatter.original.link} className="underline">
              {frontmatter.original.linkTitle}
            </Link>
            <h2 className="">
              on{" "}
              {format(parse(frontmatter.original.date, "yyyy-MM-dd", new Date()), "MMMM d, yyyy")}
            </h2>
          </div>
        )}
      </article>
      </>
  )
}

