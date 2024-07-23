
import React from 'react'

const RenderItem = ({ name, price, user, sold}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{user}</p>
      <p>{sold}</p>
    </div>
  )
}

export default RenderItem
