
import React from 'react'

const RenderItem = ({ name, price, user, sold}) => {
  return (
    <div>
      <h2>Nome: {name}</h2>
      <p>R$: {price}</p>
      <p>Usuário: {user}</p>
      <p>Vendido: {sold}</p>
    </div>
  )
}

export default RenderItem
