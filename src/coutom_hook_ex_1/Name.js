import React from 'react'
import useOnline from './useOnline'

const Name = () => {

    useOnline()
  return (
    <h2>
     B - {useOnline() ? "vinu" : "gotibhai"}
    </h2>
  )
}

export default Name
