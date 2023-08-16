import React, { useState } from 'react'
import PropTypes from 'prop-types' // for prop type filter

// DO NOT MODIFY PROP VALUES
// PROPS MUST BE READ ONLY


export default function Navbar(props){

    return(
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    
                    <a className="navbar-brand" href="/">{props.title}</a>

                    <div className="form-check form-switch mx-5">
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label className={`form-check-label text-${(props.mode==="dark")?"light":"dark"}`} for="flexSwitchCheckDefault">Toggle mode</label>
                    </div>
                </div>

            </nav>
        </div>
    );
}

Navbar.propTypes = {
    title: PropTypes.string
}