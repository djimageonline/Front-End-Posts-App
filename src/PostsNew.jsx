export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <input placeholder="Title" required />
        <textarea placeholder="Enter Blog" />
        <input type="button" value="Publish me yo!" />
      </form>
    </div>
  );
}
