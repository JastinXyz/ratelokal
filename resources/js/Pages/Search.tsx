import { Head, Link } from '@inertiajs/react';
import React from 'react';

export default function Rateumkm() {
    return (
    <>
     <Head title={"RateUMKM - RateLokal"} />

      <div className="min-h-screen bg-[#d8f7ea]">

          {/* Navbar */}
          <div className="px-4 container max-w-[1440px] mx-auto">
            <div className="h-8"></div>   
              <header className="flex justify-between items-center p-4 bg-white shadow">         
              <img src="/assets/img/logo.png" alt="Logo" className="w-56 h-auto" />       
                  <div>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 mr-5">Cari</button>
                    <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">Masuk</button>
                  </div>
              </header>
          </div>
          {/* EndNavbar */}


          {/* Search */}
          <section className="text-center mt-8   ">
            <div className="container">
              <div className="w-full md:px-0 bg-white py-12">
                <h2 className="text-slate-900 text-xl font-semibold  mb-4">Mulai Cari UMKM Favorit Dibawah</h2>
                  <input 
                    type="text" 
                    placeholder="Cari UMKM..." 
                    className="w-3/4 sm:w-1/2 p-3 border rounded-lg shadow focus:outline-none"
                  />
                </div>
            </div>
          </section>
          {/* End Search */}


      <section className="pt-24 pb-16">
        <div className="container">
          <div className="w-full flex flex-wrap">
            {/*  */}
            <div className="mb-4 p-4 md:w-1/2  xl:w-1/3 mx-auto">
              <div className="bg-white rounded-lg p-4 shadow hover:shadow-lg overflow-hidden">
                <div className="flex flex-row gap-5">
                  <div className="w-full">
                    <img src="https://via.placeholder.com/200" alt="Logo" className="w-full  mx-auto"></img>
                  </div>
                  <div className="w-full">
                    <h3 className=" text-gray-700 text-xl font-bold mt-4">Bank Mandiri</h3>
                    <p className=" text-sm text-gray-500">1291 Testimoni</p>
                    <div className="flex  items-center mt-2">
                      <span className="text-yellow-400 text-2xl">★★★★★</span>
                    </div>
                  </div>
                </div>     
      <hr className="my-6 border-slate-900"></hr>

                <p className="text-gray-600 text-sm flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10l9 9m0 0l9-9m-9 9V3" />
                </svg>
                  0823828382882
                </p>
                <p className="text-gray-600 text-sm flex items-center mt-2">
                  <svg className="w-5 h-5 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657A8 8 0 118 8m0 0v4m0 0h4" />
                  </svg>
                  Jalan blablabla
                </p>   
              </div>
            </div>
            {/*  */}
            <div className="mb-4 p-4 md:w-1/2  xl:w-1/3 mx-auto">
              <div className="bg-white rounded-lg p-4 shadow hover:shadow-lg overflow-hidden">
                <div className="flex flex-row gap-5">
                  <div className="w-full">
                    <img src="https://via.placeholder.com/200" alt="Logo" className="w-full  mx-auto"></img>
                  </div>
                  <div className="w-full">
                    <h3 className=" text-gray-700 text-xl font-bold mt-4">Bank Mandiri</h3>
                    <p className=" text-sm text-gray-500">1291 Testimoni</p>
                    <div className="flex  items-center mt-2">
                      <span className="text-yellow-400 text-2xl">★★★★★</span>
                    </div>
                  </div>
                </div>     
      <hr className="my-6 border-slate-900"></hr>

                <p className="text-gray-600 text-sm flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10l9 9m0 0l9-9m-9 9V3" />
                </svg>
                  0823828382882
                </p>
                <p className="text-gray-600 text-sm flex items-center mt-2">
                  <svg className="w-5 h-5 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657A8 8 0 118 8m0 0v4m0 0h4" />
                  </svg>
                  Jalan blablabla
                </p>   
              </div>
            </div>
            {/*  */}
            <div className="mb-4 p-4 md:w-1/2  xl:w-1/3 mx-auto">
              <div className="bg-white rounded-lg p-4 shadow hover:shadow-lg overflow-hidden">
                <div className="flex flex-row gap-5">
                  <div className="w-full">
                    <img src="https://via.placeholder.com/200" alt="Logo" className="w-full  mx-auto"></img>
                  </div>
                  <div className="w-full">
                    <h3 className=" text-gray-700 text-xl font-bold mt-4">Bank Mandiri</h3>
                    <p className=" text-sm text-gray-500">1291 Testimoni</p>
                    <div className="flex  items-center mt-2">
                      <span className="text-yellow-400 text-2xl">★★★★★</span>
                    </div>
                  </div>
                </div>     
      <hr className="my-6 border-slate-900"></hr>

                <p className="text-gray-600 text-sm flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10l9 9m0 0l9-9m-9 9V3" />
                </svg>
                  0823828382882
                </p>
                <p className="text-gray-600 text-sm flex items-center mt-2">
                  <svg className="w-5 h-5 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657A8 8 0 118 8m0 0v4m0 0h4" />
                  </svg>
                  Jalan blablabla
                </p>   
              </div>
            </div>
            {/*  */}
            <div className="mb-4 p-4 md:w-1/2  xl:w-1/3 mx-auto">
              <div className="bg-white rounded-lg p-4 shadow hover:shadow-lg overflow-hidden">
                <div className="flex flex-row gap-5">
                  <div className="w-full">
                    <img src="https://via.placeholder.com/200" alt="Logo" className="w-full  mx-auto"></img>
                  </div>
                  <div className="w-full">
                    <h3 className=" text-gray-700 text-xl font-bold mt-4">Bank Mandiri</h3>
                    <p className=" text-sm text-gray-500">1291 Testimoni</p>
                    <div className="flex  items-center mt-2">
                      <span className="text-yellow-400 text-2xl">★★★★★</span>
                    </div>
                  </div>
                </div>     
      <hr className="my-6 border-slate-900"></hr>

                <p className="text-gray-600 text-sm flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10l9 9m0 0l9-9m-9 9V3" />
                </svg>
                  0823828382882
                </p>
                <p className="text-gray-600 text-sm flex items-center mt-2">
                  <svg className="w-5 h-5 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657A8 8 0 118 8m0 0v4m0 0h4" />
                  </svg>
                  Jalan blablabla
                </p>   
              </div>
            </div>
            {/*  */}
            <div className="mb-4 p-4 md:w-1/2  xl:w-1/3 mx-auto">
              <div className="bg-white rounded-lg p-4 shadow hover:shadow-lg overflow-hidden">
                <div className="flex flex-row gap-5">
                  <div className="w-full">
                    <img src="https://via.placeholder.com/200" alt="Logo" className="w-full  mx-auto"></img>
                  </div>
                  <div className="w-full">
                    <h3 className=" text-gray-700 text-xl font-bold mt-4">Bank Mandiri</h3>
                    <p className=" text-sm text-gray-500">1291 Testimoni</p>
                    <div className="flex  items-center mt-2">
                      <span className="text-yellow-400 text-2xl">★★★★★</span>
                    </div>
                  </div>
                </div>     
      <hr className="my-6 border-slate-900"></hr>

                <p className="text-gray-600 text-sm flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10l9 9m0 0l9-9m-9 9V3" />
                </svg>
                  0823828382882
                </p>
                <p className="text-gray-600 text-sm flex items-center mt-2">
                  <svg className="w-5 h-5 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657A8 8 0 118 8m0 0v4m0 0h4" />
                  </svg>
                  Jalan blablabla
                </p>   
              </div>
            </div>
            {/*  */}
            <div className="mb-4 p-4 md:w-1/2  xl:w-1/3 mx-auto">
              <div className="bg-white rounded-lg p-4 shadow hover:shadow-lg overflow-hidden">
                <div className="flex flex-row gap-5">
                  <div className="w-full">
                    <img src="https://via.placeholder.com/200" alt="Logo" className="w-full  mx-auto"></img>
                  </div>
                  <div className="w-full">
                    <h3 className=" text-gray-700 text-xl font-bold mt-4">Bank Mandiri</h3>
                    <p className=" text-sm text-gray-500">1291 Testimoni</p>
                    <div className="flex  items-center mt-2">
                      <span className="text-yellow-400 text-2xl">★★★★★</span>
                    </div>
                  </div>
                </div>     
      <hr className="my-6 border-slate-900"></hr>

                <p className="text-gray-600 text-sm flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10l9 9m0 0l9-9m-9 9V3" />
                </svg>
                  0823828382882
                </p>
                <p className="text-gray-600 text-sm flex items-center mt-2">
                  <svg className="w-5 h-5 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657A8 8 0 118 8m0 0v4m0 0h4" />
                  </svg>
                  Jalan blablabla
                </p>   
              </div>
            </div>

          </div>
        </div>
      </section>
  

    </div>
    </>
    );
}