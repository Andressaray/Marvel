import React from 'react'
import './style.css'
export default function Personaje({id, name, image}){
    return (
        <div className='card' key= {id}>
            <div className='card-header'>
                <h1>{name}</h1>
            </div>
            <div >
                <img src= {image} alt={name} className='card-image' />
            </div>
        </div>
    )
}