<?php


namespace App\Http\Controllers\Cocktail;


use App\Http\Controllers\Controller;
use App\Jobs\CocktailParser;
use App\LIbraries\CocktailParser\CocktailParserLibrary;
use App\Repositories\Cocktail\CocktailRepository;
use Illuminate\Http\Request;

class CocktailController extends Controller
{
    public function getAllDrinks(Request $request, CocktailRepository $cocktailRepository)
    {
        return json_decode($cocktailRepository->getAllDrinks(), 1);
    }

    public function getDrinkByID(Request $request, CocktailRepository $cocktailRepository)
    {
        return json_decode($cocktailRepository->getDrinkByID($request->drinkID), 1);
    }

    public function searchDrinkByName(Request $request, CocktailRepository $cocktailRepository)
    {
        return json_decode($cocktailRepository->searchDrinkByName($request->search), 1);
    }

    public function getRandomDrinks(Request $request, CocktailRepository $cocktailRepository)
    {
        return json_decode($cocktailRepository->getRandomDrinks(), 1);
    }

    public function getDrinksByGlass(Request $request, CocktailRepository $cocktailRepository)
    {
        return json_decode($cocktailRepository->getDrinksByGlass(), 1);
    }

    public function getDrinksByIngredient(Request $request, CocktailRepository $cocktailRepository)
    {
        return json_decode($cocktailRepository->getDrinksByIngredient($request->drinkID, $request->ingredientID), 1);
    }

    public function getDrinksByIngredients(Request $request, CocktailRepository $cocktailRepository)
    {
        return json_decode($cocktailRepository->getDrinksByIngredients($request->ingredients), 1);
    }

    public function getDrinksByCategory(Request $request, CocktailRepository $cocktailRepository)
    {
        return json_decode($cocktailRepository->getDrinksByCategory($request->categoryID), 1);
    }

    public function getDrinksByTag(Request $request, CocktailRepository $cocktailRepository)
    {
        return json_decode($cocktailRepository->getDrinksByTag($request->tagID), 1);
    }

    public function getDrinkByUser(Request $request, CocktailRepository $cocktailRepository)
    {
        return json_decode($cocktailRepository->getDrinkByUser($request->userID), 1);
    }

    public function doParser()
    {
        $parser = new CocktailParserLibrary();

        $parser->parseCocktailDb();
    }
}
