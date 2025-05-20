import React, {useState} from "react";

function MyComponent(){
    const [name, setName]               = useState("");
    const [inputValue, setInputValue]   = useState("");
    const [comment, setComment]         = useState("");

    const onChangeHandler = (event) => {
        setInputValue(event.target.value);
    }

    const onClickHandler = () => {
        setName(inputValue);
    }

    const onCommentHandler = (event) => {
        setComment(event.target.value);
    }

    return(
        <>
            <div>
                <input value={inputValue} onChange={onChangeHandler} type="text"></input>
                <button onClick={onClickHandler}>SHOW</button>
                <p>Your name: {name}</p>
                <textarea value={comment} onChange={onCommentHandler} placeholder="type your comment" />
                <p>Your comment: {comment}</p>
            </div>
        </>
    );
}
export default MyComponent;