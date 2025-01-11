import React from 'react'
import style from "./Display.module.css"

const Display = ({ displayValue }) => {
   

  return (
    <div>
        <input className={style.input} value={displayValue}  readOnly type="text" />
    </div>
  )
}

export default Display

