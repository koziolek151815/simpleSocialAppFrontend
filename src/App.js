import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import axios, * as others from 'axios';
import Post from "./Components/Post/Post";



function App() {
    const [posts, setPosts] = useState([]);

    useEffect(async () => {
        const response = await axios(
            'http://localhost:8081/posts',
        );

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

export default App;
