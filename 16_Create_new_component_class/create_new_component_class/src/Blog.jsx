import React from "react";
import POSTS from './POSTS.json'
import './Blog.css'

const Blog = () => (
    <div className="post-contents">
        <ul>
            {POSTS.map((post) => (
                <li key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.contents}</p>
                </li>
            ))}
        </ul>
    </div>
);

export default Blog;