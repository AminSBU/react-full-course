import React, {useState, useEffect} from "react";
import POSTS from './POSTS.json'
import './Blog.css'

const Blog = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    const handleLoad = () => {
        setLoading(true)
        setTimeout(() => {
            setPosts(POSTS);
            setLoading(false)
        }, 1000)
    }

    useEffect(() => {
        console.log('useEffect');
        handleLoad();
    }, []); // تنها یک‌بار اجرا می‌شود

    return(
        <div className="post-contents">
            <button onClick={handleLoad}>Load Posts</button>
            {loading ? 'Loading ...' : 'Completed.'}
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