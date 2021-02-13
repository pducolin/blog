import "tailwindcss/tailwind.css"

import { Layout } from "@components/Layout"
import { PostList } from "@components/PostList"
import matter from "gray-matter"

const Index = ({ posts, title, description }) => {
  return (
    <Layout pageTitle={title}>
      <h1 className="my-4 font-mono text-4xl font-medium text-center">Welcome to my blog</h1>
      <h2 className="font-mono italic text-center text-md text-frontSecondary my-4">
        {description}
      </h2>
      <main>
        <PostList posts={posts.filter((post) => !post.frontmatter.draft)} />
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
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug
      }
    })
    return data
    // eslint-disable-next-line no-undef
  })(require.context("../posts", true, /\.md$/))

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description
    }
  }
}
