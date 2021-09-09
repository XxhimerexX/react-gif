import React from 'react'
import { useFechGifs } from '../hook/useFetchGifs'
// import { getGif } from '../helpers/getGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

   const {data:images, loading} =  useFechGifs(category);

//    console.log(data)
//    console.log(loading)

    // const [images, setImages] = useState([]);




    // getGif();

    return (
        <>
            <h3>{category}</h3>
            {loading ? <p>Loading</p>: null}
            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem key={img.id} {...img} />
                    ))
                }
            </div>
        </>
    )
}
