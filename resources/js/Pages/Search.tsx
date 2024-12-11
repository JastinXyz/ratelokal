import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import useRoute from "@/Hooks/useRoute";
import { UMKM } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { RiArrowLeftSLine, RiArrowRightSLine, RiMapPin2Line, RiSearch2Line, RiStarFill, RiWhatsappLine } from "@remixicon/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function SearchUMKM() {
  let route = useRoute();
  let [UMKM, setUMKM] = useState<UMKM[]>();
  let [rawUMKM, setRawUMKM] = useState();
  let [searchQuery, setSearchQuery] = useState("");
  let [currentPage, setCurrentPage] = useState(1);
  let [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    fetchUMKMData();
  }, [currentPage]);

  function fetchUMKMData() {
    const csrfToken: any = document
      .querySelector('meta[name="csrf-token"]')
      ?.getAttribute('content');
    axios.get('/api/umkm', {
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': csrfToken,
      },
      params: {
        search: searchQuery || '',
        page: currentPage,
      },
    })
      .then(response => {
        setUMKM(response.data.data);
        setRawUMKM(response.data);
        setLastPage(response.data.last_page);
      })
      .catch(error => {
        console.error("There was an error fetching the UMKM data!", error);
      });
  }

  useEffect(() => {
    let debouncer = setTimeout(() => {
      fetchUMKMData();
    }, 500);
    return () => {
      clearTimeout(debouncer);
    };
  }, [searchQuery]);

  return (
    <>
      <Head title={"RateUMKM - RateLokal"} />

      <div className="min-h-screen bg-[#d8f7ea]">
        {/* Navbar */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-8"></div>
          <header className="flex justify-between items-center bg-white shadow p-4 rounded-lg">
            <Link href="/"><ApplicationLogo className="text-primary-500 w-36 h-auto" /></Link>

            <div className="flex gap-2">
              <Link href="/search"><PrimaryButton className="flex gap-2"><RiSearch2Line className="w-4 h-4" /> <span>Cari</span></PrimaryButton></Link>
              <Link href="/login"><PrimaryButton>Masuk</PrimaryButton></Link>
            </div>
          </header>
        {/* EndNavbar */}

        {/* Search */}
        <div className="text-center mt-8">
          <div>
            <div className="w-full md:px-0 bg-white py-12 rounded-lg shadow">
              {/* Updated Text */}
              <h2 className="text-gray-600 text-xl font-semibold mb-4">
                Mulai Cari UMKM Favorit Dibawah
              </h2>
              {/* Responsive Input */}
              <div className="px-6"></div>
                <TextInput onChange={(e) => setSearchQuery(e.target.value)} className="w-full md:w-1/2 !rounded-full" placeholder="Cari UMKM..." />
              </div>
            </div>
        </div>
        {/* End Search */}

        <section className="mt-8 pb-16">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {UMKM?.map((x, idx) => (
                <div key={idx}>
                  <div className="bg-white rounded-lg p-4 shadow hover:shadow-lg overflow-hidden">
                    <div className="flex flex-row gap-4">
                      <div>
                        <img
                          src={x.logo_url}
                          alt="Logo"
                          className="w-28 h-28 rounded"
                        ></img>
                      </div>
                      <div>
                        
                      </div>
                    </div>
                    <h3 className="text-gray-700 text-xl font-bold mt-2">
                          {x.name}
                    </h3>
                    <div className="flex gap-2 mt-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <RiStarFill
                            key={i}
                            className={`w-5 h-5 ${i < Math.round(x.ratings.average) ? "text-yellow-500" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-gray-500">{x.ratings.total} ({x.ratings.total})</p>
                    </div>
                    <div className="mt-2">
                      <div className="text-gray-600 flex items-center mt-2 gap-2">
                        <div className="flex-shrink-0">
                          <RiMapPin2Line className="text-yellow-500 w-4 h-4" />
                        </div>
                        <p className="text-sm line-clamp-2">{x.location}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-col gap-1">
                      <Link href={`https://wa.me/${x.whatsapp_number}`}><PrimaryButton className="w-full flex gap-2"><RiWhatsappLine className="text-white w-4 h-4" /> <span>Whatsapp</span></PrimaryButton></Link>
                      <Link href={route('umkm.show', x.id)}><PrimaryButton className="w-full">Selengkapnya</PrimaryButton></Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination Controls */}
            <div className="flex justify-center mt-8 gap-2">
              <PrimaryButton
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="disabled:opacity-50"
              >
                <RiArrowLeftSLine className="w-5 h-5"/>
                <span>Previous</span>
              </PrimaryButton>
              <PrimaryButton
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === lastPage}
                className="disabled:opacity-50"
              >
                <span>Next</span>
                <RiArrowRightSLine className="w-5 h-5"/>
              </PrimaryButton>
            </div>
          </div>
        </section>
      </div>
      </div>

    </>
  );
}
