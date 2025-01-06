import React from 'react'
import "./Spinner.css"
import gif from "./gif.gif"

const Spinner = () => {
    return (
        <div className='loading-div'>
            <img className='loading-img' src={gif}/>
        </div>
    )
}

export default Spinner
