import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/aayush130405')
    //     .then((response) => response.json())
    //     .then((data) => setData(data))
    // }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github of : {data.login} 
        <img src={data.avatar_url} alt="profile picture" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/aayush130405')
    return response.json()
}