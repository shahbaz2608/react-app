import React from 'react'
import PropTypes from 'prop-types'
import { Outlet, Link } from "react-router-dom";

export default function Navbar(data){

    
    return(
      <nav className={`navbar navbar-expand-lg bg-${data.mode}`} >
        <div className="container-fluid" style={{color : data.mode === 'light'? 'black':'white'}}>
          <Link className="navbar-brand" to="/" style={{color : data.mode === 'light'? 'black':'white'}}>{data.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/textform" style={{color : data.mode === 'light'? 'black':'white'}}>Text-Form</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{color : data.mode === 'light'? 'black':'white'}}>{data.aboutText}</Link>
              </li>
            </ul>
            <div className="mx-3">
              {/* <span className="input-group-text" id="addon-wrapping">@</span> */}
              <input type="color" onChange={data.getcolor} value={data.color}/>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" onClick={data.toggle} role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color : data.mode === 'light'? 'black':'white'}}>Enable {data.mode}mode</label>
            </div>

          </div>
        </div>
      </nav>
    )
Navbar.propTypes = {
    title : PropTypes.string
};

Navbar.defaultProps = {
    title : 'text here'
}
// Navbar.
}