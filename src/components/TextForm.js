import React, {useState} from 'react'

// react function based component (rfc)
export default function TextForm(props) {
    
    {/*  {useState} is a hook that adds object based component's functionality to a function based component */}
    const [text, setText] = useState('Enter text here');
    
    // text = "new text"; Wrong way to update a state
    // setText("New text"); Correct way
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }    
    const handleUpClick = ()=>{
        console.log("Up click");
        console.log("Button Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    return (
        <>
            <h1>{props.heading}</h1>
            <div className="input-group mb-3"> 
                <textarea className="form-control" id="textInput" value={text} onChange={handleOnChange} aria-label="With textarea" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to upperCase</button>
        </>
    )
}
