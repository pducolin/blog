import { PostCard } from "@components/PostCard"

export const PostList = ({ posts }) => {
  if (posts === "undefined") return null

  return (
    <div className="w-full h-full">
      {!posts && <div>No posts!</div>}
      <ul className="flex flex-row flex-wrap w-full">
        {posts &&
          posts.map((post, index) => {
            return <PostCard key={index} {...post} />
          })}
      </ul>
    </div>
  )
}
