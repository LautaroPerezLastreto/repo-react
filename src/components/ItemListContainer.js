import React from 'react'
import ItemCount from './ItemCount/ItemCount'
import Title from './Title'
import ItemList from './ItemList'


const films = [
    {id: 1, image: "https://static.wikia.nocookie.net/cine/images/f/f8/Fight-Club-1999.jpg/revision/latest?cb=20121017183904", title: "Fight Club"},
    {id: 2, image: "https://pics.filmaffinity.com/Seven_Se7en-498520078-large.jpg", title: "Seven"},
    {id: 3, image: "https://pics.filmaffinity.com/El_precio_del_poder-798722679-large.jpg", title: "Scarface"}
];

export const ItemListContainer = () => {

    const onAdd = (quantity) =>{
        console.log(`Compraste ${quantity} unidades`)

    }
  return (
    <>
    <Title greeting = 'Ena'/>
    <ItemCount initial={1} stock={5} onAdd={onAdd} />
    <ItemList/>
    </>
  );
}

export default ItemListContainer