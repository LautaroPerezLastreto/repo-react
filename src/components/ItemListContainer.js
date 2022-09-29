import React, {useState, useEffect} from 'react'
import ItemCount from './ItemCount/ItemCount'
import Title from './Title'
import ItemList from './ItemList/ItemList'
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";



export const ItemListContainer = () => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();


    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
        if (categoriaId) {
            const queryFilter = query(queryCollection, where('category', '==', categoriaId))
        getDocs(queryFilter) 
        .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
        }else{
            getDocs(queryCollection) 
        .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
        }
    }, [categoriaId])
    

    const onAdd = (quantity) =>{
        console.log(`Compraste ${quantity} unidades`)

    }
  return (
    <>
    <Title greeting = 'Movieseries'/>
    <ItemCount initial={1} stock={5} onAdd={onAdd} />
    <ItemList data={data}/>
    </>
  );
}

export default ItemListContainer