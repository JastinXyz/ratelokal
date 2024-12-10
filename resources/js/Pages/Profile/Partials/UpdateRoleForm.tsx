import { router, useForm } from '@inertiajs/react';
import classNames from 'classnames';
import React, { useRef } from 'react';
import useRoute from '@/Hooks/useRoute';
import ActionMessage from '@/Components/ActionMessage';
import FormSection from '@/Components/FormSection';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import SelectInput from '@/Components/SelectInput';
import toast from 'react-hot-toast';

export default function UpdateRoleForm({ roles }: { roles: Array<'umkm' | 'user'> }) {
  const route = useRoute();
  const form = useForm({
    role: roles[0]
  });

  let switchRole = () => {
    form.post(route('profile.switch-role'), {
      onSuccess: () => {
        toast.success('Berhasil!')
      },
      onError: () => {
        toast.error("Terjadi Kesalahan!")
      }
    })
  }

  return (
    <FormSection
      onSubmit={switchRole}
      title={'Update Role'}
      description={
        'Update akun kamu sebagai user biasa atau user umkm.'
      }
      renderActions={() => (
        <>
          <ActionMessage on={form.recentlySuccessful} className="mr-3">
            Saved.
          </ActionMessage>

          <PrimaryButton
            className={classNames({ 'opacity-25': form.processing })}
            disabled={form.processing}
          >
            Save
          </PrimaryButton>
        </>
      )}
    >
      <div className="col-span-6 sm:col-span-4">
        <InputLabel htmlFor="role">Pilih Sebagai</InputLabel>
        <SelectInput options={['user', 'umkm']} className='w-full mt-2' onChange={(e) => form.setData('role', e.currentTarget.value as any)} value={form.data.role}/>
        <InputError message={form.errors.role} className="mt-2" />
      </div>
    </FormSection>
  );
}
