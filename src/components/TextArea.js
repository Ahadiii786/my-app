import React, {useState} from 'react'

export default function TextArea(props) {
    const [text, setText] = useState('Enter text here:');
    const handleUpChange=()=>{
        let newText=text.toUpperCase();
        setText(newText)
}
const handleLoChange=()=>{
    let newText=text.toLowerCase();
    setText(newText)
}
const handleClearChange=()=>{
 setText("")
}
    const handleOnChange=(e)=>{
            setText(e.target.value)
    }
  return (
    <>
    <div className='container my-3' >
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea type="text" value={text}  onChange={handleOnChange} className="form-control" id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpChange}>Convert to UPPERCASE</button>
            <button className="btn btn-primary mx-2" onClick={handleLoChange}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearChange}>Reset</button>


    </div>
    <div className="container">
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h4>Time needed:</h4>
        <p>{0.008*text.split(" ").length} minutes to read this</p>

    </div>
    </>
  )
}
