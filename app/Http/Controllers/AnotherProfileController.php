<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class AnotherProfileController extends Controller
{
    public function roleSwitch(Request $request) {
        /** @var App\Models\User */
        $user = Auth::user();
        $role = $request->role;

        if ($role === 'User Biasa') {
            $role = 'user';
        } elseif ($role === 'Pelaku UMKM') {
            $role = 'umkm';
        } else {
            $role = $request->role;
        }

        $user->syncRoles($role);
    }

    public function updateUMKM(Request $request) {
        $request->validate([
            'name' => ['required'],
            'description' => ['required'],
            'photo' => ['nullable', 'mimes:jpeg,png,jpg,webp'],
            'location' => ['required'],
            'whatsapp_number' => ['required'],
        ]);
        
        $user = Auth::user();
        $umkm = $user->umkm;

        if (!$umkm) {
            $umkm = new \App\Models\UMKM();
            $umkm->user_id = $user->id;
        }

        $umkm->name = $request->name;
        $umkm->description = $request->description;

        if ($request->hasFile('photo')) {
            if ($umkm->logo) {
                Storage::disk('public')->delete($umkm->logo);
            }
            
            $photoPath = Storage::disk('public')->putFile('logo', $request->file('photo'));
            $umkm->logo = $photoPath;
        }

        $umkm->location = $request->location;
        $umkm->whatsapp_number = $request->whatsapp_number;
        $umkm->save();
    }

    public function apiReviews() {
        /** @var App\Models\User */
        $user = Auth::user();

        return $user->reviews()->with(['model', 'author'])->paginate(10);
    }
}
