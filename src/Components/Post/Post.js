
import React, {useEffect, useState} from "react";
import axios, * as others from 'axios';
import Comment from "../Comment/Comment";
import './Post.css';
import AddComment from "../AddComment/AddComment";


function Post(props) {
    const [comments, setComments] = useState([]);
    const [showComments,setShowComments] = useState(false);
    const toggleShow = () => setShowComments(!showComments);

    function formatDate(dateParam){
        const date = new Date(dateParam);
        console.log(date);
        const day = ("0" + date.getDate()).slice(-2);
        console.log(day);
        const month = ("0" + date.getMonth()).slice(-2);
        const year = date.getFullYear();
        const hours = ("0" + date.getHours()).slice(-2);
        const minutes = ("0" + date.getMinutes()).slice(-2);
        return day +'.' + month +'.' + year + ' ' + hours +':' + minutes;
    }

    useEffect(async () => {
        const response = await axios(
            'http://localhost:8081/posts/' + props.post.id +'/comments', { headers: {"Authorization" : `Bearer ${props.token}`} }
        );
        setComments(response.data);

        console.log(response.data);
    }, []);

    return (
        <div className="Post">
            <div>
                <p> Added by: {props.post.username}</p>
                <br/>
                <p> About: {formatDate(props.post.date)}</p>
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
            <AddComment postId = {props.post.id} setComments = {setComments}/>
        </div>
    );
}

export default Post;
