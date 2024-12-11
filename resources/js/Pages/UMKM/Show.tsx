import ApplicationLogo from "@/Components/ApplicationLogo";
import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextArea from "@/Components/TextArea";
import useRoute from "@/Hooks/useRoute";
import useTypedPage from "@/Hooks/useTypedPage";
import { Review, UMKM } from "@/types";
import { Link, useForm } from "@inertiajs/react";
import { RiMapPinLine, RiSearch2Line, RiStarFill, RiWhatsappLine } from "@remixicon/react";
import axios from "axios";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Show({
  umkm,
  hasReviewed,
}: {
  umkm: UMKM;
  hasReviewed: Review;
}) {
  let { props } = useTypedPage();
  let [recommend, setRecommend] = useState<UMKM[]>();
  let route = useRoute();
  let form = useForm({
    description: hasReviewed ? hasReviewed.review : "",
    rate: hasReviewed ? hasReviewed.rating : "",
  });

  let submitRate = () => {
    form.post(route("umkm.rate", umkm.id), {
      onSuccess: () => {
        toast.success("Berhasil Terkirim!");
      },
      onError: () => {
        toast.error("Terjadi Kesalahan!");
      },
    });
  };

  let destroyRate = () => {
    form.delete(route("umkm.destroyRate", umkm.id), {
      onSuccess: () => {
        toast.success("Berhasil Terhapus!");
      },
      onError: () => {
        toast.error("Terjadi Kesalahan!");
      },
    });
  };

  function fetchRecommend() {
    const csrfToken: any = document
      .querySelector('meta[name="csrf-token"]')
      ?.getAttribute('content');
    axios.get('/api/umkm/recommend/' + umkm.id, {
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': csrfToken,
      }
    })
      .then(response => {
        setRecommend(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the UMKM data!", error);
      });
  }

  useEffect(() => {
    fetchRecommend()
  }, [])

  return (
    <>
      <div className="min-h-screen bg-[#d8f7ea]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-8"></div>
          <div className="flex justify-between items-center bg-white shadow p-4 rounded-lg">
            <Link href="/"><ApplicationLogo className="text-primary-500 w-36 h-auto" /></Link>

            <div className="flex gap-2">
              <Link href="/search"><PrimaryButton className="flex gap-2"><RiSearch2Line className="w-4 h-4" /> <span>Cari</span></PrimaryButton></Link>
              <Link href="/login"><PrimaryButton>Masuk</PrimaryButton></Link>
            </div>
          </div>
        </div>

        <div className="py-6">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-dark-alt">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="w-full md:w-[70%] bg-white shadow p-4 rounded-lg">
                  <div className="flex items-start gap-4">
                    <img
                      src={umkm.logo_url}
                      alt="Brand Logo"
                      className="h-20 w-20 object-cover"
                    />
                    <div>
                      <h1 className="font-semibold text-xl">{umkm.name}</h1>
                      <p>{umkm.ratings.total} Testimoni</p>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <RiStarFill
                              key={i}
                              className={`w-5 h-5 ${i < Math.round(umkm.ratings.average) ? "text-yellow-500" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <span>{umkm.ratings.average}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-[30%] grid gap-2">
                  <div className="bg-white shadow p-4 rounded-lg flex items-center gap-2">
                    <RiWhatsappLine className="w-6 h-6" />
                    <span>{umkm.whatsapp_number}</span>
                  </div>
                  <div className="bg-white shadow p-4 rounded-lg flex items-center gap-2">
                    <RiMapPinLine className="w-6 h-6" />
                    <span>{umkm.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-2 mt-2">
                <div className="w-full md:w-[70%] bg-white shadow p-4 rounded-lg">
                  <h1 className="font-bold text-xl">Tentang {umkm.name}</h1>
                  <p>{umkm.description}</p>
                </div>
                <div className="w-full md:w-[30%] bg-white shadow p-4 rounded-lg">
                  <h1 className="font-bold text-xl">Reviews</h1>
                  <div className="mt-4">
                    {[5, 4, 3, 2, 1].map((star) => {
                      const percentage = (umkm.ratings[star.toString() as keyof typeof umkm.ratings] / umkm.ratings.total) * 100;
                      return (
                        <div key={star} className="flex items-center gap-2">
                          <span className="w-4 text-right font-semibold">{star}</span>
                          <div className="w-full bg-primary-100 rounded-full h-3">
                          <div
                            className="bg-primary-300 h-3 rounded-full"
                            style={{ width: `${percentage}%` }}
                          ></div>
                          </div>
                          <span className="w-10 text-right">{percentage.toFixed()}%</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
                
              <div className="flex flex-col md:flex-row gap-2 mt-4">
                <div className="w-full md:w-[70%]">
                  {props.auth.user?.id !== umkm.user_id && (
                    <div className="bg-white shadow p-4 rounded-lg">
                      {props.auth.user ? (
                        <>
                          <div>
                            <div className="flex items-center">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <svg
                                  key={star}
                                  className={`w-6 h-6 cursor-pointer ${
                                    (form.data.rate as any) >= star
                                      ? "text-yellow-500"
                                      : "text-gray-300"
                                  }`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                  onClick={() =>
                                    form.setData("rate", star as any)
                                  }
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                          <div>
                            <InputLabel
                              htmlFor="description"
                              value="Deskripsi"
                            />
                            <TextArea
                              id="description"
                              className="mt-1 block w-full"
                              value={form.data.description}
                              onChange={(e) =>
                                form.setData(
                                  "description",
                                  e.currentTarget.value
                                )
                              }
                            />
                            <InputError
                              message={form.errors.description}
                              className="mt-2"
                            />
                          </div>
                          <div className="mt-2 flex items-center justify-end gap-2">
                            {hasReviewed && (
                              <DangerButton onClick={destroyRate}>
                                Hapus Review
                              </DangerButton>
                            )}
                            <PrimaryButton
                              onClick={submitRate}
                              className={classNames({
                                "opacity-25":
                                  form.processing ||
                                  !form.data.description ||
                                  !form.data.rate,
                              })}
                              disabled={
                                form.processing ||
                                !form.data.description ||
                                !form.data.rate
                              }
                            >
                              {hasReviewed ? "Update" : "Kirim"}
                            </PrimaryButton>
                          </div>
                        </>
                      ) : (
                        <>Login Dulu</>
                      )}
                    </div>
                  )}
                  {umkm.reviews.map((x, idx) => {
                    return (
                      <div
                        key={idx}
                        className="bg-white shadow p-4 rounded-lg mt-4"
                      >
                        <div className="flex items-center space-x-4">
                          <img
                            className="w-12 h-12 rounded-full"
                            src={x.author?.profile_photo_url}
                            alt="Profile Picture"
                          />
                          <div>
                            <h2 className="font-semibold">{x.author?.name}</h2>
                            <p className="text-sm text-gray-500">{x.author?.review_total} Kontribusi</p>
                          </div>
                        </div>
                        <div className="mt-4 flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <RiStarFill className={`w-5 h-5 ${i < x.rating ? "text-yellow-500" : "text-gray-300"}`} />
                          ))}
                        </div>

                        <div className="mt-4">
                          <p className="text-gray-600">
                            {x.review}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="w-full md:w-[30%]">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h1 className="font-bold text-xl">Mungkin Anda Juga Suka</h1>
                      {recommend?.map((x, idx) => (
                        <Link href={route('umkm.show', x.id)}>
                          <div className="flex items-center space-x-4 mt-4" key={idx}>
                            <img
                              className="w-16 h-16 rounded"
                              src={x.logo_url}
                              alt="Logo"
                            />
                            <div>
                              <h2 className="font-bold text-md">{x.name}</h2>
                              <p className="text-sm text-slate-500">{x.ratings.total} Testimoni</p>                     
                              <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <RiStarFill
                                    key={i}
                                    className={`w-5 h-5 ${i < Math.round(x.ratings.average) ? "text-yellow-500" : "text-gray-300"}`}
                                  />
                                ))}
                              </div>
                              <span>{x.ratings.average}</span>
                            </div>                
                            </div>
                          </div> 
                        </Link>            
                      ))}   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
