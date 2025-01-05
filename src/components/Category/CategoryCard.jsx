import React from 'react'

const CategoryCard = ({card}) => {
  return (
    <div className='category-card'>
      <img src={card.img} alt="" />
      <p>{card.type}</p>
    </div>
  )
}

export default CategoryCard