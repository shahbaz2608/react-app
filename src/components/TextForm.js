import React,{useState} from 'react'

export default function TextForm(data) {
    
  return (
    <div>
        <h2>{data.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
    </div>
  )
}
