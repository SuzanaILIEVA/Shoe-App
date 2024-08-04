
import Hero from "./Hero";
import List from "./List";
import Filter from "../../Components/Filter";
import { useState } from "react";
import Buttons from "./Buttons";

const Home = () => {
  const [isOpen ,setIsOpen] = useState(false);


  return (
    <div className=" max-w-[1320px] mx-auto">
      <Hero />
      <Buttons open={()=>setIsOpen(true)}/>
      <h1
        className="text-[20px] md:text-[36px] font-semibold my-[32px]"
      >
        Life Style Shoes
      </h1>

      <div className="grid grid-cols-4 gap-5">
        <Filter  isOpen={isOpen} close={() => setIsOpen(false)}/>
        <List />
      </div>
    </div>
  );
};

export default Home;
