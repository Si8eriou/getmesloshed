<?php


namespace App\Repositories\Cocktail;


use App\Models\Category;
use App\Models\Drink;
use App\Models\DrinkIngredientRelationship;
use App\Models\Glass;
use App\Models\Ingredient;
use App\Models\Tag;

class CocktailRepository
{

    public function getAllDrinks()
    {
        return Drink::all()->keyBy('name');
    }

    public function getAllDrinksNames()
    {
        return Drink::all()->sortBy('name')->pluck('name');
    }

    public function getDrinkByID($drinkID)
    {
        return Drink::find('id', $drinkID);
    }

    public function searchDrinkByName($search)
    {
        //TODO: search drink by name
    }

    public function getRandomDrinks()
    {
        return Drink::inRandomOrder()->limit(5)->get();
    }

    public function getDrinksByGlass($glassID)
    {
        return Drink::where('glassID', $glassID)->get();
    }

    public function getDrinksByIngredient($drinkID, $ingredientID)
    {
        return Drink::where('id', $drinkID)
            ->where('ingredientsRelationship.ingredient')
            ->get();
    }

    public function getDrinksByIngredients($ingredients)
    {
        //TODO: drinks by ingredients
    }

    public function getDrinksByCategory($categoryID)
    {
        return Drink::where('categoryID', $categoryID)->get();
    }


    public function deleteCocktailIngredientRelations($drinkID)
    {
        $ingredients = DrinkIngredientRelationship::where('drinkID', $drinkID)
            ->get();

        if (!empty($ingredients)) {
            foreach ($ingredients as $ingredient) {
                $ingredient->delete();
            }
        }
    }
}
