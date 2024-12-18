<?php

namespace App\Http\Controllers;

use App\Models\UMKM;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class UMKMController extends Controller
{
    public function apiIndex(Request $request) {
        $data = UMKM::search($request->query('search'), ['name', 'location', 'whatsapp_number'], [])->paginate($request->query('per_page', 8));
        return response()->json($data);
    }

    public function rate(Request $request, $umkm) {
        $request->validate([
            'description' => ['required'],
            'rate' => ['required']
        ]);

        $umkm = UMKM::findOrFail($umkm);
        if (Auth::id() == $umkm->user_id) {
            return response()->json(['error' => 'You cannot rate your own UMKM.'], 403);
        }

        $existingReview = $umkm->reviews()->where('author_id', Auth::id())->first();

        if ($existingReview) {
            $existingReview->update([
                'review' => $request->description,
                'rating' => $request->rate
            ]);
        } else {
            $umkm->review($request->description, Auth::user(), $request->rate);
        }
    }

    public function destroyRate($umkm) {
        $umkm = UMKM::findOrFail($umkm);
        $umkm->reviews()->where('author_id', Auth::id())->delete();
    }

    public function show($umkm) {
        $umkm = UMKM::with(['reviews', 'reviews.author'])->findOrFail($umkm);
        return inertia('UMKM/Show', [
            'umkm' => $umkm,
            'hasReviewed' => config('review-rating.review_model')::with('author')->where('model_type', 'App\Models\UMKM')->where('model_id', $umkm->id)->where('author_id', Auth::id())->where('author_type', 'App\Models\User')->first()
        ]);
    }

    public function recommend($umkm = null) {
        if ($umkm) {
            $recommendedUMKM = UMKM::where('id', '!=', $umkm)->inRandomOrder()->take(3)->get();
        } else {
            $recommendedUMKM = UMKM::inRandomOrder()->take(3)->get();
        }
        
        return response()->json($recommendedUMKM);
    }
}
