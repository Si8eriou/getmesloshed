<?php


namespace App\Repositories\Search;


use App\Models\Drink;

class SearchRepository
{
    public function search($searchParam)
    {

        $results = Drink::with('ingredients.ingredient')
            ->whereHas('ingredients', function ($query) use ($searchParam) {
                $query->whereHas('ingredient', function ($q) use ($searchParam) {
                    $q->where('name', 'LIKE' , '%' .$searchParam. '%');
                });
            })
            ->get();


        return $results;
    }
}
