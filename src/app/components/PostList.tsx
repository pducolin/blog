import { PostCard } from "app/components/PostCard"
import React from "react"

export const PostList = ({ posts }) => {
  if (posts === "undefined") return null

  return (
    <div className="w-full h-full">
      {!posts && <div>No posts!</div>}
      <ul className="flex flex-row flex-wrap w-full">
        {posts &&
          posts.map((post) => {
            return <PostCard key={post.id} {...post} />
          })}
      </ul>
    </div>
  )
}
