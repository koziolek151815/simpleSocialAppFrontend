import React, {useState} from "react";
import axios from "axios";

function AddComment(props) {
    const [text, setText] = useState('');
    const token = localStorage.getItem('token');
    const handleChange = (event) => {
        setText(event.target.value);
    };
    const sendComment = () => {
        axios.post('http://localhost:8081/posts/' + props.postId + '/comments', {
            text: text
        },{ headers: {"Authorization" : `Bearer ${token}`} })
            .then((response) => {
                console.log(response);
                props.setComments(comments => [...comments, response.data]);
            }, (error) => {
                console.log(error);
            });
        setText('');

    };

    return (
        <div className="App">
            <label>
                Add Comment:
                <textarea value={text} placeholder={"Add something interesting"} onChange={handleChange} />
            </label>
            <input type="button" value="Add" onClick={sendComment} />
        </div>
    );
}

export default AddComment;
