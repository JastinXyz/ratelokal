<?php

use App\Http\Controllers\AnotherProfileController;
use App\Http\Controllers\GoogleLoginController;
use App\Http\Controllers\UMKMController;
use App\Models\UMKM;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('LandingPage');
});
Route::get('/search', function () {
    $q = request()->query('q');
    return Inertia::render('Search', ['q' => $q]);
});

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

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

    Route::post('/api/umkm/{umkm}/rate', [UMKMController::class, 'rate'])->name('umkm.rate');
    Route::delete('/api/umkm/{umkm}/rate', [UMKMController::class, 'destroyRate'])->name('umkm.destroyRate');

    Route::get('/api/reviews', [AnotherProfileController::class, 'apiReviews'])->name('profile.apiReviews');
});

Route::get('/api/umkm', [UMKMController::class, 'apiIndex'])->name('umkm.apiIndex');
Route::get('/api/umkm/recommend/{umkm?}', [UMKMController::class, 'recommend'])->name('umkm.recommend');
Route::get('/umkm/{umkm}', [UMKMController::class, 'show'])->name('umkm.show');

Route::get('/login/google', [GoogleLoginController::class, 'redirectToGoogle'])->name('auth.google');
Route::get('/oauth/google/callback', [GoogleLoginController::class, 'handleGoogleCallback']);