import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';

const Tag = () => {
  const [prompt,setPrompt]=useState('');
  const [loading,setLoading]=useState('false');
  const API_KEY='1vjdeJARPYggXqnCkCR58uutPSozvpy7';
  async function promptGif(){
    setLoading(true);
    const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${prompt}`;
    const {data}=await axios.get(url);
    // console.log(da)
    const imageSource=data.data.images.downsized_large.url;
    console.log(imageSource)
    setGif(imageSource)
    setLoading(false)
  }
  useEffect(()=>{
    promptGif()
  },[])
  const [gif, setGif]=useState('');
  return (
    <div className=' flex flex-col items-center  w-1/2 border border-black rounded-lg  gap-y-5 
     mt-[15px] mb-[10px]  bg-green-500'>
      <h1 className='text-black text-2xl  font-bold underline'>Prompt Based Gif</h1>
      {
      loading?(<Spinner/>):(<img src={gif} width={450} alt="gif"  />)
      }
      <input type="text"
      onChange={(event)=>{
        setPrompt(event.target.value)
        // console.log(prompt)
      }}
      name='tag' />
      <button className=" bg-yellow-300 w-10/12 rounded-lg py-2 mb-[15px]" onClick={()=>{
        promptGif();
      }}>Generate</button>
    </div>
  )
}

export default Tag