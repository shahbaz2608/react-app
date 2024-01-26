import React,{useState} from 'react'

export default function TextForm(data) {
    const [text, setText] = useState();
    const handleChange = (event)=>{
        // text = ;
        setText(event.target.value);
    }

    const convertToUpperCase = ()=>{
        // text = ;
        setText(text.toUpperCase());
    }
  return (
    <div>
        <h2 style={{color : data.mode === 'light'? 'black':'white'}}>{data.heading}</h2>
        <div className="mb-3">
            <textarea value={text} className="form-control" onChange={handleChange} id="exampleFormControlTextarea1" rows="3" style={{color : data.mode === 'light'? 'black':'white', background : data.mode === 'light'? 'white':'black'}}></textarea>
        </div>
        <button className='btn btn-primary' onClick={convertToUpperCase}>Convert to UpperCase</button>
        <div className='container' style={{color : data.mode === 'light'? 'black':'white'}}>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
    </div>
  )
}
