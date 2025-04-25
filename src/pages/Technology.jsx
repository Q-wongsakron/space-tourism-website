import React, { useState } from "react";

import { technology } from "../data.json";
const Technology = () => {
  const [index, setIndex] = useState(0);
  const current = technology[index];

  console.log(current);

  return (
    <div className="relative min-h-screen overflow-auto">
      <div className="h-screen w-full bg-[url(src/assets/technology/background-technology-mobile.jpg)] bg-cover bg-center bg-no-repeat fixed inset-0 -z-10"></div>
      <section className="grid grid-cols-1 justify-center pt-32  lg:grid lg:grid-cols-2 lg:pt-52">
        <h3 className="text-slate-200 text-center text-xl lg:absolute lg:top-2/12 lg:left-1/12 lg:text-2xl">
          <span className="text-slate-400">03</span> SPACE LAUNCH 101
        </h3>
        <article className="w-screen max-w-none mt-6 lg:w-full lg:order-2">
          <picture className="lg:flex lg:justify-end">
            <source
              media="(min-width: 765px)"
              srcSet={
                new URL(
                  `../assets/technology/${current.images.portrait
                    .split("/")
                    .pop()}`,
                  import.meta.url
                ).href
              }
            />
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
              className="w-full object-cover lg:w-10/12 "
            />
          </picture>
        </article>

        <article className="text-center flex flex-col items-center gap-6  mt-8 px-4 lg:order-1 lg:grid lg:grid-cols-[100px_auto] lg:text-left lg:ml-32">
          <ol className="flex lg:flex-col gap-10 justify-center items-center mt-8 ">
            {technology.map((_, i) => (
              <li
                key={i}
                className={`flex justify-center items-center text-sm  h-8 w-8 lg:h-16 lg:w-16 lg:text-xl rounded-full  cursor-pointer ${
                  i === index
                    ? "bg-white text-slate-800"
                    : "text-white border-slate-400 border-1"
                }`}
                onClick={() => setIndex(i)}
              >
                {i + 1}
              </li>
            ))}
          </ol>
          <div className="lg:flex lg:flex-col lg:gap-6 lg:mt-14 mb-10">
            <h3 className="text-slate-400 text-xl uppercase">
              the terminology...
            </h3>
            <h1 className="text-slate-200 text-4xl uppercase lg:text-6xl">
              {current.name}
            </h1>
            <p className="text-slate-400 ">{current.description}</p>
          </div>
        </article>
      </section>
    </div>
  );
};
export default Technology;
