import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";


const films = [
    {id: 1, image: "https://i0.wp.com/zoomf7.net/wp-content/uploads/2019/08/fight-club-1.jpg", category:'films', title: "Fight Club"},
    {id: 2, image: "https://cdn.playpilot.tech/18bf9988571111eca8f30a58a9feac02/src/img?optimizer=image&quality=75&width=1280&aspect_ratio=16%3A9", category:'films', title: "Seven"},
    {id: 3, image: "https://ca-times.brightspotcdn.com/dims4/default/959d1d5/2147483647/strip/true/crop/1478x966+0+0/resize/1478x966!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F6f%2Ff2%2F91c6d01c4c0f8aba973552ecc4ca%2Fscarface.jpg", category:'films', title: "Scarface"},
    {id: 4, image: "https://es.web.img2.acsta.net/medias/nmedia/18/78/35/82/20303823.jpg", category:'series', title: "The Walking Dead"},
    {id: 5, image: "https://phantom-marca.unidadeditorial.es/20a6326c21b0bef5d1cb18cf3a9e40d3/resize/1320/f/jpg/assets/multimedia/imagenes/2022/06/08/16546830526781.jpg", category:'series', title: "Peaky Blinders"}
];

export const ItemDetailContainer = () => {

  const [data, setData] = useState({});
  const {detalleid} =useParams();

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout (() =>{
        resolve (films);
      }, 1000);
    });
    getData.then(res => setData(res.find(film => film.id === parseInt(detalleid))));
  }, [])

  return (
    <ItemDetail data = {data}/>
  );
}

export default ItemDetailContainer;