import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white-fa p-4 2xl:p-8 rounded-xl lg:rounded-[24px] flex justify-between text-gray-dark  max-w-[1320px] mx-auto">
      <div className="flex gap-10 whitespace-nowrap max-lg:hidden items-center">
        <Link to="/">New Drops 🔥</Link>
        <Link to="/" className="flex items-center gap-2">Man 
        <img  src="/public/down.svg" className=""/>
         </Link>
        
        <Link to="/" className="flex items-center gap-2">Women 
        <img src="/public/down.svg" alt="" />
        </Link>
      </div>

      <button className="lg:hidden">
        <img src="/public/bars.svg" alt="" />
      </button>

      <Link to="/">
        <img src="/public/Logo.svg" alt="" />
      </Link>

      <div className="flex gap-[9px] lg:gap-4 items-center">
        <button className="max-lg:hidden">
          <img src="/public/Search.svg" alt="" />
         
        </button>
        <button>
          <img src="/public/User.svg" alt="" />
        </button>
        <button className="w-[25px] font-open h-[25px] bg-yellow rounded-full font-semibold grid place-items-center">
          <span>0</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
