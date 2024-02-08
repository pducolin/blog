import "tailwindcss/tailwind.css"

import { PostList } from "app/components/PostList"
import React from "react"
import {config} from "config/sitemap"
import { getSortedPostsData } from "lib/posts"

// export const metadata: Metadata = {
//   title: '...',
// }

{/* Open Graph */}
{/* <meta property="og:url" content={currentURL} key="ogurl" />
<meta property="og:image" content={previewImage} key="ogimage" />
<meta property="og:site_name" content="poladuco.com" key="ogsitename" />
<meta property="og:title" content={pageTitle} key="ogtitle" />
<meta property="og:description" content={description} key="ogdesc" /> */}
// {/* <meta property="og:type" content={isPost ? "article" : "website"} key="ogtype" /> */}


// {/* <title>{pageTitle}</title> */}
// </Head> */}

 
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