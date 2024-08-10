import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';

const Random = () => {
  const [gif,setGif]=useState('');
  const [loading, setLoading]=useState('false');
  // const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
  // const API_KEY="bdhtJ30GvF5RvPBFEmBv6oUOY4srItrl";
  const API_KEY="1vjdeJARPYggXqnCkCR58uutPSozvpy7";


  async function fetchData(){
    setLoading(true);
    const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const {data}=await axios.get(url);
    // console.log(da)
    const imageSource=data.data.images.downsized_large.url;
    console.log(imageSource)
    setGif(imageSource)
    setLoading(false)
    
  }
  useEffect(()=>{
    fetchData();
  },[])
  function clickHandler(){
      fetchData();
  }
  return (
    <div className='bg-green-500 w-1/2   rounded-lg border border-black
    flex flex-col items-center gap-x-2 gap-y-5 mt-[15px]  h-11/12 '>
      <h1 className=' mt-[15px] text-2xl font-bold underline uppercase'>Random Gif</h1>
      {
      loading?(<Spinner/>):(<img src={gif} width={450} alt="gif"  />)
      }
      <button className='w-10/12  bg-yellow-500 
      text-lg py-2 rounded-lg mb-[20px]' onClick={clickHandler}>
      Generate</button>
    </div>
  )
}

export default Random