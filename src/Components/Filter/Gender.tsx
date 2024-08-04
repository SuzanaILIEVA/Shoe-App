import React, { useEffect } from 'react'
import { FilterProp } from './Size'
import { useSearchParams } from 'react-router-dom'

const Gender = ({selected, setSelected}:FilterProp) => {
    
  const [params , setParams] = useSearchParams()

   // state her değiştiğinde urldeki parametreleri günceller.
   useEffect(()=>{
    //secili eleman varsa virgulle ayirip url'e ekler
    if(selected.length > 0){
      params.set("gender" , selected.join(","))
     
    }else{
      //secili eleman yoksa url'deki parametreyi kaldir.
      params.delete("gender")
     
    }
    setParams(params)

   },[selected])



 // uzerıne tıklanan gender state'te yoksa ekle varsa kaldir.
 const toggle = (gender:string) =>{
  const found =  selected.includes(gender)
  console.log(found);

  if(!found) {
    setSelected([...selected, gender])

  }else{
    setSelected(selected.filter((i) => i !== gender))
  }
  
 }

  return (
    <div>
     <h2>Gender</h2>

     <div className='flex gap-4 font-open font-semibold items-center'>
      <input 
      checked={selected.includes("men")} // inputun checked ozelligini selected state'ine bagli olarak ayarladik.sayfa yenilendiginde secili ise secili gelebilmesi icin .
      onChange={() => toggle("men")}
      id="men" type="checkbox"  />
      <label htmlFor="men" className='select-none'>Men</label>
     </div>

     <div className='flex gap-4 font-open font-semibold items-center'>
      <input 
      checked={selected.includes("women")}
      onChange={() => toggle("women")}
      id="women" type="checkbox"  />
      <label htmlFor="women" className=''>Women</label>
     </div>
    </div>
  )
}

export default Gender
