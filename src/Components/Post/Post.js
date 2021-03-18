
import React, {useEffect, useState} from "react";
import axios, * as others from 'axios';
import Comment from "../Comment/Comment";



function Post(props) {
    const [comments, setComments] = useState([]);
    useEffect(async () => {
        const response = await axios(
            'http://localhost:8081/posts/' + props.post.id +'/comments',
        );
        setComments(response.data);
        console.log('this' + comments)
    }, []);


    return (
        <div className="App">
            <div>
                <p> {props.post.id}</p>
                <br/>
                <p> {props.post.text}</p>
                <br/>
            </div>
            {comments.map(comment =>
                <Comment comment = {comment} key={comment.id} />
            )}

        </div>
    );
}

export default Post;