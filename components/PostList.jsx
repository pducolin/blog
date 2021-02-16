import { PostCard } from "@components/PostCard"

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

export const PostList = ({ posts }) => {
  if (posts === "undefined") return null

  return (
    <div className="w-full h-full">
      {!posts && <div>No posts!</div>}
      <ul className="flex flex-row flex-wrap w-full">
        {posts &&
          posts.sort(sortPostByDate).map((post, index) => {
            return <PostCard key={index} {...post} />
          })}
      </ul>
    </div>
  )
}
