import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function PostsShowPage() {
  const [post, setPosts] = useState([]);
  const params = useParams();

  const handleShowPost = () => {
    axios.get(`http://localhost:3000/posts/${params.id}.json`).then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  useEffect(handleShowPost, []);

  return (
    <div>
      <h1>Post Info</h1>
      <h2>{post.title}</h2>
      <p>Post: {post.body}</p>
      <p>: {post.image}</p>
      <h2>Edit Post</h2>
    </div>
  );
}
