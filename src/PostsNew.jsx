import "./PostsNew.css";
import axios from "axios";
import { useState } from "react";

export function PostsNew(props) {
  const [errors, setErrors] = useState([]);

  const handleCreatePost = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/posts.json", params)
      .then((response) => {
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form onSubmit={handleCreatePost}>
        <div>
          Title: <input name="title" className="form-control" placeholder="Title" type="text" required />
        </div>
        <div>
          Enter Blog: <textarea name="body" className="form-control" placeholder="Enter Blog" />
        </div>
        <div>
          Image Url:{" "}
          <input name="image" className="form-control" placeholder="Enter a link to an image here!" type="type" />
        </div>
        <button className="mt-3 btn btn-primary" type="submit">
          Submit Blog
        </button>
      </form>
    </div>
  );
}
