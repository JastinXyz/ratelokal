import React, { useState } from "react";
import { Head } from '@inertiajs/react';

export default function LandingPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      < Head title={"LandingPage - RateLokal"} />
      <div className="min-h-screen bg-[#17B271] flex flex-col justify-center items-center rounded-b-[3rem] relative">
        <div className="absolute top-0 left-0 p-6">
          <img src="/assets/img/logo.png" alt="Logo" className="w-56 h-auto" />
        </div>

        <div className="absolute top-0 right-0 px-12 py-12 flex space-x-4">
          <button className="bg-[#0B905B] text-white w-32 px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all">
            Cari
          </button>
          <button className="bg-[#0B905B] text-white w-32 px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all">
            Masuk
          </button>
        </div>

        <div className="text-center w-full px-4 mt-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white max-w-3xl mx-auto mb-4">
            Lorem Ipsum Dolor Sit Amet
          </h1>

          <p className="text-lg sm:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="relative w-full max-w-md mx-auto">
            <input
              type="text"
              placeholder="cari umkm..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 rounded-full pl-10 text-white bg-[#73E2AC] border-none focus:outline-none placeholder:text-white"
            />
          </div>
        </div>
      </div>

      <div className="bg-white w-full py-12 px-4 sm:px-12">
        <h2 className="text-black text-2xl sm:text-4xl text-left mb-8">
          Beberapa <span className="font-bold">RateLokal</span> yang <br />{" "}
          dapat tawarkan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-8">
          <div className="bg-[#17B271] p-8 rounded-lg flex flex-col items-start h-[250px]">
            <div className="bg-[#0B905B] w-16 h-16 mb-6 rounded-md"></div>
            <h3 className="text-xl font-bold text-white mb-4">Lorem Ipsum</h3>
            <p className="text-white text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
              quis quod minus quas itaque est?
            </p>
          </div>

          <div className="bg-[#17B271] p-8 rounded-lg flex flex-col items-start h-[250px]">
            <div className="bg-[#0B905B] w-16 h-16 mb-6 rounded-md"></div>
            <h3 className="text-xl font-bold text-white mb-4">Lorem Ipsum</h3>
            <p className="text-white text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              dolores harum a consequuntur veritatis hic quisquam sint ad,
              architecto quia.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-8 mt-8">
          <div className="bg-[#17B271] p-8 rounded-lg flex flex-col items-start h-[250px]">
            <div className="bg-[#0B905B] w-16 h-16 mb-6 rounded-md"></div>
            <h3 className="text-xl font-bold text-white mb-4">Lorem Ipsum</h3>
            <p className="text-white text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A fugit
              totam porro quisquam nulla molestias obcaecati distinctio aut
              quidem iste.
            </p>
          </div>

          <div className="bg-[#17B271] p-8 rounded-lg flex flex-col items-start h-[250px]">
            <div className="bg-[#0B905B] w-16 h-16 mb-6 rounded-md"></div>
            <h3 className="text-xl font-bold text-white mb-4">Lorem Ipsum</h3>
            <p className="text-white text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident illo ratione deserunt harum repudiandae ipsa!
            </p>
          </div>
        </div>
      </div>

      <footer className="bg-[#17B271]">
        <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
            <a
              className="inline-block rounded-full bg-[#0B905B] p-2 text-white shadow  sm:p-3 lg:p-4"
              href="#MainContent"
            >
              <span className="sr-only">Back to top</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          <div className="lg:flex lg:items-end lg:justify-between">
            <div>
              <div className="flex">
                <img
                  src="/assets/img/logo.png"
                  alt="Logo"
                  className="w-64 h-auto"
                />
              </div>

              <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-white lg:text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt consequuntur amet culpa cum itaque neque.
              </p>
            </div>

            <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
              <li>
                <a
                  className="text-white transition hover:text-gray-100"
                  href="#"
                >
                  {" "}
                  Cari UMKM{" "}
                </a>
              </li>
            </ul>
          </div>

          <p className="mt-12 text-center text-sm text-white lg:text-right">
            Copyright &copy; 2024. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
