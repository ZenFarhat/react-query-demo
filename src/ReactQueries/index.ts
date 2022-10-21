import { getPosts } from "./../api/index"
import { useQuery } from "@tanstack/react-query"

export function usePosts(fetchData: boolean = true) {
  return useQuery(["posts"], getPosts, { staleTime: 10000, enabled: fetchData })
}
