import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'
import Dummy from './components/Dummy'

const App = () => {
  return (
    <div className='w-full h-screen flex flex-col background relative overflow-x-hidden items-center'>
      <h1 className='  w-11/12 bg-white rounded-md  text-3xl px-10 py-2 font-bold 
      text-center mt-[40px]  items-center '>RANDOM GIFS</h1>
      <div className=' flex flex-col   w-11/12 h-screen items-center gap-y-10 mt-[30px]'>
      <Random/>
      <Tag/>
      </div>  
    </div>

  )
}

export default App