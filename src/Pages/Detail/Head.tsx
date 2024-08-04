
import { Shoe } from '../../types'
import Badge from '../../Components/Card/Badge'
import calcDiscount from '../../Utils/calcDiscount'


const Head = ({data}:{data:Shoe}) => {
    const lastPrice = calcDiscount(data.price ,data.discount)


  return (
    <div className='mt-6 md:mt-10'>
      <Badge discount={data.discount}/>

      <h1 className='text-3xl mt-[60px]'>{data.name}</h1>

      <p className='text-[24px] mt-4'>
        <span className='text-blue'>${lastPrice}</span>
        {data.discount && 
         <span className='ps-3 line-through'>${data.price}</span>
        }
       
      </p>
       
      
    </div>
  )
}

export default Head
