import ApplicationLogo from "@/Components/ApplicationLogo";
import DangerButton from "@/Components/DangerButton";
import DialogModal from "@/Components/DialogModal";
import Dropdown from "@/Components/Dropdown";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Navbar from "@/Components/Navbar";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextArea from "@/Components/TextArea";
import WarningButton from "@/Components/WarningButton";
import useRoute from "@/Hooks/useRoute";
import useTypedPage from "@/Hooks/useTypedPage";
import Dayjs from "@/lib/dayjs";
import { Review, UMKM } from "@/types";
import { Head, Link, useForm } from "@inertiajs/react";
import { RiCalendar2Line, RiDeleteBin6Line, RiEditBoxLine, RiErrorWarningLine, RiMapPinLine, RiMenuLine, RiMore2Line, RiMoreLine, RiSearch2Line, RiStarFill, RiWhatsappLine } from "@remixicon/react";
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
  let route = useRoute();
  let [recommend, setRecommend] = useState<UMKM[]>();
  let [editModal, setEditModal] = useState(false);
  
  let form = useForm({
    description: hasReviewed ? hasReviewed.review : "",
    rate: hasReviewed ? hasReviewed.rating : "",
  });

  let submitRate = () => {
    form.post(route("umkm.rate", umkm.id), {
      onSuccess: () => {
        form.reset();
        setEditModal(false)
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

  function closeEditModal() {
    setEditModal(false);
    form.reset();
  }

  return (
    <>
      <Head title={`${umkm.name} - RateLokal`} />
      <div className="min-h-screen bg-[#F3F4F6]">
        <Navbar />

        <div className="py-6">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-dark-alt">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="w-full md:w-[70%] bg-white shadow p-4 rounded-lg">
                  <div className="flex items-start gap-4">
                    <img
                      src={umkm.logo_url}
                      alt="Brand Logo"
                      className="h-20 w-20 object-cover rounded"
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
                    <div className="flex-shrink-0"><RiWhatsappLine className="w-6 h-6" /></div>
                    <span className="text-sm">{umkm.whatsapp_number}</span>
                  </div>
                  <div className="bg-white shadow p-4 rounded-lg flex items-center gap-2">
                    <div className="flex-shrink-0"><RiMapPinLine className="w-6 h-6" /></div>
                    <span className="text-sm">{umkm.location}</span>
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
                          <span className="w-10 text-right text-sm">{percentage.toFixed()}%</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
                
              <div className="flex flex-col md:flex-row gap-2 mt-4">
                <div className="w-full md:w-[70%]">
                  {(props.auth.user?.id !== umkm.user_id && !hasReviewed) && (
                    <div className="bg-white shadow p-4 rounded-lg">
                      {props.auth.user ? (
                        <>
                          <div className="flex justify-center mt-2">
                            <div>
                              <div className="flex items-center">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <RiStarFill 
                                    key={star}
                                    className={`w-10 h-10 cursor-pointer ${
                                      (form.data.rate as any) >= star
                                        ? "text-yellow-500"
                                        : "text-gray-300"
                                    }`}
                                    onClick={() =>
                                      form.setData("rate", star as any)
                                    }
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="mt-4">
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
                        <div className="flex justify-center">
                          <Link href="/login">
                            <PrimaryButton className="flex gap-2">
                              <RiErrorWarningLine className="w-4 h-4" />
                              <span>Masuk/Daftar Untuk Membuat Review</span>
                            </PrimaryButton>
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                  {hasReviewed && (
                    <>
                      <div
                        className="bg-white shadow p-4 rounded-lg"
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-4">
                            <img
                              className="w-12 h-12 rounded-full"
                              src={hasReviewed.author?.profile_photo_url}
                              alt="Profile Picture"
                            />
                            <div>
                              <h2 className="font-semibold">{hasReviewed.author?.name}</h2>
                              <p className="text-sm text-gray-500">{hasReviewed.author?.review_total} Kontribusi</p>
                            </div>
                          </div>
                          <div>
                            <div className="md:flex gap-2 hidden">
                              <DangerButton onClick={destroyRate}>
                                <RiDeleteBin6Line className="w-4 h-4" />
                              </DangerButton>
                              <WarningButton onClick={() => {
                                form.setData('rate', hasReviewed.rating)
                                setEditModal(true)
                              }}>
                                <RiEditBoxLine className="w-4 h-4" />
                              </WarningButton>
                            </div>
                            <div className="block md:hidden cursor-pointer">
                            <Dropdown
                              align="right"
                              width="60"
                              renderTrigger={() => (
                                <>
                                  <RiMore2Line className="w-5 h-5" />
                                </>
                              )}
                            >
                              <div className="p-2 flex flex-col gap-2">
                                <DangerButton onClick={destroyRate} className="flex gap-2">
                                  <RiDeleteBin6Line className="w-4 h-4" /> <span>Hapus</span>
                                </DangerButton>
                                <WarningButton className="flex gap-2" onClick={() => {
                                  form.setData('rate', hasReviewed.rating)
                                  setEditModal(true)
                                }}>
                                  <RiEditBoxLine className="w-4 h-4" />
                                  <span>Edit</span>
                                </WarningButton>
                              </div>
                            </Dropdown>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <RiStarFill className={`w-5 h-5 ${i < hasReviewed.rating ? "text-yellow-500" : "text-gray-300"}`} />
                          ))}
                        </div>

                        <div className="mt-4">
                          <p className="text-gray-600">
                            {hasReviewed.review}
                          </p>
                        </div>
                        <div className="mt-2 flex justify-end gap-2 items-center">
                          <div className="flex-shrink-0"><RiCalendar2Line className="w-4 h-4" /></div>
                          <p className="text-xs">{Dayjs(hasReviewed.created_at).format('dddd, DD MMMM YYYY')}</p>
                        </div>
                      </div>
                      <DialogModal isOpen={editModal} onClose={closeEditModal}>
                        <DialogModal.Content title={"Ubah Review"}>
                        <div className="flex justify-center mt-2">
                            <div>
                              <div className="flex items-center">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <RiStarFill 
                                    key={star}
                                    className={`w-10 h-10 cursor-pointer ${
                                      (form.data.rate as any) >= star
                                        ? "text-yellow-500"
                                        : "text-gray-300"
                                    }`}
                                    onClick={() =>
                                      form.setData("rate", star as any)
                                    }
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="mt-4">
                            <InputLabel
                              htmlFor="description"
                              value="Deskripsi"
                            />
                            <TextArea
                              id="description"
                              className="mt-1 block w-full"
                              defaultValue={hasReviewed.review}
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
                        </DialogModal.Content>

                        <DialogModal.Footer>
                          <SecondaryButton onClick={closeEditModal}>Cancel</SecondaryButton>

                          <PrimaryButton
                            className={classNames('ml-2', { 'opacity-25': form.processing ||
                              !form.data.description ||
                              !form.data.rate })}
                            onClick={submitRate}
                            disabled={form.processing ||
                              !form.data.description ||
                              !form.data.rate}
                          >
                            Simpan
                          </PrimaryButton>
                        </DialogModal.Footer>
                      </DialogModal>
                    </>
                  )}
                  {umkm.reviews.filter((x) => x.author?.id !== props.auth.user?.id).map((x, idx) => {
                    return (
                      <div
                        key={idx}
                        className={`bg-white shadow p-4 rounded-lg ${((props.auth.user?.id === umkm.user_id) && (idx != 0)) ? 'mt-2' : (props.auth.user?.id !== umkm.user_id) ? 'mt-2' : ''}`}
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
                        <div className="mt-2 flex justify-end gap-2 items-center">
                          <div className="flex-shrink-0"><RiCalendar2Line className="w-4 h-4" /></div>
                          <p className="text-xs">{Dayjs(x.created_at).format('dddd, DD MMMM YYYY')}</p>
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
