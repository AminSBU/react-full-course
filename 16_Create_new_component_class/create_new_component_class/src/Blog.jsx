import React, { useState, useEffect } from "react";
import "./Blog.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);

  const LoadPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/posts");
      const data = await response.json();
      // data.posts is the array of posts
      setPosts(data.posts || []);
    } catch (error) {
      console.error("Failed to load posts:", error);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    LoadPosts();
  }, []);

  useEffect(() =>{
    setPageCount(CalculatePages())
  }, [posts]);

  console.log("pageCount", pageCount)

  const CalculatePages = () => {
    if(posts.length % 3 > 0)
    {
      return parseInt(posts.length / 3 + 1);
    }
    return parseInt(posts.length / 3);
  }

  return (
    <div className="post-contents">
      <button onClick={LoadPosts}>Load Posts</button>

      {loading && <div>Loading...</div>}

      {!loading && posts.length === 0 && <div>Empty</div>}

      {!loading && posts.length > 0 && (
        <ul>
          {posts.slice(0,3).map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
      <div>
        <ul>
        {new Array(pageCount).fill(0).map((item,index) => {
          <li>
            <button>{index + 1}</button>
          </li>
        })}
        </ul>
      </div>
    </div>
  );
};

export default Blog;