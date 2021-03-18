import React, {useEffect, useState} from "react";

function Comment(props) {

    return (
        <div className="App">
            <p> {props.comment.id}</p>
            <br/>
            <p> {props.comment.text}</p>
            <br/>
            <p> {props.comment.postId}</p>
            <br/>
            <p> {props.comment.username}</p>
            <br/>
            <p> {props.comment.date}</p>
        </div>
    );
}

export default Comment;
