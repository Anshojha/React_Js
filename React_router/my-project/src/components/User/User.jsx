import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid }= useParams()
  return (
  
    <div className='bg-gray-500 text-white text-3xl p-4 m-4 flex justify-center items-center'>
     User : {userid}
    </div>
  )
}

export default User
