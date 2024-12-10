import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextArea from "@/Components/TextArea";
import useRoute from "@/Hooks/useRoute";
import useTypedPage from "@/Hooks/useTypedPage";
import { Review, UMKM } from "@/types";
import { useForm } from "@inertiajs/react";
import { RiMapPinLine, RiWhatsappLine } from "@remixicon/react";
import classNames from "classnames";
import React from "react";
import toast from "react-hot-toast";

export default function Show({ umkm, hasReviewed }: { umkm: UMKM, hasReviewed: Review }) {
    let { props } = useTypedPage();
    let route = useRoute();
    let form = useForm({
        description: hasReviewed ? hasReviewed.review : '',
        rate: hasReviewed ? hasReviewed.rating : ''
    });

    let submitRate = () => {
        form.post(route('umkm.rate', umkm.id), {
            onSuccess: () => {
                toast.success('Berhasil Terkirim!')
            },
            onError: () => {
                toast.error('Terjadi Kesalahan!');
            },
        })
    }

    let destroyRate = () => {
        form.delete(route('umkm.destroyRate', umkm.id), {
            onSuccess: () => {
                toast.success('Berhasil Terhapus!')
            },
            onError: () => {
                toast.error('Terjadi Kesalahan!');
            },
        })
    }

    return (
        <div className="py-6">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="text-dark-alt">
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-2">
                        <div className="col-span-4 bg-white shadow-lg p-4 rounded-lg">
                            <div className="flex items-start gap-4">
                                <img src={umkm.logo_url} alt="Brand Logo" className="h-20 w-20 object-cover"/>
                                <div>
                                    <h1 className="font-semibold text-xl">{umkm.name}</h1>
                                    <p>{umkm.ratings.total} Testimoni</p>
                                    <p>{umkm.ratings.average}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 grid gap-2">
                            <div className="bg-white shadow-lg p-4 rounded-lg flex items-center gap-2">
                                <RiWhatsappLine className="w-6 h-6"/> 
                                <span>{umkm.whatsapp_number}</span>
                            </div>
                            <div className="bg-white shadow-lg p-4 rounded-lg flex items-center gap-2">
                                <RiMapPinLine className="w-6 h-6"/> 
                                <span>{umkm.location}</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-2 mt-4">
                        <div className="col-span-4 bg-white shadow-lg p-4 rounded-lg">
                            <h1 className="font-bold text-xl">Tentang {umkm.name}</h1>
                            <p>{umkm.description}</p>
                        </div>
                        <div className="col-span-2 bg-white shadow-lg p-4 rounded-lg">
                            <h1 className="font-bold text-xl">Reviews</h1>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-4">
                        <div className="col-span-4">
                            {props.auth.user?.id !== umkm.user_id && (
                                <div className="bg-white shadow-lg p-4 rounded-lg">
                                {props.auth.user ? (
                                    <>
                                        <div>
                                            <div className="flex items-center">
                                                {[1, 2, 3, 4, 5].map(star => (
                                                    <svg
                                                        key={star}
                                                        className={`w-6 h-6 cursor-pointer ${(form.data.rate as any) >= star ? 'text-yellow-500' : 'text-gray-300'}`}
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        onClick={() => form.setData('rate', star as any)}
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <InputLabel htmlFor="description" value="Deskripsi" />
                                            <TextArea
                                                id="description"
                                                className="mt-1 block w-full"
                                                value={form.data.description}
                                                onChange={e =>
                                                form.setData('description', e.currentTarget.value)
                                                }
                                            />
                                            <InputError message={form.errors.description} className="mt-2" />
                                        </div>
                                        <div className='mt-2 flex items-center justify-end gap-2'>
                                            {hasReviewed && <DangerButton onClick={destroyRate}>Hapus Review</DangerButton>}
                                            <PrimaryButton
                                                onClick={submitRate}
                                                className={classNames({ 'opacity-25': form.processing || !form.data.description || !form.data.rate })}
                                                disabled={form.processing || !form.data.description || !form.data.rate}
                                            >
                                                {hasReviewed ? 'Update' : 'Kirim'}
                                            </PrimaryButton>
                                        </div>
                                    </>
                                ) : <>Login Dulu</>}
                            </div>
                            )}
                            {umkm.reviews.map((x, idx) => {
                                return (<div key={idx} className="bg-white shadow-lg p-4 rounded-lg mt-4">
                                    <img src={x.author?.profile_photo_url} alt={x.author?.name} className="w-10 h-10" />
                                    <p>{x.author?.name}</p>
                                    <p>{x.rating} bintang</p>
                                    <p>{x.review}</p>
                                </div>)
                            })}
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}