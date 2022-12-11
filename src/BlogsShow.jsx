export function BlogsShow(props) {
  return (
    <div>
      <h2>{props.post.title}</h2>
      <p>Post: {props.post.body}</p>
    </div>
  );
}
