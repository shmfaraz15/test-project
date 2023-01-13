import React, { useState } from 'react'

export default function Textform(props) {

    const [text, setText] = useState("");

    const handleOnChange = (event) => {
        console.log("on change function called")
        setText(event.target.value)
    }

    const handleUpClick = () => {
        console.log("Uppercase was clicked")
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = () => {
        console.log("Lowercase was clicked")
        let newText = text.toLowerCase();
        setText(newText)
    }

    return (
        <>
            <div className="mb-3">
                <h1 style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>{props.heading}</h1>
                <div className='mb-3'>
                    <textarea className="form-control" value={text} style={{ background: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? '#042743' : 'white' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            </div>
            <div className='container my-3'>
                <h2 style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>Text Summary</h2>
                <p style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>{text.split(" ").length} words and {text.length} characters</p>
                <p style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>{text.split(" ").length * 0.008} minutes read</p>
                <h2 style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>Preview</h2>
                <p style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>{text}</p>
            </div>
        </>
    )
}
