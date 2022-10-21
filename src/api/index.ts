import axios from "axios"
import { PostsModel } from "../models/PostsModel.interface"

const url = "https://jsonplaceholder.typicode.com/posts"

export const getPosts = async (): Promise<PostsModel[]> => {
  const data: PostsModel[] = await fetch(url).then((data) => data.json())
  return data
}
