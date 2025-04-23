import React, { useState } from "react";
import { crew } from "../data.json";

const Crew = () => {
  const [index, setIndex] = useState(0);
  const current = crew[index];

  return (
    <div className="relative min-h-screen overflow-auto">
      <div
        className="
   w-full h-screen
  bg-[url('src/assets/crew/background-crew-mobile.jpg')]
  lg:bg-[url('src/assets/crew/background-crew-desktop.jpg')]
  bg-cover bg-center bg-no-repeat fixed inset-0 -z-10
"
      ></div>
      <section className="grid grid-cols-1 justify-center pt-40 p-5 min-h-screen lg:grid-rows-[160px_auto]">
        <h3 className="text-white font-normal tracking-widest text-center lg:text-left lg:pl-40 lg:text-2xl  ">
          <span className="text-slate-500 font-bold">02</span> MEET YOUR CREW
        </h3>

        <article className="text-center lg:grid lg:grid-cols-2 lg:text-left ">
          <img
            src={
              new URL(
                `../assets/crew/${current.images.png.split("/").pop()}`,
                import.meta.url
              ).href
            }
            alt="profile"
            className="pt-8 w-8/12 mx-auto lg:order-4 lg:absolute lg:w-[420px] lg:-translate-x-1/2 lg:right-0"
          />
          <hr className="h-0.5 bg-slate-500  lg:hidden" />
          <div className="lg:order-2"></div>
          <ul className="flex flex-row gap-8 items-center justify-center pt-6 lg:order-3 lg:ml-46 lg:justify-start lg:pt-0 lg:items-start">
            {crew.map((_, i) => (
              <li
                key={i}
                className={`w-4 h-4 rounded-full cursor-pointer transition-all ${
                  i === index ? "bg-white" : "bg-slate-400"
                }`}
                onClick={() => setIndex(i)}
              ></li>
            ))}
          </ul>
          <article className="pt-10 px-4 flex items-center lg:items-start flex-col gap-6 lg:order-1 lg:ml-40 lg:px-0  lg:justify-center">
            <h3 className="text-slate-500 uppercase lg:text-4xl">
              {current.role}
            </h3>
            <h1 className="text-white text-3xl uppercase lg:text-4xl">
              {current.name}
            </h1>
            <p className="text-slate-300">{current.bio}</p>
          </article>
        </article>
      </section>
    </div>
  );
};
export default Crew;
