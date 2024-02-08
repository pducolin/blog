import fs from "fs"
import { getPostsData } from "lib/posts"
import xmlFormat from "xml-formatter"

export const generateRSSFeed = ({ title, url, description }) => {
  const posts = getPostsData()
  const rssContent = createRSSFeedContent({ title, url, description, posts })
  // Write the RSS feed to a file as XML.
  fs.writeFileSync("./public/rss.xml", xmlFormat(rssContent))
}

const createRSSFeedContent = ({ title, url, description, posts }) => {
  const { rssItems, latestPostDate } = createRSSItemsFromPosts({ posts, url })

  return `<?xml version="1.0" ?>
<rss version="2.0">
  <channel>
      <atom:link href="${url}/rss.xml" rel="self" type="application/rss+xml" />
      <title>${title}</title>
      <link>${url}</link>
      <description>${description}</description>
      <language>en</language>
      <lastBuildDate>${latestPostDate.toUTCString()}</lastBuildDate>
      ${rssItems}
  </channel>
</rss>`
}

const createRSSItemsFromPosts = ({ posts, url }) => {
  var rssItems = ""
  var latestPostDate = new Date(1970, 1, 1)
  // Add each individual post to the feed.
  posts.forEach((post) => {
    const pubDate = new Date(post.frontmatter.date)
    rssItems += `<item>
  <title>${post.frontmatter.title}</title>
  <link>${url}/post/${post.id}</link>
  <author>${post.frontmatter.author}</author>
  <pubDate>${pubDate.toUTCString()}</pubDate>
  <guid>${url}/post/${post.id}</guid>
</item>`

    if (pubDate > latestPostDate) {
      latestPostDate = pubDate
    }
  })

  return { rssItems, latestPostDate }
}
