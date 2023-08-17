import React, {useState} from 'react'

// react function based component (rfc)
export default function TextForm(props) {
    
    /*  {useState} is a hook that adds object based component's functionality to a function based component */
    const [text, setText] = useState('');
    
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
        props.raiseAlert("Converted to uppercase", "success");
        setText(newText)
    }    

    const handleLowClick = ()=>{
        console.log("Low click");
        console.log("Button Clicked" + text);
        let newText = text.toLowerCase();
        props.raiseAlert("Converted to lowercase", "success");
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
        props.raiseAlert("Converted to sentence case", "success");
    }
    
    const handleDumbClick = ()=>{
        console.log("Dumb clicked")
        
        let temp = Array.from(text);
        
        temp.map( (elem, index)=>{
            if(index%2 === 0){
                temp[index] = elem.toLowerCase();
            }
            else{
                temp[index] = elem.toUpperCase();
            }
        });
        
        setText(temp.toString().split(",").join(""))
        props.raiseAlert("Converted to dumb case", "success");
    }
    
    // spam function
    const sp = ()=>{
        let temp = "  "
        setText(temp);
    }
    
    const copyText = ()=>{
        let field = document.getElementById("textInput");
        field.select();
        // copyText.setSelectionRange(0, 99999); // For mobile devices
        navigator.clipboard.writeText(text)
        props.raiseAlert("Text copied", "success");
    }
    
    // comment
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
            <div className="container" style={{color: (props.mode==='light')?'#000000':'#ffffff'}}>
                <h1>{props.heading}</h1>
                <div className="input-group mb-3"> 
                    <textarea className="form-control" id="textInput" value={text} onChange={handleOnChange} aria-label="With textarea" rows="8" style={{backgroundColor:(props.mode==='light')?'#ffffff':'#768194', color: (props.mode==='light')?'#000000':'#ffffff'}}></textarea>
                </div>
                <div className="">
                    <button className="btn btn-primary me-2" onClick={handleUpClick}>SCREAM!!</button>
                    <button className="btn btn-primary mx-2" onClick={handleLowClick}>whisper</button>
                    <button className="btn btn-primary mx-2" onClick={handleSaneClick}>Sane person</button>
                    <button className="btn btn-primary mx-2" onClick={handleDumbClick}>dUmB dOwN</button>
                    <button className="btn btn-secondary mx-2" onClick={copyText}>copy</button> 
                    <button className="btn btn-secondary mx-2" onClick={()=>{setText(""); props.raiseAlert("Text cleared", "success")}}>clear</button> 
                    {/* position-relative end-0 */}
                    {/* <div className="btn-group dropend">
                        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Spam
                        </button>
                        <ul class="dropdown-menu mx-3">
                        <li><button class="dropdown-item" type="button" onClick={sp()}>x2</button></li>
                        <li><button class="dropdown-item" type="button" onClick={spam(5)}>x5</button></li>
                        <li><button class="dropdown-item" type="button" onClick={spam(10)}>x10</button></li>
                        <li><button class="dropdown-item" type="button" onClick={spam(25)}>x25</button></li>
                        <li><button class="dropdown-item" type="button" onClick={spam(50)}>x50</button></li>
                        <li><button class="dropdown-item" type="button" onClick={spam(100)}>x100</button></li>
                        </ul>
                    </div> */}
                </div>
            </div>

            <div className="component my-5">
                <h2>Your text summary</h2>
                <p>Your text has {wordCount()} words and {text.length} characters.</p>                
                <p>Your text would take {readTime()}.</p>
                <h2>Preview</h2>
                <p>{text===""?"Enter some text to get preview":text}</p>
            </div>
        </>
    )
}
