import React from 'react'
import "./Button.css"

export default function ({buttonText,buttonColor}) {
    return (
        <>
            <button className='Button' 
                // style = {{backgroundcolor: {buttonColor}}}
            >
                {buttonText}
            </button>
        </>
    )
}
