import { usePosts } from "../ReactQueries"

export default function DataComponentTwo() {
  const { data, isFetching } = usePosts()

  if (isFetching) {
    console.log("Fetching new data in component 2")
  }
  return <div>DataComponentTwo</div>
}
