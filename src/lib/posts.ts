import { evaluateReadingTime } from "lib/readingTime"
import fs from "fs"
import matter from "gray-matter"
import path from "path"

const postsDirectory = path.join(process.cwd(), "posts")

export const getPostsData = () => {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "")

    return getPostData({id})
  })
}

interface getPostDataProps {
  id: string;
}

export const getPostData = ({ id }: getPostDataProps) => {
  const fileName = id + ".md"
  const fullPath = path.join(postsDirectory, fileName)
  const fileContents = fs.readFileSync(fullPath, "utf8")

  // Use gray-matter to parse the post metadata section
  const { content, data: frontmatter } = matter(fileContents)

  const timeToRead = evaluateReadingTime({text: content})

  // Combine the data with the id
  return {
    id,
    content,
    frontmatter,
    timeToRead
  }
}

export const getSortedPostsData = () => {
  const allPostsData = getPostsData()
  // Sort posts by date
  return allPostsData
    .sort(sortPostByDate)
    .filter((post) => process.env.NODE_ENV !== "production" || !post.frontmatter.draft)
}

// sort by most recent
const sortPostByDate = (post_a, post_b) => {
  if (post_a.frontmatter.date > post_b.frontmatter.date) {
    return -1
  }

  if (post_a.frontmatter.date < post_b.frontmatter.date) {
    return 1
  }

  return 0
}
