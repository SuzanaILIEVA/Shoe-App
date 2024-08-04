import React from 'react'

const Buttons = ({open}:{open: () => void }) => {
  return (
    <div className='mt-5 flex gap-5 lg:hidden'>
     <button onClick={open} className='flex-1 bg-white rounded-md flex p-2 px-4 items-center justify-between'>Filters
        <img src="/lines.svg" alt="" />
     </button>
     <button className='flex-1 bg-white rounded-md flex items-center p-2 px-4 justify-between'>Trending
        <img src="/chevron_down.svg" alt="" />
     </button>
    </div>
  )
}

export default Buttons
