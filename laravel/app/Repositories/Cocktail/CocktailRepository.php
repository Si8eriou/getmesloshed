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
    public function getAllDrinkCategories() {
        return json_decode(Category::all()->keyBy('name'), 1);
    }

    public function getAllDrinkGlasses() {
        return json_decode(Glass::all()->keyBy('name'), 1);
    }

    public function getAllDrinkIngredients() {
        return json_decode(Ingredient::all()->keyBy('name'), 1);
    }

    public function getDrinkAlcoholicTypes() {
        return json_decode(Category::all()->keyBy('name'), 1);
    }

    public function getAllCocktails() {
        return json_decode(Drink::all()->keyBy('name'), 1);
    }

    public function getAllTags() {
        return json_decode(Tag::all()->keyBy('name'), 1);
    }

    public function deleteCocktailIngredientRelations($drinkID) {
        $ingredients = DrinkIngredientRelationship::where('drinkID', $drinkID)
            ->get();

        if (!empty($ingredients)) {
            foreach ($ingredients as $ingredient) {
                $ingredient->delete();
            }
        }
    }
}
