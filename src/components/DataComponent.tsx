import { usePosts } from "../ReactQueries"

export default function DataComponent() {
  const { data, isLoading, isSuccess, refetch, isFetching, status } = usePosts()

  if (isFetching) {
    console.log("Fetching new data in component 1")
  }

  if (status === "error") {
    return <div>Error fetching the data</div>
  }

  return (
    <div>
      {isSuccess && <div>Fetched Successfully!</div>}
      <button
        onClick={() => {
          refetch()
          console.log("fetching...")
        }}
      >
        reftech
      </button>
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
