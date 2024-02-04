import "tailwindcss/tailwind.css"

import { Layout } from "@components/Layout"
import dynamic from "next/dynamic"
import { getSortedPostsData } from "@lib/posts"

// DynamicPostList lazily loads the rendered post lists
const DynamicPostList = dynamic(() => import("../components/PostList"), {
  loading: () => <p>Loading...</p>
})

const Index = ({ posts, title, description, previewImage, url }) => {
  return (
    <Layout
      pageTitle={title}
      description={description}
      currentURL={url}
      twitterHandle="PolaDuco"
      previewImage={previewImage}
    >
      <h1 className="my-4 font-mono text-4xl font-medium text-center">poladuco.com</h1>
      <h2 className="my-4 font-mono italic text-center text-md text-frontSecondary">
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

  const posts = getSortedPostsData()

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
      previewImage: configData.default.previewImage,
      url: configData.default.siteURL
    }
  }
}
