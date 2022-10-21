import { getPosts } from "./../api/index"
import { useQuery } from "@tanstack/react-query"

export function usePosts() {
  return useQuery(["posts"], getPosts, { staleTime: 3000 })
}
