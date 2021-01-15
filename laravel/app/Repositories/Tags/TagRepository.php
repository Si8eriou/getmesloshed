<?php


namespace App\Repositories\Tags;


use App\Models\Tag;
use Illuminate\Support\Facades\Cache;

class TagRepository
{
    public function getAllTagNames()
    {
        return Cache::rememberForever('tags', function () {
            return Tag::all()->sortBy('name')->pluck('name');
        });
    }
}
