import React, { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import {
  RiArrowDownCircleLine,
  RiSearch2Line,
  RiMenuLine,
  RiCloseLine,
  RiStore2Line,
  RiSparklingLine,
  RiUserStarLine,
  RiPuzzleLine,
} from "@remixicon/react";
import PrimaryButton from "@/Components/PrimaryButton";
import useTypedPage from "@/Hooks/useTypedPage";
import TwemojiWrapper from "@/Components/TwemojiWrapper";

export default function LandingPage() {
  let { props } = useTypedPage();
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <TwemojiWrapper>
      <Head title={"Welcome - RateLokal"} />
      <div className="w-full">
        <div className="max-w-7xl mx-auto relative">
          <div className="absolute top-44 md:top-40 right-60 min-[356px]:right-72 md:right-44 w-16 h-16">✨</div>
          <div className="absolute top-44 md:top-[10rem] right-[14rem] min-[356px]:right-[17rem] md:right-[10rem] w-6 h-6 -rotate-12">👍</div>
          <div className="absolute top-[13.5rem] md:top-[12.5rem] right-[14rem] min-[356px]:right-[17rem] md:right-[10rem] w-6 h-6">🚀</div>
          <div className="hidden sm:block absolute top-[32rem] md:top-[26rem] left-56 w-16 h-16 rotate-12">🏆</div>
        </div>
      </div>
      <div className="min-h-[40rem] bg-[#17B271] rounded-b-[3rem]">
        <div className="flex justify-between items-center pt-8 sm:px-6 lg:px-8 max-w-7xl mx-auto px-4">
          <Link href="/">
            <ApplicationLogo className="text-white w-40 h-auto" />
          </Link>

          <div className="hidden md:flex space-x-4">
            <Link href="/search">
              <button className="bg-[#0B905B] text-white w-32 px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all">
                Cari
              </button>
            </Link>
            {props.auth.user ? (
              <Link href="/dashboard">
                <button className="bg-[#0B905B] text-white w-32 px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all">
                  Dashboard
                </button>
              </Link>
            ) : (
              <Link href="/login">
                <button className="bg-[#0B905B] text-white w-32 px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all">
                  Masuk
                </button>
              </Link>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              <RiMenuLine className="w-8 h-8" />
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-white overflow-y-auto">
            <div className="flex flex-col h-screen">
              <div className="flex justify-between items-center p-4 border-b">
                <ApplicationLogo className="text-[#17B271] w-40 h-auto" />
                <button
                  onClick={toggleMobileMenu}
                  className="text-[#17B271] focus:outline-none"
                >
                  <RiCloseLine className="w-8 h-8" />
                </button>
              </div>

              <div className="flex flex-col flex-grow justify-center items-center space-y-4 px-4">
                <Link href="/search" className="w-full">
                  <PrimaryButton onClick={toggleMobileMenu} className="w-full !py-3">Cari</PrimaryButton>
                </Link>
                <Link href="/login" className="w-full">
                  {props.auth.user ? <Link href="/dashboard"><PrimaryButton onClick={toggleMobileMenu} className="w-full !py-3">Dashboard</PrimaryButton></Link> : <Link href="/login"><PrimaryButton onClick={toggleMobileMenu} className="w-full !py-3">Masuk</PrimaryButton></Link>}
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="mt-36 relative z-50">
          <div className="text-center w-full px-4 mt-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-white max-w-3xl mx-auto mb-4">
            Selamat datang di RateLokal
            </h1>

            <p className="text-lg sm:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Tempat di mana Anda bisa menemukan bisnis lokal yang inovatif dan berkualitas.
            </p>

            <form action="/search" className="relative w-full max-w-md mx-auto">
              <RiSearch2Line className="w-6 h-6 text-white absolute top-3 left-3" />
              <input
                type="text"
                placeholder="cari umkm..."
                name="q"
                className="w-full p-3 rounded-full pl-10 text-white bg-[#73E2AC] border-none focus:outline-none placeholder:text-white"
              />
            </form>
            <div className="mt-28 flex justify-center">
              <a href="#keunggulan">
                <RiArrowDownCircleLine className="w-8 h-8 animate-bounce text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <section
        id="keunggulan"
        className="bg-white w-full py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <h2 className="text-black ml-5 text-2xl sm:text-4xl text-left mb-2">
          Beberapa <span className="font-bold">RateLokal</span> yang <br />{" "}
          dapat tawarkan
        </h2>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-2 px-5 py-4">
          <div className="bg-primary-500 shadow rounded-3xl group cursor-default">
            <div className="p-5">
              <div className="h-16 w-16 bg-primary-600 rounded-xl p-4">
                <RiStore2Line className="w-8 h-8 text-white" />
              </div>
              <div className="mt-2">
                <h2 className="text-2xl font-bold text-white">
                  Temukan UMKM Terbaik
                </h2>
                <p className="text-sm font-light text-white">
                  Temukan berbagai UMKM yang berhasil memikat hati pelanggan
                  dengan produk berkualitas. Kami menyajikan ulasan lengkap
                  untuk membantu Anda menemukan usaha lokal terbaik.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-primary-500 shadow rounded-3xl group cursor-default md:col-span-2">
            <div className="p-5">
              <div className="h-16 w-16 bg-primary-600 rounded-xl p-4">
                <RiSparklingLine className="w-8 h-8 text-white" />
              </div>
              <div className="mt-2">
                <h2 className="text-2xl font-bold text-white">
                  Ulasan Eksklusif untuk UMKM Lokal Terbaik!
                </h2>
                <p className="text-sm font-light text-white">
                  UMKM lokal penuh dengan produk-produk istimewa yang patut mendapatkan perhatian lebih. Kami hadir untuk memberikan ulasan mendalam tentang usaha-usaha yang telah berhasil mencuri perhatian dengan kualitas dan kreativitasnya. Temukan produk unggulan, dukung usaha lokal, dan rasakan manfaatnya!
                </p>
              </div>
            </div>
          </div>
          <div className="bg-primary-500 shadow rounded-3xl group cursor-default md:col-span-2">
            <div className="p-5">
              <div className="h-16 w-16 bg-primary-600 rounded-xl p-4">
                <RiUserStarLine className="w-8 h-8 text-white" />
              </div>
              <div className="mt-2">
                <h2 className="text-2xl font-bold text-white">
                  Kisah Sukses UMKM di Indonesia
                </h2>
                <p className="text-sm font-light text-white">
                  UMKM di Indonesia terus berkembang dengan berbagai inovasi. Di
                  website ini, kami berbagi ulasan tentang berbagai bisnis lokal
                  yang berhasil meraih kesuksesan. Temukan kisah inspiratif
                  mereka dan dapatkan informasi tentang produk yang layak Anda
                  coba. Kami percaya bahwa setiap usaha lokal memiliki potensi
                  besar yang patut dihargai
                </p>
              </div>
            </div>
          </div>
          <div className="bg-primary-500 shadow rounded-3xl group cursor-default">
            <div className="p-5">
              <div className="h-16 w-16 bg-primary-600 rounded-xl p-4">
                <RiPuzzleLine className="w-8 h-8 text-white" />
              </div>
              <div className="mt-2">
                <h2 className="text-2xl font-bold text-white">
                  Mengulas Bisnis Lokal Berkualitas
                </h2>
                <p className="text-sm font-light text-white">
                  Setiap UMKM memiliki cerita dan keunikan tersendiri. Di sini,
                  kami memberikan review jujur untuk membantu Anda memilih
                  produk dan layanan terbaik dari pelaku usaha lokal.
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
              <div className="flex justify-center lg:justify-start">
                <ApplicationLogo className="text-white w-56 h-auto" />
              </div>

              <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-white lg:text-left">
              Jelajahi berbagai UMKM lokal terbaik, dukung usaha kreatif, 
              dan bantu perekonomian Indonesia tumbuh lebih maju.
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
    </TwemojiWrapper>
  );
}
