import React from 'react'
import { GlobalContext } from './GlobalContext'

const Clear = () => {
  const { clearData } = React.useContext(GlobalContext)
  
  return (
    <button onClick={clearData}>
      Limpar
    </button>
  )
}

export default Clear
