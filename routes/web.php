<?php

use App\Http\Controllers\AnotherProfileController;
use App\Http\Controllers\GoogleLoginController;
use App\Models\UMKM;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard', [
            'umkm' => UMKM::where('user_id', Auth::id())->first()
        ]);
    })->name('dashboard');

    Route::post('/profile/roleswitch', [AnotherProfileController::class, 'roleSwitch'])->name('profile.switch-role');
    Route::post('/profile/updateumkm', [AnotherProfileController::class, 'updateUMKM'])->name('profile.update-umkm');
});

Route::get('/login/google', [GoogleLoginController::class, 'redirectToGoogle'])->name('auth.google');
Route::get('/oauth/google/callback', [GoogleLoginController::class, 'handleGoogleCallback']);