<?php

namespace App\Models;

use Digikraaft\ReviewRating\Traits\HasReviewRating;
use Illuminate\Database\Eloquent\Model;

class UMKM extends BaseModel
{
    use HasReviewRating;

    protected $guarded = [];

    protected $appends = [
        'logo_url',
        'ratings',
    ];

    public function getRatingsAttribute() {
        return [
            'total' => $this->numberOfRatings(),
            'average' => $this->averageRating(2),
            '5' => $this->reviews()->where('rating', 5)->count(),
            '4' => $this->reviews()->where('rating', 4)->count(),
            '3' => $this->reviews()->where('rating', 3)->count(),
            '2' => $this->reviews()->where('rating', 2)->count(),
            '1' => $this->reviews()->where('rating', 1)->count(),
        ];
    }

    public function getLogoUrlAttribute()
    {
        return url('storage/' . $this->logo);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
