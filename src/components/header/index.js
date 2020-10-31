import React from 'react'

import MarvelLogo from './MarvelLogo.svg'
import './style.css'

export default function Header() {
    return (
        <div className='header-content'>
            <div className= 'box-content'>
                <img src={MarvelLogo} alt='MARVEL' className='marvel' />
            </div>
        </div>
    )
}