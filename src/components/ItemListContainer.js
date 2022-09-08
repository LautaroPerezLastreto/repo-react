import React, {useState, useEffect} from 'react'
import ItemCount from './ItemCount/ItemCount'
import Title from './Title'
import ItemList from './ItemList/ItemList'


const films = [
    {id: 1, image: "https://i0.wp.com/zoomf7.net/wp-content/uploads/2019/08/fight-club-1.jpg", title: "Fight Club"},
    {id: 2, image: "https://cdn.playpilot.tech/18bf9988571111eca8f30a58a9feac02/src/img?optimizer=image&quality=75&width=1280&aspect_ratio=16%3A9", title: "Seven"},
    {id: 3, image: "https://ca-times.brightspotcdn.com/dims4/default/959d1d5/2147483647/strip/true/crop/1478x966+0+0/resize/1478x966!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F6f%2Ff2%2F91c6d01c4c0f8aba973552ecc4ca%2Fscarface.jpg", title: "Scarface"}
];

export const ItemListContainer = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(films);
            }, 3000);
        });
        getData.then(res => setData(res))
        
        
    }, [])
    

    const onAdd = (quantity) =>{
        console.log(`Compraste ${quantity} unidades`)

    }
  return (
    <>
    <Title greeting = 'Ena'/>
    <ItemCount initial={1} stock={5} onAdd={onAdd} />
    <ItemList data={data}/>
    </>
  );
}

export default ItemListContainer