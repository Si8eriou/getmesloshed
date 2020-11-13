<?php


namespace App\Repositories\Category;


use App\Models\Category;

class CategoryRepository
{
    public function getAllCategoryNames()
    {
        return Category::all()->sortBy('name')->pluck('name');
    }
}
