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
  const { rssItems, latestPostDate } = createRSSItemsFromPosts({ posts })

  return `<?xml version="1.0" ?>
<rss version="2.0">
  <channel>
      <title>${title}</title>
      <link>${url}</link>
      <description>${description}</description>
      <language>en</language>
      <lastBuildDate>${latestPostDate.toString()}</lastBuildDate>
      ${rssItems}
  </channel>
</rss>`
}

const createRSSItemsFromPosts = ({ posts }) => {
  var rssItems = ""
  var latestPostDate = new Date(null)
  // Add each individual post to the feed.
  posts.forEach((post) => {
    const pubDate = new Date(post.frontmatter.date)
    rssItems += `<item>
  <title>${post.frontmatter.title}</title>
  <link>/post/${post.id}</link>
  <author>${post.frontmatter.author}</author>
  <pubDate>${pubDate.toString()}</pubDate>
  <guid>/post/${post.id}</guid>
</item>`

    if (pubDate > latestPostDate) {
      latestPostDate = pubDate
    }
  })

  return { rssItems, latestPostDate }
}
