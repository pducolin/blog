import "tailwindcss/tailwind.css"

import { Layout } from "@components/Layout"
import dynamic from "next/dynamic"
import { evaluateReadingTime } from "@lib/readingTime"
import matter from "gray-matter"

const DynamicPostList = dynamic(() => import("../components/PostList").then((mod) => mod.PostList))

const Index = ({ posts, title, description, previewImage }) => {
  return (
    <Layout
      pageTitle={title}
      description={description}
      currentURL="https://poladuco.com"
      twitterHandle="PolaDuco"
      previewImage={previewImage}
    >
      <h1 className="my-4 font-mono text-4xl font-medium text-center">poladuco.com</h1>
      <h2 className="font-mono italic text-center text-md text-frontSecondary my-4">
        {description}
      </h2>
      <main>
        <DynamicPostList
          posts={posts.filter(
            (post) => process.env.NODE_ENV !== "production" || !post.frontmatter.draft
          )}
        />
      </main>
    </Layout>
  )
}

export default Index

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  const posts = ((context) => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      const slug = key.replace(/^.*[\\/]/, "").slice(0, -3)
      const value = values[index]
      const document = matter(value.default)

      const timeToRead = evaluateReadingTime(document.content)
      return {
        frontmatter: document.data,
        slug,
        timeToRead
      }
    })
    return data
    // eslint-disable-next-line no-undef
  })(require.context("../posts", true, /\.md$/))

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
      previewImage: configData.default.previewImage
    }
  }
}
