import "tailwindcss/tailwind.css"

// import { IconBack } from "@components/Icons"
import { IconCalendar } from "@components/Icons"
import { Layout } from "@components/Layout"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { evaluateReadingTime } from "@lib/readingTime"
import matter from "gray-matter"
import moment from "moment"
import { useRouter } from "next/router"

const CodeRenderer = ({ language, value }) => (
  <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>
)

const renderers = {
  code: CodeRenderer
}

export default function BlogPost({ siteTitle = "poladuco", frontmatter, markdownBody }) {
  const router = useRouter()
  const { pid } = router.query
  if (!frontmatter) return <></>

  return (
    <Layout
      pageTitle={`${siteTitle} | ${frontmatter.title}`}
      description={frontmatter.description}
      previewImage={frontmatter.heroImage.path.big}
      currentURL={`https://poladuco.com/${pid}`}
      twitterHandle="PolaDuco"
      isPost
    >
      <div className="w-full h-52 relative">
        <img
          src={frontmatter.heroImage.path.big}
          className="h-full object-cover w-full object-center shadow-sm absolute"
          alt={frontmatter.heroImage.alt}
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
              {moment(frontmatter.date).format("MMMM D, YYYY")}
            </h2>
            <h2 className="italic text-sm text-frontSecondary">
              ・ {evaluateReadingTime(markdownBody)} min read
            </h2>
          </div>
        </div>
      </div>

      <article className="my-4">
        <div className="prose mx-6 md:mx-8 lg:mx-12 max-w-none">
          <ReactMarkdown renderers={renderers}>{markdownBody}</ReactMarkdown>
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
