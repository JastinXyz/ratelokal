import React, { useState } from "react";
import { Head, Link } from '@inertiajs/react';
import ApplicationLogo from "@/Components/ApplicationLogo";
import { RiArrowDownCircleLine, RiSearch2Line } from "@remixicon/react";

export default function LandingPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Head title={"LandingPage - RateLokal"} />
      <div className="min-h-[40rem] bg-[#17B271] rounded-b-[3rem]">
        <div className="flex justify-between items-center pt-8 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div>
            <ApplicationLogo className="text-white w-56 h-auto" />
          </div>

          <div className="flex space-x-4">
            <Link href="/search">
              <button className="bg-[#0B905B] text-white w-32 px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all">
                Cari
              </button>
            </Link>
            <Link href="/login">
              <button className="bg-[#0B905B] text-white w-32 px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all">
                Masuk
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-36">
          <div className="text-center w-full px-4 mt-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-white max-w-3xl mx-auto mb-4">
              Lorem Ipsum Dolor Sit Amet
            </h1>

            <p className="text-lg sm:text-2xl text-white mb-8 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <div className="relative w-full max-w-md mx-auto">
              <RiSearch2Line className="w-6 h-6 text-white absolute top-3 left-3" />
              <input
                type="text"
                placeholder="cari umkm..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 rounded-full pl-10 text-white bg-[#73E2AC] border-none focus:outline-none placeholder:text-white"
              />
            </div>
            <div className="mt-28 flex justify-center">
              <a href="#keunggulan">
                <RiArrowDownCircleLine className="w-8 h-8 animate-bounce text-white"/>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section id="keunggulan" className="bg-white w-full py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-black text-2xl sm:text-4xl text-left mb-2">
          Beberapa <span className="font-bold">RateLokal</span> yang <br />{" "}
          dapat tawarkan
        </h2>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-2 py-4">
            <div className="bg-primary-500 shadow rounded-3xl group cursor-default">
                <div className="p-5">
                  <div className="h-16 w-16 bg-primary-600 rounded-xl p-4">
                    {/* <x-icons.robot  /> */}
                  </div>
                  <div className="mt-2">
                    <h2 className="text-2xl font-bold text-white">Lorem Ipsum</h2>
                    <p className="text-sm font-light text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellat esse quo.
                    </p>
                  </div>
                </div>
            </div>
            <div className="bg-primary-500 shadow rounded-3xl group cursor-default md:col-span-2">
                <div className="p-5">
                  <div className="h-16 w-16 bg-primary-600 rounded-xl p-4">
                    {/* <x-icons.user-x  /> */}
                  </div>
                  <div className="mt-2">
                    <h2 className="text-2xl font-bold text-white">Lorem Ipsum</h2>
                    <p className="text-sm font-light text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officia beatae repudiandae pariatur error ratione explicabo iusto blanditiis? Deleniti exercitationem sapiente nulla illum?
                    </p>
                  </div>
                </div>
            </div>
            <div className="bg-primary-500 shadow rounded-3xl group cursor-default md:col-span-2">
                <div className="p-5">
                  <div className="h-16 w-16 bg-primary-600 rounded-xl p-4">
                    {/* <x-icons.infinity  /> */}
                  </div>
                  <div className="mt-2">
                    <h2 className="text-2xl font-bold text-white">Lorem Ipsum</h2>
                    <p className="text-sm font-light text-white">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, accusantium quidem ab numquam, qui excepturi, perspiciatis maxime sequi exercitationem nisi magni repudiandae perferendis.
                    </p>
                  </div>
                </div>
            </div>
            <div className="bg-primary-500 shadow rounded-3xl group cursor-default">
                <div className="p-5">
                  <div className="h-16 w-16 bg-primary-600 rounded-xl p-4">
                    {/* <x-heroicon-s-academic-cap className="fill-white" /> */}
                  </div>
                  <div className="mt-2">
                    <h2 className="text-2xl font-bold text-white">Lorem Ipsum</h2>
                    <p className="text-sm font-light text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolorem impedit repudiandae quam qui.
                    </p>
                  </div>
                </div>
            </div>
          </div>
      </section>

      <footer className="bg-[#17B271]">
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
            <a
              className="inline-block rounded-full bg-[#0B905B] p-2 text-white shadow  sm:p-3 lg:p-4"
              href="#"
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
                <ApplicationLogo className="text-white w-56 h-auto" />
              </div>

              <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-white lg:text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt consequuntur amet culpa cum itaque neque.
              </p>
            </div>

            <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
              <li>
                <Link
                  className="text-white transition hover:text-gray-100"
                  href="/search"
                >
                  Cari UMKM
                </Link>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-gray-100"
                  href="/#keunggulan"
                >
                  Keunggulan
                </a>
              </li>
              <li>
                <Link
                  className="text-white transition hover:text-gray-100"
                  href="/register"
                >
                  Daftar
                </Link>
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
