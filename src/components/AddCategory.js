import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setTnputValue] = useState('hola mundo')

    const handleInputChange = (e) => {

        // console.log(e.target.value)
        setTnputValue(e.target.value);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('submit echo')

        if(inputValue.trim().length > 2){
            
            setCategories(cats => [ inputValue, ...cats]);
            setTnputValue('');
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <input type="text" value={inputValue} onChange={handleInputChange} />

            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}