<?php


namespace App\Repositories\Ingredients;

use App\Models\Ingredient;

class IngredientRepository
{
    public function getAllIngredients()
    {

    }

    public function getAllIngredientsNames()
    {
        return Ingredient::all()->sortBy('name')->pluck('name');
    }

    public function getIngredientByName()
    {

    }
}
