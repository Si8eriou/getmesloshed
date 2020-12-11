<?php


namespace App\Repositories\Cocktail;


use App\Models\Category;
use App\Models\Drink;
use App\Models\DrinkIngredientRelationship;
use App\Models\Glass;
use App\Models\Ingredient;
use App\Models\Tag;
use Illuminate\Support\Facades\Cache;

class CocktailRepository
{

    public function getAllDrinks()
    {
        return Drink::all()->keyBy('name');
    }

    public function getAllDrinksNames()
    {
        return Cache::rememberForever('drinks', function () {
            return Drink::all()->sortBy('name')->pluck('name');
        });
    }

    public function getDrinkByID($drinkID)
    {
        return Drink::find('id', $drinkID);
    }

    public function getRandomDrinks()
    {
        return Drink::inRandomOrder()
            ->with('glass', 'ingredients.ingredient')
            ->limit(10)
            ->paginate(5);
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
