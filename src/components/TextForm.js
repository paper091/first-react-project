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
    const handleLowClick = ()=>{
        console.log("Low click");
        console.log("Button Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="input-group mb-3"> 
                    <textarea className="form-control" id="textInput" value={text} onChange={handleOnChange} aria-label="With textarea" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-3" onClick={handleUpClick}>SCREAM!!</button>
                <button className="btn btn-primary mx-3" onClick={handleLowClick}>whisper</button>
            </div>

            <div className="component my-5">
                <h1>Your text summary</h1>
                <p>Your text has {text.split(" ").length} words and {text.length} characters.</p>
                <p>Your text would take {0.0034*text.split(" ").length} minutes.</p>
            </div>
        </>
    )
}
