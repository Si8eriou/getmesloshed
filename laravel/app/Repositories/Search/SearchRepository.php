<?php


namespace App\Repositories\Search;


use App\Models\Drink;

class SearchRepository
{
    public function search($terms)
    {
        return Drink::with('ingredients.ingredient', 'glass')
            ->where(function ($query) use ($terms) {
                $query->where(function ($query) use ($terms) {
                    $this->getWhereQueries($query, $terms);
                })->orWhereHas('ingredients', function ($query) use ($terms) {
                    $this->getWhereQueries($query, $terms);
                })->orWhereHas('glass', function ($query) use ($terms) {
                    $this->getWhereQueries($query, $terms);
                });
            })->paginate(10);
    }

    private function getWhereQueries(&$query, $terms)
    {
        $first = true;
        foreach ($terms as $term) {
            if ($first) {
                $query->where('name', 'LIKE', "%$term%");
            } else {
                $query->orWhere('name', 'LIKE', "%$term%");
            }
        }
    }
}
