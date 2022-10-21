import { usePosts } from "../ReactQueries"

export default function DataComponentTwo() {
  const { data, isFetching } = usePosts()

  if (isFetching) {
    console.log("Fetching new data in component 2")
  }
  return (
    <div>
      {data?.slice(2, 3).map((post, i) => {
        return (
          <div key={i}>
            {post.title}
            <hr />
            {post.body}
          </div>
        )
      })}
    </div>
  )
}
