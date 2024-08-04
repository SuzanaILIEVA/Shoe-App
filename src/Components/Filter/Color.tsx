import React, { useEffect } from "react";
import { FilterProp } from "./Size";
import { colors } from "../../Utils/constants";
import { useSearchParams } from "react-router-dom";

const Color = ({ setSelected, selected }: FilterProp) => {
  const [params, setParams] = useSearchParams();

  // state her değiştiğinde urldeki parametreleri günceller.
  useEffect(() => {
    if (selected.length > 0) {
      params.set("color", selected.join(","));
     
    } else {
      params.delete("color");
     
    }
    setParams(params)

  }, [selected]);
  // console.log(selected);


   // uzerıne tıklanan color state'te yoksa ekle varsa kaldir.
  const toggle = (color: string) => {
    const found = selected.includes(color);

    if (!found) {
      setSelected([...selected, color]);
    } else {
      setSelected(selected.filter((i) => i !== color));
    }
  };
  return (
    <div>
      <h2>Colors</h2>

      <div className="grid grid-cols-5 gap-4 mt-5">
        {colors.map((color, key) => {
          // color secili mi?
          const found = selected.includes(color.id);
          return (
            <div key={key}
              onClick={() => toggle(color.id)}
              style={{ background: color.code }}
              className={`rounded-md py-2 px-4 cursor-pointer select-none text-transparent transition ${
                found ? "ring-4" : ""
              } `}
            >
              .
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Color;
