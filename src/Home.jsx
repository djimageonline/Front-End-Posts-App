import axios from "axios";
import { useEffect, useState } from "react";
import { PostsNew } from "./PostsNew";
import { PostsIndex } from "./PostsIndex";
import { Modal } from "./Modal";
import { BlogsShow } from "./BlogsShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./Logout";

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

  const handleCreatePost = (params) => {
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      setPosts([...posts, response.data]);
    });
    //   .catch((errors) => {
    //     console.log(error.response.data.errors);
    //     setErrors(error.response.data.errors);
    //   });
  };

  useEffect(handleIndexPosts, []);

  return (
    <div>
      <Login />
      <LogoutLink />
      <Signup />
      <PostsNew onCreatePost={handleCreatePost} />
      <PostsIndex posts={posts} onSelectBlog={handleShowBlogs} />
      {/* <button onClick={handleIndexPosts}> Load Posts</button> */}
      <Modal show={isBlogsShowModalVisible} onClose={handleHideBlogs}>
        <BlogsShow post={currentBlog} />
      </Modal>
    </div>
  );
}
