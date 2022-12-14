import "./PostsNew.css";

export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePost(params);
    event.target.reset();
  };

  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
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
