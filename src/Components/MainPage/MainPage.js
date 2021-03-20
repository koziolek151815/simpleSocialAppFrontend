import React, {useEffect, useState} from "react";
import axios from "axios";
import Post from "../Post/Post";

function MainPage() {
    const [posts, setPosts] = useState([]);

    useEffect(async () => {
        const response = await axios(
            'http://localhost:8081/posts',
        );
        console.log(response.data);
        setPosts(response.data);
    }, []);

    return (
        <div className="App">
            {posts.map(post =>
                <Post post = {post} key={post.id} />
            )}
        </div>
    );
}

export default MainPage;
