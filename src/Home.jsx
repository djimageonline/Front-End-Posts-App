import axios from "axios";
import { useEffect, useState } from "react";
import { PostsNew } from "./PostsNew";
import { PostsIndex } from "./PostsIndex";

export function Home() {
  const [posts, setPosts] = useState([]);

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  useEffect(handleIndexPosts, []);

  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
      <button onClick={handleIndexPosts}> Load Posts</button>
    </div>
  );
}
