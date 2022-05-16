import React from "react";

function Posts(props) {
  return (
    <div className="container">
      <h4 className="mb-4 post-main">Post</h4>
      <div className="input-group mb-3">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <button type="button" className="btn btn-outline-primary">
          search
        </button>
      </div>
      {props.posts.map((post) => {
        const user = props.users.find((item) => item.id === post.userId);
        return (
          <div className="d-flex bd.highlight" key={post.id}>
            <div className="p2 flex-fill bd-highlight post-sub text-dark">
              {user ? user.name : ""}
            </div>
            <div className="p2 flex-fill bd-highlight">
              <p className="post-sub-title">{post.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
