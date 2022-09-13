import React from 'react'

export const ItemDetail = ({data}) => {
  return (
    <div className='container'>
        <div className='detail'>
            <img className='detail-image' src={data.image} alt=""/>
            <div className='content'>
                <h1>{data.title}</h1>
                <h2>2000 ‧ Terror/Suspenso ‧ 1h 42m</h2>
                <p>Patrick Bateman (Christian Bale) es un ejemplo claro del yuppie neoyorquino y su vida no parece excitarlo demasiado hasta que descubre su gusto por la sangre. Entonces, todo cambia: Patrick se convierte en un asesino en serie y nadie sospecha de él debido a su estatus social.</p>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail;