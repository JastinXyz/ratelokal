import React, { useRef, useState } from 'react';
import Welcome from '@/Components/Welcome';
import AppLayout from '@/Layouts/AppLayout';
import DialogModal from '@/Components/DialogModal';
import PrimaryButton from '@/Components/PrimaryButton';
import classNames from 'classnames';
import useTypedPage from '@/Hooks/useTypedPage';
import SelectInput from '@/Components/SelectInput';
import { Link, router, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import useRoute from '@/Hooks/useRoute';
import toast from 'react-hot-toast';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import FormSection from '@/Components/FormSection';
import ActionMessage from '@/Components/ActionMessage';
import SecondaryButton from '@/Components/SecondaryButton';
import TextArea from '@/Components/TextArea';
import { UMKM } from '@/types';
import { RiStarFill, RiStarLine, RiUserStarLine } from '@remixicon/react';

export default function Dashboard({ umkm }: { umkm: UMKM }) {
  let { props } = useTypedPage();
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const photoRef = useRef<HTMLInputElement>(null);
  let route = useRoute();
  let form = useForm({
    role: '',
  });

  let form2 = useForm({
    name: umkm ? umkm.name : '',
    description: umkm ? umkm.description : '',
    location: umkm ? umkm.location : '',
    whatsapp_number: umkm ? umkm.whatsapp_number : '',
    photo: null as File | null,
  });

  let switchRole = () => {
    form.post(route('profile.switch-role'), {
      onSuccess: () => {
        router.get(route('dashboard'));
      },
      onError: () => {
        toast.error('Terjadi Kesalahan!');
      },
    });
  };

  function selectNewPhoto() {
    photoRef.current?.click();
  }

  function updatePhotoPreview() {
    const photo = photoRef.current?.files?.[0];

    if (!photo) {
      return;
    }

    form2.setData('photo', photo);

    const reader = new FileReader();

    reader.onload = e => {
      setPhotoPreview(e.target?.result as string);
    };

    reader.readAsDataURL(photo);
  }

  function clearPhotoFileInput() {
    if (photoRef.current?.value) {
      photoRef.current.value = '';
      form2.setData('photo', null);
    }
  }

  let updateUMKMProfile = () => {
    form2.post(route('profile.update-umkm'), {
      onSuccess: () => {
        toast.success('Berhasil Update!')
      },
      onError: () => {
        toast.error('Terjadi Kesalahan!');
      },
    })
  }

  return (
    <AppLayout
      title="Dashboard"
      renderHeader={() => (
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Dashboard
        </h2>
      )}
    >
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white dark:bg-gray-800 overflow-hidden rounded-lg p-6 lg:p-8 shadow">
            Selamat datang, {props.auth.user?.name}
          </div>
          {props.auth.roles.includes('umkm') && (
            <>
              <div className="flex gap-2 mt-4 md:flex-row flex-col-reverse">
                <div className="w-full md:w-[70%] bg-white dark:bg-gray-800 overflow-hidden rounded-lg p-6 lg:p-8 shadow">
                  <h1 className="font-semibold text-xl">Lengkapi Profil UMKM Anda!</h1>
                  <div className="col-span-6 sm:col-span-4 mt-2">
                    {/* <!-- Profile Photo File Input --> */}
                    <input
                      type="file"
                      className="hidden"
                      ref={photoRef}
                      onChange={updatePhotoPreview}
                    />

                    <InputLabel htmlFor="photo" value="Photo" />

                    {photoPreview ? (
                      // <!-- New Profile Photo Preview -->
                      <div className="mt-2">
                        <span
                          className="block h-36 w-36"
                          style={{
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center',
                            backgroundImage: `url('${photoPreview}')`,
                          }}
                        ></span>
                      </div>
                    ) : (
                      // <!-- Current Profile Photo -->
                      <div className="mt-2">
                        <img
                          src={umkm ? umkm.logo_url : ''}
                          alt={'Brand Logo'}
                          className="h-36 w-36 object-cover"
                        />
                      </div>
                    )}

                    <SecondaryButton
                      className="mt-2 mr-2"
                      type="button"
                      onClick={selectNewPhoto}
                    >
                      Select A New Photo
                    </SecondaryButton>

                    <InputError message={form2.errors.photo} className="mt-2" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                    <div>
                      <InputLabel htmlFor="name" value="Name" />
                      <TextInput
                        id="name"
                        type="text"
                        className="mt-1 block w-full"
                        value={form2.data.name}
                        onChange={e =>
                          form2.setData('name', e.currentTarget.value)
                        }
                        autoComplete="name"
                      />
                      <InputError message={form2.errors.name} className="mt-2" />
                    </div>

                    <div>
                      <InputLabel htmlFor="whatsapp_number" value="Nomor WA" />
                      <TextInput
                        id="whatsapp_number"
                        type="number"
                        className="mt-1 block w-full"
                        value={form2.data.whatsapp_number}
                        onChange={e =>
                          form2.setData('whatsapp_number', e.currentTarget.value)
                        }
                      />
                      <InputError message={form2.errors.whatsapp_number} className="mt-2" />
                    </div>
                  </div>

                  <div className='mt-2'>
                      <InputLabel htmlFor="location" value="Lokasi" />
                      <TextArea
                        id="location"
                        className="mt-1 block w-full"
                        value={form2.data.location}
                        onChange={e =>
                          form2.setData('location', e.currentTarget.value)
                        }
                      />
                      <InputError message={form2.errors.location} className="mt-2" />
                  </div>
                  <div className='mt-2'>
                      <InputLabel htmlFor="description" value="Deskripsi" />
                      <TextArea
                        id="description"
                        className="mt-1 block w-full"
                        value={form2.data.description}
                        onChange={e =>
                          form2.setData('description', e.currentTarget.value)
                        }
                      />
                      <InputError message={form2.errors.description} className="mt-2" />
                  </div>

                  <div className='mt-2 flex items-center justify-end'>
                    <ActionMessage on={form2.recentlySuccessful} className="mr-3">
                      Saved.
                    </ActionMessage>

                    <PrimaryButton
                      onClick={updateUMKMProfile}
                      className={classNames({ 'opacity-25': form2.processing || !form2.data.description || !form2.data.location || !form2.data.name || !form2.data.whatsapp_number })}
                      disabled={form2.processing || !form2.data.description || !form2.data.location || !form2.data.name || !form2.data.whatsapp_number}
                    >
                      Simpan
                    </PrimaryButton>
                  </div>
                </div>
                <div className='w-full md:w-[30%] flex flex-col gap-2'>
                  <div className="bg-white dark:bg-gray-800 overflow-hidden rounded-lg p-6 lg:p-8 shadow text-dark-alt">
                    <div className='flex items-center gap-4'>
                      <div className='bg-primary-400/80 w-14 h-14 rounded-lg flex justify-center items-center'>
                        <RiUserStarLine className='w-7 h-7 text-white' />
                      </div>
                      <div>
                        <h2 className='font-semibold text-xl'>Total Reviews</h2>
                        <p className='font-bold text-xl'>{umkm.ratings.total}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 overflow-hidden rounded-lg p-6 lg:p-8 shadow text-dark-alt">
                    <div className='flex items-center gap-4'>
                      <div className='bg-primary-400/80 w-14 h-14 rounded-lg flex justify-center items-center'>
                        <RiStarLine className='w-7 h-7 text-white' />
                      </div>
                      <div>
                        <h2 className='font-semibold text-xl'>Rating Rata-Rata</h2>
                        <p className='font-bold text-xl flex gap-1 items-center'><span>{umkm.ratings.average}/5</span> <RiStarFill className='w-5 h-5' /></p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 overflow-hidden rounded-lg p-4 shadow text-dark-alt">
                    <Link href={route('umkm.show', umkm.id)}><PrimaryButton className='w-full'>Halaman UMKM Anda</PrimaryButton></Link>
                  </div>

                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <DialogModal
        isOpen={
          !props.auth.roles.includes('user') &&
          !props.auth.roles.includes('umkm')
        }
        onClose={() => form.reset()}
      >
        <DialogModal.Content title={'Pilih Sebagai'}>
          <SelectInput
            options={['User Biasa', 'Pelaku UMKM']}
            className="w-full"
            onChange={e => form.setData('role', e.currentTarget.value)}
            optionsPlaceholder
          />
          <InputError message={form.errors.role} className="mt-2" />
        </DialogModal.Content>
        <DialogModal.Footer>
          <PrimaryButton
            onClick={switchRole}
            className={classNames('ml-2', {
              'opacity-25': form.processing || !form.data.role,
            })}
            disabled={form.processing || !form.data.role}
          >
            Konfirmasi
          </PrimaryButton>
        </DialogModal.Footer>
      </DialogModal>
    </AppLayout>
  );
}
