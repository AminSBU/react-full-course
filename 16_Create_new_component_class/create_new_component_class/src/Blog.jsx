import React, {useState, useEffect} from "react";
import './Blog.css'

const Blog = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    const LoadPosts = async () => {
        setLoading(true)
        //setLoaded(true)
        const responsePosts = await fetch('https://dummyjson.com/posts')
        const post = await responsePosts.json()
        setPosts(post)
    }

    useEffect(() => {
        LoadPosts();
    }, []);

    return(
        <div className="post-contents">
            <button onClick={handleLoad}>Load Posts</button>
            {/* {loading ? 'Loading ...' : 'Completed.'} */}
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