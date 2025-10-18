import React, {useState} from "react";
import POSTS from './POSTS.json'
import './Blog.css'

const Blog = () => {
    const [posts, setPosts] = useState([])
    const handleLoad = () => {
        setPosts(POSTS);
    }

    return(
        <div className="post-contents">
            <button onClick={handleLoad}>Load Posts</button>
            {posts.length === 0 && <div>Empty</div>}
            {posts.length > 0 && (
            <ul>
                {POSTS.map((post) => (
                    <li key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.contents}</p>
                    </li>
                ))}
            </ul>
            )}
        </div>
    );
};

export default Blog;