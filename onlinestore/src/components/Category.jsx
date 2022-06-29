import React from 'react'

const Category = ({ categories, filterItems }) => {
    return (
        <div className='category'>
            {categories.map((category, index) => {
                return <button key={index} onClick={() => filterItems(category)}>{category}</button>
            })}
        </div>
  )
}

export default Category