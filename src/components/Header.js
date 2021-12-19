import React from 'react'
import paragon from '../pictures/paragon.png'
const Header = () => {
    return (
        <div className='header'>
            <div className='left'>
                Yatzy
            </div> 
            <div className='right'>
                <img src={paragon} className='logo'/>
            </div>
        </div>
    )
}

export default Header
