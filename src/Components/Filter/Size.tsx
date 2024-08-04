
import { useSearchParams } from 'react-router-dom';
import { numbers } from '../../Utils/constants'
import { useEffect } from 'react';

export type FilterProp ={
  setSelected: React.Dispatch<React.SetStateAction<string[]>>
  selected: string[] ;
}
const Size = ({setSelected , selected}:FilterProp) => {

  const [params ,setParams] = useSearchParams()

   //* State her degistiginde url'deki parametreleri guncelle
   useEffect(()=>{
    if(selected.length > 0 ){
      //secili eleman varsa aralarina virgul koyup url'e ekle ve urli guncelle
     params.set("size" , selected.join(","))
      

    }else{
      // secili eleman yoksa url'deki parametreleri kaldir ve url'i guncelle
      params.delete("size")
    }
    setParams(params)

   },[selected])



  // uzerıne tıklanan numara state'te yoksa ekle varsa kaldir.
  const toggle = (num:string) => {
    // console.log(num);
    
    // tiklanan elemean dizide var mi?
    const found = selected.includes(num)
    // console.log(found);

    // eger yoksa state'te ekle 
    if(!found){
      setSelected([...selected , num])
    }else{
      //varsa state'ten kaldir
      setSelected(selected.filter((i)=> i !== num))
    }
    
  }
  // console.log(selected)

  

  return (
    <div className='lg:mt-5'>
      <h2 className='mb-4'>Numbers</h2>

    <div className='grid grid-cols-5 gap-4'>
    {numbers.map((num , key)=> {
      // numara secili mi?
      const found = selected.includes(num)
        return (
        <p onClick={()=> toggle(num)}  key={key}
        className={`py-2 px-4 lg:px-0 text-center rounded-md cursor-pointer transition hover:bg-zinc-400 text-gray-dark ${found ? "bg-gray-dark text-white" : "bg-white"}`}>
          <span>{num}</span>
        </p>
        )
      } )}
    </div>
    </div>
  )
}

export default Size
