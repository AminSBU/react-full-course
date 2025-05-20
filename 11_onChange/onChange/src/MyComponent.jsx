import React, {useState} from "react";

function MyComponent(){
    const [name, setName]               = useState("");
    const [inputValue, setInputValue]   = useState("");
    const [comment, setComment]         = useState("");
    const [payment, setPayment]         = useState("");

    const onChangeHandler = (event) => {
        setInputValue(event.target.value);
    }

    const onClickHandler = () => {
        setName(inputValue);
    }

    const onCommentHandler = (event) => {
        setComment(event.target.value);
    }

    const onSelectHandler = (event) => {
        setPayment(event.target.value);
    }

    return(
        <>
            <div>
                <input value={inputValue} onChange={onChangeHandler} type="text"></input>
                <button onClick={onClickHandler}>SHOW</button>
                <p>Your name: {name}</p>
                <textarea value={comment} onChange={onCommentHandler} placeholder="type your comment" />
                <p>Your comment: {comment}</p>
                <select value={payment} onChange={onSelectHandler}>
                    <option value="">select ...</option>
                    <option value="visa">visa card</option>
                    <option value="credit">credit card</option>
                </select>
                <p>Your option is: {payment}</p>
            </div>
        </>
    );
}
export default MyComponent;