import React, { useState } from "react";
import { destinations } from "../data.json";

const Destination = () => {
  const [index, setIndex] = useState(0);
  const current = destinations[index];

  return (
    <div className="relative min-h-screen overflow-auto">
      <div className="h-screen w-full bg-[url(src/assets/destination/background-destination-mobile.jpg)] bg-no-repeat bg-center bg-cover fixed inset-0 -z-10"></div>
      <section className="mt-36 text-center p-6">
        <h3 className="text-white">
          <span>01</span> PICK YOUR DESTINATION
        </h3>
        <section className="pt-8 flex justify-center">
          <img
            src={
              new URL(
                `../assets/destination/${current.images.webp.split("/").pop()}`,
                import.meta.url
              ).href
            }
            alt="star"
            className="w-8/12"
          />
        </section>
        <article className="text-white pt-8">
          <ol className="flex gap-8 justify-center text-slate-400">
            {destinations.map((_, i) => (
              <li
                className={`cursor-pointer ${
                  index === i ? "text-white" : "text-slate-400"
                }`}
                onClick={() => setIndex(i)}
              >
                {destinations[i].name}
              </li>
            ))}
          </ol>
          <div className="text-white pt-8">
            <h1 className="text-6xl">{current.name}</h1>
            <p className="text-slate-400 pt-4 ">{current.description}</p>
          </div>
          <hr className="border-gray-700 mt-8" />
          <div className="text-white grid grid-cols-2 pt-8">
            <div>
              <h3 className="text-slate-400 text-sm">AVG.DISTANCE</h3>
              <h2 className="text-2xl">{current.distance}</h2>
            </div>
            <div>
              <h3 className="text-slate-400 text-sm">Est. travel time</h3>
              <h2 className="text-2xl">{current.travel}</h2>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};
export default Destination;
