<?php


namespace App\Http\Controllers\Cocktail;


use App\Http\Controllers\Controller;
use App\Repositories\Cocktail\CocktailRepository;
use Illuminate\Http\Request;

class CocktailController extends Controller
{
    public function getAllDrinkCategories(Request $request, CocktailRepository $cocktailRepository) {
        return $cocktailRepository->getAllDrinkCategories();
    }

    public function getAllDrinkGlasses(Request $request, CocktailRepository $cocktailRepository) {
        return $cocktailRepository->getAllDrinkGlasses();
    }

    public function getAllDrinkIngredients(Request $request, CocktailRepository $cocktailRepository) {
        return $cocktailRepository->getAllDrinkIngredients();
    }

    public function getDrinkAlcoholicTypes(Request $request, CocktailRepository $cocktailRepository) {
        return $cocktailRepository->getDrinkAlcoholicTypes();
    }

    public function getAllCocktails(Request $request, CocktailRepository $cocktailRepository) {
        return $cocktailRepository->getAllCocktails();
    }
}
