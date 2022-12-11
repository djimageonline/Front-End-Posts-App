import axios from "axios";
import { useEffect, useState } from "react";
import { PostsNew } from "./PostsNew";
import { PostsIndex } from "./PostsIndex";
import { Modal } from "./Modal";

export function Home() {
  const [posts, setPosts] = useState([]);
  const [isBlogsShowModalVisible, setIsBlogsShowModalVisible] = useState(false);
  const [currentBlog, setCurrentBlog] = useState({});

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  const handleShowBlogs = (post) => {
    setIsBlogsShowModalVisible(true);
    setCurrentBlog(post);
  };

  const handleHideBlogs = () => {
    setIsBlogsShowModalVisible(false);
  };

  useEffect(handleIndexPosts, []);

  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} onSelectBlog={handleShowBlogs} />
      {/* <button onClick={handleIndexPosts}> Load Posts</button> */}
      <Modal show={isBlogsShowModalVisible} onClose={handleHideBlogs}>
        <h2>{currentBlog.title}</h2>
        <p>Post: {currentBlog.body}</p>
      </Modal>
    </div>
  );
}
