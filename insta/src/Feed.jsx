import { useState } from "react";
import Stories from "./Stories";
import { FaHeart, FaComment } from "react-icons/fa"; // Install react-icons if not already: npm install react-icons

function Feed({ posts }) {
  const [showComments, setShowComments] = useState({}); // Tracks which post's comments are visible
  const [showLikes, setShowLikes] = useState({}); // Tracks which post's likes are visible

  const toggleComments = (postId) => {
    setShowComments((prev) => ({
      ...prev,
      [postId]: !prev[postId], // Toggle visibility for the specific post
    }));
  };

  const toggleLikes = (postId) => {
    setShowLikes((prev) => ({
      ...prev,
      [postId]: !prev[postId], // Toggle visibility for the specific post
    }));
  };

  return (
    <div>
      {/* Stories Section */}
      <Stories />

      {/* Posts Section */}
      {posts ? (
        posts.map((post) => (
          <div key={post.id} className="card mb-3">
            {/* Post Header */}
            <div className="card-header d-flex align-items-center">
              <img
                src={post.user.profilePic}
                alt="Profile"
                className="rounded-circle me-2"
                style={{ width: "32px", height: "32px" }}
              />
              <strong>{post.user.username}</strong>
            </div>

            {/* Post Image */}
            <img src={post.image} className="card-img-top" alt="Post" />

            {/* Post Body */}
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <div className="d-flex align-items-center">
                  <FaHeart
                    className="me-1"
                    style={{ cursor: "pointer", color: showLikes[post.id] ? "red" : "black" }}
                    onClick={() => toggleLikes(post.id)}
                  />
                  <span>{post.likes.length}</span>
                </div>
                <div className="d-flex align-items-center">
                  <FaComment
                    className="me-1"
                    style={{ cursor: "pointer" }}
                    onClick={() => toggleComments(post.id)}
                  />
                  <span>{post.comments.length}</span>
                </div>
              </div>

              {/* Caption */}
              <p className="card-text mt-2">
                <strong>{post.user.username}</strong> {post.caption}
              </p>

              {/* Likes List (shown only when heart is clicked) */}
              {showLikes[post.id] && (
                <div className="mb-2">
                  <strong>Liked by:</strong>
                  {post.likes.length > 0 ? (
                    <ul className="list-unstyled">
                      {post.likes.map((like, index) => (
                        <li key={index}>{like.username}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>No likes yet.</p>
                  )}
                </div>
              )}

              {/* Comments (shown only when comment icon is clicked) */}
              {showComments[post.id] && (
                <div>
                  {post.comments.map((comment) => (
                    <p key={comment.id} className="text-muted mb-1">
                      <strong>{comment.username}</strong> {comment.text}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* Timestamp */}
            <div className="card-footer text-muted">
              {new Date(post.timestamp).toLocaleDateString()}
            </div>
          </div>
        ))
      ) : (
        <p>Loading posts...</p>
      )}
    </div>
  );
}

export default Feed;