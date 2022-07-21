import React from 'react'
import { useState } from 'react'
import Dem from './Dem'


const Demo = () => {
 const [word, setWord]=useState('joy')
 function ko(){
  setWord('peace')}
 
  return (
    <div>
      <Dem word={word} ko={ko}/>
    </div>
  )
}

export default Demo