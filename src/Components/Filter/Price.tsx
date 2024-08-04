import { useDebounce } from "@uidotdev/usehooks";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

//set fonksiyonu bu sefer bir string dizisi olmadigi icin sadece string oldugu icin FilterProps type'ni kullanmiyoruz.
type Prop = {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};
const Price = ({ selected, setSelected }: Prop) => {
  const [params, setParams] = useSearchParams();

  //performans icin debounce uyguladik
 const debouncedValue =  useDebounce(selected ,300)
 console.log(debouncedValue);
 

  //not :Unary Plus Operatörü (+): String bir değeri sayıya dönüştürmek için kullanılır.
  useEffect(() => {
    if (+debouncedValue > 130) {
      params.set("price", debouncedValue);
    } else {
      params.delete("price");
    }

    setParams(params);
  }, [debouncedValue]);

  return (
    <div>
      <h2>Price</h2>

      <div>
        <input
          type="range"
          min={130}
          max={1000}
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="w-full"
        />
      </div>

      <div className="flex justify-between font-open font-semibold">
        <span>${selected}</span>
        <span>$1000</span>
      </div>
    </div>
  );
};

export default Price;
