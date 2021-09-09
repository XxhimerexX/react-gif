import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     setCategories([...categories,'HxH']);
    // }

    return (
        <div>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={setCategories}/>

            <hr></hr>


            <ol>
        {
            categories.map(category => 
             <GifGrid category={category} key={category}/>
        )
        }
            </ol>

        </div>
    )
}
