import React, {useState} from "react";
import POSTS from './POSTS.json'
import './Blog.css'

const Blog = () => {
    const [posts, setPosts] = useState([])
    return(
        <div className="post-contents">
            <button>Load Posts</button>
            {posts.length === 0 && <div>Empty</div>}
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
};

export default Blog;