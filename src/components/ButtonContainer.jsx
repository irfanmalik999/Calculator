import React from 'react'
import style from "./ButtonContainer.module.css"

import {  nanoid } from 'nanoid';


const ButtonContainer = ( { onButtonClick} ) => {
  let calButton = [ "C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", "."]

  return (
    <div>
        <div className={ style.buttonsContainer } >
            {
                calButton.map((buttonName) => (
                    <button key={nanoid()}  className={style.button} onClick={() => onButtonClick(buttonName)} >{buttonName}</button>
                ))
            }
            
        </div>
    </div>
  )
}

export default ButtonContainer