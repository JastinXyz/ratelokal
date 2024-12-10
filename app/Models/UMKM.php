<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UMKM extends BaseModel
{
    protected $guarded = [];

    protected $appends = ['logo_url'];

    public function getLogoUrlAttribute()
    {
        return url('storage/' . $this->logo);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
