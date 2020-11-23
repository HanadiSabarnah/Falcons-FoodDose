import React from 'react'

const Category = ({ category }) => {
    return (
        <div className='category'>
            <img className='category__image' src={category.Image} alt='category' />
            <h4 className='category__title'> {category.Name}  </h4>
        </div>
    )

}

export default Category