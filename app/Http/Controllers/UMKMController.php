<?php

namespace App\Http\Controllers;

use App\Models\UMKM;
use Illuminate\Http\Request;

class UMKMController extends Controller
{
    public function apiIndex(Request $request) {
        $data = UMKM::search($request->query('search'), ['name', 'location', 'whatsapp_number'], [])->paginate($request->query('per_page', 10));
        return response()->json($data);
    }

    public function rateUMKM(Request $request, $umkm) {
        // $umkm = UMKM::findOrFail($umkm);
        // $umkm->ratings()->create([
        //     'rating' => $request->rating,
        //     'comment' => $request->comment,
        //     'user_id' => auth()->id(),
        // ]);
    }
}
