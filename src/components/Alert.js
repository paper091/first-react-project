import React from 'react'

export default function Alert(props) {

    const format = (txt)=>{
        return (txt.charAt(0).toUpperCase() + txt.slice(1));
    }

  return (
    props.alert && <div class={`alert alert-${props.alert.type}`} role="alert">
        <strong>{format(props.alert.type)}</strong>: {props.alert.message}
    </div>
  )
}
