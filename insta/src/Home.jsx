import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Suggestions from "./Suggestions";

function Home() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => {
        console.log("The error is:", err.message);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar - Fixed on the left */}
        <div className="col-md-3 col-lg-2 p-0">
          <Sidebar />
        </div>

        {/* Main content area */}
        <div className="col-md-9 col-lg-10">
          <div className="row">
            {/* Feed - Center */}
            <div className="col-md-8 col-lg-6 offset-md-1 mt-3">
              <Feed posts={posts} />
            </div>

            {/* Suggestions - Right */}
            <div className="col-md-3 col-lg-3 mt-3 d-none d-md-block">
              <Suggestions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;