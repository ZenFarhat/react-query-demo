import { usePosts } from "../ReactQueries"

export default function RefetchButton() {
  const { refetch } = usePosts(false)

  const onClick = () => refetch()

  return <button onClick={onClick}>RefetchButton</button>
}
