import React from "react"
import { usePosts } from "../ReactQueries"

export default function RefetchButton() {
  const { refetch } = usePosts()

  const onClick = () => refetch()

  return <button onClick={onClick}>RefetchButton</button>
}
