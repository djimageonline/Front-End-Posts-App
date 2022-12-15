import "./PostsShow.css";

export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePost(params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyPost(props.post);
  };

  return (
    <div id="posts-show">
      <h2>{props.post.title}</h2>
      <p>
        <b>Blog</b>: {props.post.body}
      </p>
      <img src={props.post.image} />
      <p></p>
      <h3>Edit Post</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <b>Title:</b>{" "}
          <input
            defaultValue={props.post.title}
            name="title"
            className="form-control"
            placeholder="Title"
            type="text"
            required
          />
        </div>
        <div>
          <b>Enter Blog:</b>{" "}
          <textarea defaultValue={props.post.body} name="body" className="form-control" placeholder="Enter Blog" />
        </div>
        <div>
          <b>Image Url:</b>{" "}
          <input
            defaultValue={props.post.image}
            name="image"
            className="form-control"
            placeholder="Enter a link to an image here!"
            type="type"
          />
        </div>
        <button className="mt-3 btn btn-primary" type="submit" typeof="submit">
          Submit Blog
        </button>
      </form>

      <button className="mt-3 btn btn-danger" onClick={handleClick}>
        Delete Blog
      </button>
    </div>
  );
}
