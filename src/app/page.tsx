import "tailwindcss/tailwind.css"

import { PostList } from "app/components/PostList"
import React from "react"
import {config} from "config/sitemap"
import { getSortedPostsData } from "lib/posts"

const Index = () => {
  const posts = getSortedPostsData()

  return (<>
  <h1 className="my-4 font-mono text-4xl font-medium text-center">poladuco.com</h1>
  <h2 className="my-4 font-mono italic text-center text-md text-frontSecondary">
    {config.description}
  </h2>
  <main>
      <PostList posts={posts}/>
  </main>

</>)
}

export default Index