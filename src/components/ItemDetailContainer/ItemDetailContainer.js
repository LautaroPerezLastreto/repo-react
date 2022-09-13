import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const film = {id:1, image: "https://i.blogs.es/57e302/cristianbale/450_1000.jpeg", title: "American Psycho"};

export const ItemDetailContainer = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout (() =>{
        resolve (film);
      }, 3000);
    });
    getData.then(res => setData(res));
  }, [])

  return (
    <ItemDetail data = {data}/>
  );
}

export default ItemDetailContainer;