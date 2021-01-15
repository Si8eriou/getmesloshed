<?php


namespace App\Repositories\Category;


use App\Models\Category;
use Illuminate\Support\Facades\Cache;

class CategoryRepository
{
    public function getAllCategoryNames()
    {
        return Cache::rememberForever('categories', function () {
            return Category::all()->sortBy('name')->pluck('name');
        });
    }
}
