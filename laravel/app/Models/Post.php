<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Plank\Mediable\Mediable;
use Plank\Metable\Metable;
use Spatie\Tags\HasTags;

class Post extends Model
{
    use HasFactory, Metable, Mediable, HasTags;

    /** Post type */
    const TYPE_POSTS = 0;
    const TYPE_PAGES = 1;
    const TYPE_PRODUCTS = 2;
    const TYPE_MEDIA = 3;

    /** Post status */
    const STATUS_PENDING = 0;
    const STATUS_PUBLISH = 1;
    const STATUS_REVIEW = 2;
    const STATUS_TRASH = 3;

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
