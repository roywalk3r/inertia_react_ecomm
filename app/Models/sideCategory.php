<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class sideCategory extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'parent_id', 'quantity'];

    // Self-referencing one-to-many relationship
    public function children()
    {
        return $this->hasMany(sideCategory::class, 'parent_id');
    }

    // Access the parent category
    public function parent()
    {
        return $this->belongsTo(sideCategory::class, 'parent_id');
    }
}
