import React, { useState } from "react";

import { technology } from "../data.json";
const Technology = () => {
  const [index, setIndex] = useState(0);
  const current = technology[index];

  console.log(current);

  return (
    <div className="relative min-h-screen overflow-auto">
      <div className="h-screen w-full bg-[url(src/assets/technology/background-technology-mobile.jpg)] bg-cover bg-center bg-no-repeat fixed inset-0 -z-10"></div>
      <section className="grid grid-cols-1 justify-center pt-32  ">
        <h3 className="text-slate-200 text-center text-xl">
          <span className="text-slate-400">03</span> SPACE LAUNCH 101
        </h3>
        <article className="w-screen max-w-none mt-6 ">
          <img
            src={
              new URL(
                `../assets/technology/${current.images.landscape
                  .split("/")
                  .pop()}`,
                import.meta.url
              ).href
            }
            alt="Launch vehicle"
            className="w-full object-cover "
          />

          {/* <div>
            <button className="flex justify-center items-center text-sm text-white h-8 w-8 rounded-full border-slate-400 border-1 -z-5 cursor-pointer">
              1
            </button>
          </div> */}
          {/* <button></button> */}
          <ol className="flex gap-10 justify-center mt-8 ">
            {technology.map((_, i) => (
              <li
                key={i}
                className={`flex justify-center items-center text-sm  h-8 w-8 rounded-full  cursor-pointer ${
                  i === index
                    ? "bg-white text-slate-800"
                    : "text-white border-slate-400 border-1"
                }`}
                onClick={() => setIndex(i)}
              >
                {i}
              </li>
            ))}
          </ol>
        </article>
        <article className="text-center flex flex-col items-center gap-6  mt-8 px-4">
          <h3 className="text-slate-400 text-xl uppercase">
            the terminology...
          </h3>
          <h1 className="text-slate-200 text-4xl uppercase">{current.name}</h1>
          <p className="text-slate-400 ">{current.description}</p>
        </article>
      </section>
    </div>
  );
};
export default Technology;
