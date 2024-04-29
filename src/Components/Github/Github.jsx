import React from "react";
import { useLoaderData } from "react-router-dom";
//hook that uses data from fetch
function Github(){
    const data=useLoaderData();
    return(
        <div className='text-center m-4 mt-10 bg-gray-600 text-white p-4 text-3xl'>
            Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture" className="w-56 mx-auto mt-10" />
    </div>
    )
}

export default Github
//normal api calling is done by useEffect whose data is then entered in useState
//loader used to fetch data directly from here data is fetched before useEffect also when the link is clicked it fetches the before only and displays the data
//more optimised way.

export const githubInfo=async ()=>{
    const response = await fetch('https://api.github.com/users/DeevSavla')
    return response.json(); //returns a promise
}