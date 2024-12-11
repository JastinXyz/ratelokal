import { RiMenuLine, RiSearch2Line } from "@remixicon/react";
import Dropdown from "./Dropdown";
import PrimaryButton from "./PrimaryButton";
import { Link } from "@inertiajs/react";
import React from "react";
import ApplicationLogo from "./ApplicationLogo";
import useTypedPage from "@/Hooks/useTypedPage";

export default function Navbar() {
    let { props } = useTypedPage();
    return (
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-8"></div>
          <div className="flex justify-between items-center bg-white shadow p-4 rounded-lg">
            <Link href="/"><ApplicationLogo className="text-primary-500 w-36 h-auto" /></Link>

            <div>
              <div className="md:flex gap-2 hidden">
                <Link href="/search"><PrimaryButton className="flex gap-2 w-full"><RiSearch2Line className="w-4 h-4" /> <span>Cari</span></PrimaryButton></Link>
                {props.auth.user ? <Link href="/dashboard"><PrimaryButton>Dashboard</PrimaryButton></Link> : <Link href="/login"><PrimaryButton>Masuk</PrimaryButton></Link>}
              </div>
              <div className="block md:hidden cursor-pointer">
                <Dropdown
                  align="right"
                  width="60"
                  renderTrigger={() => (
                    <>
                      <RiMenuLine className="w-5 h-5 text-dark-alt" />
                    </>
                  )}
                >
                  <div className="p-2 flex flex-col gap-2 w-full">
                    <Link href="/search"><PrimaryButton className="flex gap-2 w-full"><RiSearch2Line className="w-4 h-4" /> <span>Cari</span></PrimaryButton></Link>
                    {props.auth.user ? <Link href="/dashboard"><PrimaryButton>Dashboard</PrimaryButton></Link> : <Link href="/login"><PrimaryButton>Masuk</PrimaryButton></Link>}
                  </div>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
    )
}