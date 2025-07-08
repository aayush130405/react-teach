import React from 'react'

function Card({username = "default", age = "NULL"}) {
  return (
    <div>
        <img src="" alt="" />
        <h1 className='text-2xl bg-green-500 p-3 rounderd'></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. name is : {username}, age is : {age}.</p>
    </div>
  )
}

export default Card