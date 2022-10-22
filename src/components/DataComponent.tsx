import { usePosts } from "../ReactQueries"

export default function DataComponent() {
  const { data, isLoading, isSuccess, refetch, isFetching } = usePosts()

  return (
    <div>
      {data?.slice(0, 1).map((post, i) => {
        return (
          <div key={i}>
            <h2>{post.title}</h2>
            <hr />
            <p>{post.body}</p>
          </div>
        )
      })}
    </div>
  )
}
