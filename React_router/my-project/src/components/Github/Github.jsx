import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'



function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Anshojha')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         })
    // }, [])
    return (
        <div className='bg-gray-600 text-center text-3xl p-4 m-5 text-white '>
            Gihtub followers : {data.followers}
            <img src={data.avatar_url} alt="gitgub_pic" width={300} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/Anshojha')
    return response.json()
}




