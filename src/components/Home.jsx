import React from "react";
import HomeBg from "../assets/home/background-home-mobile.jpg";
const Home = () => {
  return (
    <div className="relative min-h-screen overflow-auto">
      <div
        className="bg-[url(src/assets/home/background-home-mobile.jpg)]
    lg:bg-[url(src/assets/home/background-home-desktop.jpg)]
      bg-cover bg-center bg-no-repeat fixed inset-0 -z-10"
      ></div>
      <section className="min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-20 px-6  mx-auto place-items-center lg:h-full lg:px-0 lg:mx-32 ">
          <article className="text-center lg:text-left">
            <h5 className="text-slate-500 my-20 brightness-150 lg:my-0 lg:text-2xl">
              SO, YOU WANT TO TRAVEL TO
            </h5>
            <h1 className="text-white my-10 text-8xl lg:text-[10rem] lg:my-7">
              SPACE
            </h1>
            <p className="text-slate-400 my-10 brightness-150 lg:my-0 lg:w-7/12">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </article>
          <article className="bg-white rounded-full w-[125px] h-[125px] lg:w-[225px] lg:h-[225px] flex items-center justify-center mx-auto my-14">
            <button className="text-black text-xl tracking-widest">
              EXPLORE
            </button>
          </article>
        </div>
      </section>
    </div>
  );
};
export default Home;
