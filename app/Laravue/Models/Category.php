<?php

namespace App\Laravue\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [
        'category_name', 'category_description'
    ];
}
