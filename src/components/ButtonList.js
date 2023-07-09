import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const list = ["Movies", "Sandeep","Akshay", "Marvel", "Spiderman","React","LinkedIn","Resume","Jobs","Accidents","Marriage","Love"]
  return (
    <div className='w-[1200px] flex '>
        {list.map((name, index)=> (<Button key={index} name = {name}/>))}
    </div>
  )
}
export default ButtonList