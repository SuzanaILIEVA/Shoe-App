import React from 'react'
import { colors } from '../../Utils/constants';

const Color = ({data}:{data:string} ) => {
    // console.log(data);

    const arr = data.split(",")
    

  return (
    <div>
     <h2 className='mb-3'>Colors</h2>

     <div className='flex gap-4'>
        {arr.map((item ,key) => {
            // id' sinden yola cikarak renk kodunu bulduk 
            const color = colors.find((i) => i.id === item)
            console.log( color);
            
            return(
               <div style={{background: color?.code || "gray"}}
               className='h-8 w-8 rounded-full cursor-pointer'
               key={key}
               ></div>
            )
        })}
     </div>
    </div>
  )
}

export default Color
