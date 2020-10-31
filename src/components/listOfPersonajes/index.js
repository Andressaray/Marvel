import React from 'react'

import UsePersonajes    from '../../hooks/usePersonajes'
import Personaje        from '../personaje/index'
import './style.css'

export default function ListOfPersonajes({keyword}) { 
    const {loading, personajes} = UsePersonajes({keyword})
    if(loading) {
        return <li>Cargando ...</li>
    }
    else {
        if(!keyword) {
            const data = personajes.data
            if(!data){
                return <li>Error ...</li>
            }
            return (
                    <div className="container">
                        <div className="row">
                            {
                                data.results.map(({id, name, thumbnail}) => {
                                    const image = `${thumbnail.path}.${thumbnail.extension}`
                                    return (
                                        <Personaje id={id} image= {image} name={name} />
                                    )
                                })
                            }
                        </div>
                    </div>
            )
        }
        else {
            const data              = personajes.data
            let aux                 = 0
            let contentPersonajes   = []
            const personaje = data.results.find((dato) => {
                if(dato.name.toLowerCase().includes(keyword)){
                    contentPersonajes[aux] = dato
                    aux++ 
                }else{
                    return false
                }
            })
            return (
                <div className="container">
                    <div className="row">
                    {
                        contentPersonajes.map(({id, name, thumbnail}) => {
                            const image = `${thumbnail.path}.${thumbnail.extension}`
                            return (
                                <Personaje id={id} image= {image} name={name} />
                            )
                        })
                    }   
                    </div>
                </div>
            )
        }
    }
}