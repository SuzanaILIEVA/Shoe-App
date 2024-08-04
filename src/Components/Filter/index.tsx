import { useState } from 'react'
import Size from './Size'
import Color from './Color'
import Gender from './Gender'
import Price from './Price'
import { useSearchParams } from 'react-router-dom'

const Filter = ({isOpen ,close}:{isOpen:boolean , close: () => void}) => {

    const [params,setParams] = useSearchParams()

    //Sayfa yenilendiğinde URL'deki parametrelerin seçili olarak gelmesini sağlamak için,
    // başlangıç durumunu (state) URL parametrelerine göre ayarlamamiz gerekir. 
    const initialselectedSize = params.get("size") ? params.get("size")!.split(",") : [];
    const [selectedSize, setSelectedSize] = useState<string[]>(initialselectedSize)

    const initialSelectedColor = params.get("color") ? params.get("color")!.split(",") : [] ;
     const [selectedColor, setSelectedColor] = useState<string[]>(initialSelectedColor)

    const initialSelectedGender = params.get("gender") ? params.get("gender")!.split(",") :[];
     const [selectedGender, setSelectedGender] = useState<string[]>(initialSelectedGender)


     const [selectedPrice , setSelectedPrice] = useState<string>(params.get("price") || "130")


     //reset filter butonuna basilinca state'leri ve url'i sifirlanma

     const handeleReset = ()=>{
       setSelectedSize([]);
       setSelectedColor([]);
       setSelectedGender([]);
       setSelectedPrice("130")

       setParams({})

     }

  return (
    <div className={isOpen ? `max-lg:fixed  max-lg:bg-zinc-900 max-lg:bg-opacity-60 z-10 bg-opacity-60 max-lg:inset-0 max-lg:grid max-lg:place-items-center ` : "max-lg:hidden"}>
     <div className=' max-lg:max-w-lg max-lg:mx-auto max-lg:h-[80vh] max-lg:min-w-[350px]'>
        <div className='max-lg:flex justify-between max-lg:bg-white  max-lg:p-4 max-lg:rounded-t-md'>
        <h2 className='text-xl font-semibold'>Filters</h2>
        <button onClick={close} className='lg:hidden'>X</button>
        </div>
    

     <form className='max-lg:p-5 bg-gray h-full flex flex-col gap-6 rounded-b-md'>
        <Size setSelected={setSelectedSize}  selected={selectedSize}/>
        <Color  setSelected={setSelectedColor} selected={selectedColor}/>
        <Gender setSelected={setSelectedGender} selected={selectedGender}/>
        <Price  selected={selectedPrice}  setSelected={setSelectedPrice}/>
        <button 
        type='reset'
        onClick={handeleReset}
        className='border border-gray-dark rounded-lg hover:bg-gray-dark p-2 w-full hover:text-white transition whitespace-nowrap'>Reset Filters</button>
     </form>
     </div>
    </div>
  )
}

export default Filter
