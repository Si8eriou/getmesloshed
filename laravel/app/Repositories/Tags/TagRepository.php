<?php


namespace App\Repositories\Tags;


use App\Models\Tag;

class TagRepository
{
    public function getAllTagNames()
    {
        return Tag::all()->sortBy('name')->pluck('name');
    }
}
