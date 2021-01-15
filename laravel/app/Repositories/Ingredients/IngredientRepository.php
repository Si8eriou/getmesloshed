<?php


namespace App\Repositories\Ingredients;

use App\Models\Ingredient;
use Illuminate\Support\Facades\Cache;

class IngredientRepository
{
    public function getAllIngredients()
    {

    }

    public function getAllIngredientsNames()
    {

        return Cache::rememberForever('ingredients', function () {
            return Ingredient::all()->sortBy('name')->pluck('name');
        });
    }

    public function getIngredientByName()
    {

    }
}
