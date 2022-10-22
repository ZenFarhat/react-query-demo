import React, { useEffect, useState } from "react"
import { getPosts } from "../api"
import { PostsModel } from "../models/PostsModel.interface"

export default function UseEffectComponent() {
  const [posts, setPosts] = useState<PostsModel[]>([])

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data)
    })

    // if we want to re-fetch this data from another component, they must be paired through a subscription of some sorts or global state
  }, [])

  return (
    <div>
      {posts.map((post) => {
        return (
          <div>
            {post.title}
            {post.body}
          </div>
        )
      })}
    </div>
  )
}
