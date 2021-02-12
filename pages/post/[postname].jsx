import "tailwindcss/tailwind.css"

// import { IconBack } from "@components/Icons"
import { IconCalendar } from "@components/Icons"
import { Layout } from "@components/Layout"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import matter from "gray-matter"
import moment from "moment"

const CodeRenderer = ({ language, value }) => (
  <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>
)

const renderers = {
  code: CodeRenderer
}

export default function BlogPost({ siteTitle = "poladuco", frontmatter, markdownBody }) {
  if (!frontmatter) return <></>

  return (
    <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
      {/* <Link href="/">
        <a className="group flex flex-row justify-start mx-4 md:mx-6 lg:mx-8 mt-4 outline-none">
          <div className=" text-frontSecondary flex flex-row items-center justify-start">
            <IconBack
              size={20}
              className="mr-2 fill-current text-frontSecondary group-hover:fill-current group-hover:text-frontPrimary group-focus:border-opacity-100 group-focus:fill-current fgroup-ocus:text-frontPrimary"
            />
            <span className="transition-all duration-500 ease-in-out border-b-2 border-opacity-0 border-frontPrimary group-hover:border-opacity-100 group-focus:border-opacity-100 group-hover:text-frontPrimary group-focus:text-frontPrimary  p-1">
              Back to post list
            </span>
          </div>
        </a>
      </Link> */}
      <article className="my-8">
        <h1 className="font-mono m-4 md:mx-8 lg:mx-12 text-3xl font-semibold text-center text-frontSecondary">
          {frontmatter.title}
        </h1>
        <div className="items-center text-frontSecondary flex flex-row justify-center mb-4 gap-1">
          <IconCalendar size={14} className="fill-current text-frontSecondary" />
          <h2 className="italic text-sm text-frontSecondary">
            {moment(frontmatter.date).format("MMMM D, YYYY")}
          </h2>
        </div>
        <div className="prose mx-6 md:mx-8 lg:mx-12 max-w-none">
          <ReactMarkdown source={markdownBody} renderers={renderers} />
        </div>
        {frontmatter.original && (
          <div className="items-center text-frontSecondary flex flex-row justify-center mt-4 text-sm text-frontSecondarymr-1 italic gap-1">
            {/* <IconCalendar size={14} className="fill-current text-frontSecondary mr-1" /> */}
            <h2 className="">Originally published at</h2>
            <Link href={frontmatter.original.link}>
              <a className="underline">{frontmatter.original.linkTitle}</a>
            </Link>
            <h2 className="">on {moment(frontmatter.original.date).format("MMMM D, YYYY")}</h2>
          </div>
        )}
      </article>
    </Layout>
  )
}

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params

  const content = await import(`../../posts/${postname}.md`)
  const config = await import(`../../siteconfig.json`)
  const data = matter(content.default)

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content
    }
  }
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys()
    const data = keys.map((key) => {
      const slug = key.replace(/^.*[\\/]/, "").slice(0, -3)

      return slug
    })
    return data
    // eslint-disable-next-line no-undef
  })(require.context("../../posts", true, /\.md$/))

  const paths = blogSlugs.map((slug) => `/post/${slug}`)

  return {
    paths,
    fallback: false
  }
}
