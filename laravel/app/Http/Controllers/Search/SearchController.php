<?php


namespace App\Http\Controllers\Search;


use App\Http\Controllers\Controller;
use App\Repositories\Category\CategoryRepository;
use App\Repositories\Cocktail\CocktailRepository;
use App\Repositories\Glass\GlassRepository;
use App\Repositories\Ingredients\IngredientRepository;
use App\Repositories\Search\SearchRepository;
use App\Repositories\Tags\TagRepository;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function getSearchInfo(Request $request, CocktailRepository $cocktailRepository,
                                  IngredientRepository $ingredientRepository, GlassRepository $glassRepository,
                                  CategoryRepository $categoryRepository, TagRepository $tagRepository)
    {
        $allDrinkInformation = $cocktailRepository->getAllDrinksNames();
        $allIngredients = $ingredientRepository->getAllIngredientsNames();

        $allGlasses = $glassRepository->getAllGlassNames();
        $allCategories = $categoryRepository->getAllCategoryNames();
        $allTags = $tagRepository->getAllTagNames();

        $info = array_merge(json_decode($allDrinkInformation, true), json_decode($allIngredients, true));
        $info = array_merge($info, json_decode($allGlasses, true));
        $info = array_merge($info, json_decode($allCategories, true));
        $info = array_merge($info, json_decode($allTags, true));
        sort($info);

        return json_encode($info, 1);
    }

    public function search(Request $request, SearchRepository $searchRepository)
    {
        $searchParams = $request->get('searchParams');
        $searchParams = explode(',', $searchParams);

        return $searchRepository->search($searchParams);
    }
}
