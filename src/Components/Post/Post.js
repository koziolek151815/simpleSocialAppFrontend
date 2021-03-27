
import React, {useEffect, useState} from "react";
import axios, * as others from 'axios';
import Comment from "../Comment/Comment";



function Post(props) {
    const [comments, setComments] = useState([]);
    const [showComments,setShowComments] = useState(false);
    const toggleShow = () => setShowComments(!showComments);
    useEffect(async () => {
        const response = await axios(
            'http://localhost:8081/posts/' + props.post.id +'/comments', { headers: {"Authorization" : `Bearer ${props.token}`} }
        );
        setComments(response.data);

        console.log(response.data);
    }, []);

    return (
        <div className="App">
            <div>
                <p> {props.post.id}</p>
                <br/>
                <p> {props.post.text}</p>
                <br/>
                <button onClick={toggleShow}>
                    {showComments? 'Hide comments':'Show comments'}
                </button>
            </div>
            {showComments && comments.map(comment =>
                <Comment comment = {comment} key={comment.id} />
            )}
        </div>
    );
}

export default Post;
