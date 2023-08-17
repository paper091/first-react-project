import React, { useState } from 'react'
import PropTypes from 'prop-types' // for prop type filter
// import { BrowserRouter, Link, Route } from 'react-router-dom';

// DO NOT MODIFY PROP VALUES
// PROPS MUST BE READ ONLY

// for github pages
export default function Navbar(props){

    return(
        <router>
            <div>
                <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                    <div className="container-fluid">
                        
                        <a className="navbar-brand" href="#">{props.title}</a>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href={"#"}>Home</a>
                                {/* <Link to="/">Home</Link> */}
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                                </li>
                            </ul>
                        </div>


                        <div className="form-check form-switch mx-5">
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className={`form-check-label text-${(props.mode==="dark")?"light":"dark"}`} for="flexSwitchCheckDefault">Toggle mode</label>
                        </div>
                    </div>

                </nav>
            </div>
        </router>
    );
}

Navbar.propTypes = {
    title: PropTypes.string
}