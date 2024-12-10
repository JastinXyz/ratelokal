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
            'average' => $this->averageRating()
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
