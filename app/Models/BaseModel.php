<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BaseModel extends Model
{
    use HasFactory;

    public function scopeSearch($query, $searchTerm, $mainColumns = [], $relations = [])
    {
        return $query->where(function ($q) use ($mainColumns, $searchTerm) {
            foreach ($mainColumns as $column) {
                $q->orWhere($column, 'like', '%' . $searchTerm . '%');
            }
        })->orWhere(function ($q) use ($searchTerm, $relations) {
            foreach ($relations as $relation => $columns) {
                $q->orWhereHas($relation, function ($q) use ($searchTerm, $columns) {
                    $q->where(function ($q) use ($searchTerm, $columns) {
                        foreach ($columns as $column) {
                            $q->orWhere($column, 'like', '%' . $searchTerm . '%');
                        }
                    });
                });
            }
        });
    }
}
