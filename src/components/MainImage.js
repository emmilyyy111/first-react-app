import React from 'react'
import heroImage from '../images/sandwhichpic.webp'

function MainImage() {
    return(
        <div className="image-container">
            <img className="main-image" src={heroImage} />
        </div>

    )
}

export default MainImage