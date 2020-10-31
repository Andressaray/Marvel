import React, { useState } from 'react'

import ListOfPersonajes from '../listOfPersonajes/index'
import Header           from '../header/index'
import './style.css'

export default function Home() {
    const [keyword, setKeyword] = useState('')
    const handleInput = (e) => {
        const keywordTemporal = e.target.value.toLowerCase()
        setKeyword(keywordTemporal)
    }
    return (
        <div className='content'>
            <Header />
                <input name='name' onChange={handleInput} className='input' 
                placeholder='Nombre del super heroe' value={keyword}
            />
            <br/>
            <ListOfPersonajes keyword={keyword} />
        </div>
    )
}