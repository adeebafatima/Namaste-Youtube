import React from 'react'
import Button from './Button'

const list=["All","Gaming","Songs","Live","Soccer","Cricket","Cooking","Live","Live","Soccer","Cricket","Cooking","Live","Gaming","Songs","Live","Soccer"]

const ButtonList = () => {
  return (
    <div className='flex'>{list.map((item)=><Button name={item}/>)}</div>
  )
}

export default ButtonList