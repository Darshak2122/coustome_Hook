import React from 'react'
import useOnline from './useOnline'

const Mark = () => {
    useOnline()
  return (
    <div>
    <h1 style={{color:'red'}}>A</h1>
    <h2>{useOnline() ? "✅" : "❎"}</h2>
    </div>
  )
}

export default Mark
