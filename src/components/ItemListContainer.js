import React from 'react'
import ItemCount from './ItemCount/ItemCount'
import Title from './Title'

const ItemListContainer = () => {

    const onAdd = (quantity) =>{
        console.log(`Compraste ${quantity} unidades`)

    }
  return (
    <>
    <Title greeting = 'Ena'/>
    <ItemCount initial={1} stock={5} onAdd={onAdd} />
    </>
  );
}

export default ItemListContainer