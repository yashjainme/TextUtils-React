import React from 'react'

import PropTypes from 'prop-types'
// import { Link } from "react-router-dom";

export default function Navbar(props) {








  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li> */}
        </ul>
       
        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" className="btn btn-danger rounded-circle border border-primary mx-2" onClick={props.toggleRed}></button>
  <button type="button" className="btn btn-warning rounded-circle border border-primary mx-2" onClick={props.toggleYellow}></button>
  <button type="button" className="btn btn-success rounded-circle border border-primary mx-2" onClick={props.toggleGreen}></button>
</div>


        <div className="form-check form-switch">
        <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label  className={`form-check-label text-${props.mode === 'dark'?'light':'dark'}`} htmlFor="flexSwitchCheckDefault">{props.toggleText}</label>
</div>
      </div>
    </div>
  </nav>
  )
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired, 
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Set title here", 
    aboutText: "Set about text here"
}