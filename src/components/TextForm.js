import React, {useState} from 'react'

// react function based component (rfc)
export default function TextForm(props) {
    
    /*  {useState} is a hook that adds object based component's functionality to a function based component */
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
    const handleSaneClick = ()=>{
        console.log("Sane click");
        console.log("Button Clicked" + text);
        let arr = text.split(".");
        console.log(arr)
        let newText = arr.map( (str)=>{
            str = str.trim()
            str = str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
            console.log(str)
            return str;
        }).join(". ");
        console.log("after")
        console.log(arr)
        // let newText = arr.join(".");
        setText(newText)
    }
    const wordCount = ()=>{
        let a = text.trim().split(" ");
        let l = a.length;
        if(a[l-1] === " " || a[l-1] === ""){
            return l-1;
        }

        return l;
    }
    const readTime = ()=>{
        let w = wordCount();
        let total =  w * 0.0034;
        let mins = total.toFixed(0);
        let secs = ((total - mins)*60).toFixed(0);
        return mins+" minutes and "+secs+" seconds";
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
                <button className="btn btn-primary mx-3" onClick={handleSaneClick}>Sane person</button>
            </div>

            <div className="component my-5">
                <h2>Your text summary</h2>
                <p>Your text has {wordCount()} words and {text.length} characters.</p>
                <p>Your text would take {readTime()}.</p>
            </div>
        </>
    )
}
