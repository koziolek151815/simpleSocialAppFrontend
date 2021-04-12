import React, {useEffect, useState} from "react";
import './Comment.css';
function Comment(props) {

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

    return (
        <div className="Comment">
            <p> Added by: {props.comment.username}</p>
            <br/>
            <p> About: {formatDate(props.comment.date)}</p>
            <br/>
            <p> {props.comment.text}</p>
            <br/>
        </div>
    );
}

export default Comment;
