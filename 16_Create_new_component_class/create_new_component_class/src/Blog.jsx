import React, { useState, useEffect } from "react";
import "./Blog.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [activePageNumber, setActivePageNumber] = useState(1);

  const LoadPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/posts");
      const data = await response.json();
      setPosts(data.posts || []);
    } catch (error) {
      console.error("Failed to load posts:", error);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  const pageNumberClick = (pageNumber) => {
    setActivePageNumber(pageNumber);
  };

  useEffect(() => {
    LoadPosts();
  }, []);

  useEffect(() => {
    setPageCount(CalculatePages());
  }, [posts]);

  const CalculatePages = () => {
    return posts.length > 0 ? Math.ceil(posts.length / 3) : 0;
  };

  return (
    <div className="post-contents">
      <button onClick={LoadPosts}>Load Posts</button>

      {loading && <div>Loading...</div>}

      {!loading && posts.length === 0 && <div>Empty</div>}

      {!loading && posts.length > 0 && (
        <ul>
          {posts.slice((activePageNumber - 1) * 3, activePageNumber * 3).map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
      <div>
        {Array.from({ length: pageCount }).map((_, index) => (
          <button
            key={index}
            className={activePageNumber === index + 1 ? 'activePage' : 'inactivePage'}
            onClick={() => pageNumberClick(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Blog;