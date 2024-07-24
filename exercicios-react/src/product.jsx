import React from 'react'

const Product = ({ data }) => {
  return (
    <div>
      <p>{data.nome}</p>
      <p>{data.preco}</p>
    </div>
  )
}

export default Product
