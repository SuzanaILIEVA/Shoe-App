import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getShoe } from "../../api";
import { Shoe } from "../../types";
import Loader from "../../Components/Loader";
import Error from "../../Components/Error";
import Head from "./Head";
import Color from "./Color";
import Size from "./Size";
import xss from "xss";
import Card from "../../Components/Card";
import { shoePic } from "../../Utils/constants";

const Detail = () => {
  const { id } = useParams();
  console.log(id);

  const { isLoading, error, data } = useQuery<Shoe>({
    queryKey: ["shoe"],
    queryFn: () => getShoe(id as string),
  });
  console.log(data);

  return (
    <div className="max-w-[1320px] m-auto">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : data ? (
        <>
          <section className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
            <div className="lg:col-span-2 grid grid-cols-2 gap-4 mt-8  rounded-[48px]">
              {data.picture.map((url, i) => (
                <img src={url} key={i} className="h-full w-full" />
              ))}
            </div>
            <div className="flex flex-col gap-8">
              <Head data={data} />

              <Color data={data.color} />

              <Size data={data.size} />

              <div className="flex gap-4 mt-8">
                <button className="bg-gray-dark text-white py-2 px-6 w-full rounded-md hover:bg-gray-800">
                  ADD TO CART
                </button>
                <img
                  src="/heart.png"
                  alt=""
                  className="p-3 bg-gray-dark rounded-md  hover:bg-gray-800"
                />
              </div>
              <div>
                <button className="bg-blue text-white py-2 px-6 w-full rounded-md hover:bg-[#1e5fe6]">
                  BUY IT NOW
                </button>
              </div>

              <div>
                <h2>About the product</h2>

                <p
                  dangerouslySetInnerHTML={{ __html: xss(data.description) }}
                  className="font-open my-4"
                ></p>
              </div>
            </div>
          </section>
          <div>
            <div className="flex justify-between my-10 md:mt-28">
              <h1 className="text-2xl">You may also like</h1>
              <div className="flex gap-3 ">
                <img
                  src="/right.png"
                  alt=""
                  className="bg-gray-400 p-1 rounded-md"
                />
                <img
                  src="/left.png"
                  alt=""
                  className="bg-gray-dark p-1 rounded-md"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {shoePic.map((url, index) => (
                <div key={index}>
                  <Card item={{ ...data, picture: [url] }} />
                </div>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Detail;
