<?php


namespace App\Http\Controllers\Search;


use App\Http\Controllers\Controller;
use App\Repositories\Category\CategoryRepository;
use App\Repositories\Cocktail\CocktailRepository;
use App\Repositories\Glass\GlassRepository;
use App\Repositories\Ingredients\IngredientRepository;
use App\Repositories\Search\SearchRepository;
use App\Repositories\Tags\TagRepository;
use Illuminate\Support\Facades\Cache;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function getSearchInfo(Request $request, CocktailRepository $cocktailRepository,
                                  IngredientRepository $ingredientRepository, GlassRepository $glassRepository,
                                  CategoryRepository $categoryRepository, TagRepository $tagRepository)
    {
        $allDrinkInformation = $this->getAllDrinksNames($cocktailRepository);
        $allIngredients = $this->getAllIngredientsNames($ingredientRepository);
        $allGlasses = $this->getAllGlassNames($glassRepository);
        $allCategories = $this->getAllCategoryNames($categoryRepository);
        $allTags = $this->getAllTagNames($tagRepository);

        $info = array_merge(json_decode($allDrinkInformation, true), json_decode($allIngredients, true));
        $info = array_merge($info, json_decode($allGlasses, true));
        $info = array_merge($info, json_decode($allCategories, true));
        $info = array_merge($info, json_decode($allTags, true));

        sort($info);
        return json_encode($info, 1);
    }

    public function search(Request $request, SearchRepository $searchRepository, CocktailRepository $cocktailRepository)
    {
        $searchParams = $request->get('searchParams');
        $searchParams = explode(',', $searchParams);

        $results = $searchRepository->search($searchParams);

        if ($results->total()) {
            return $results;
        }
        return $cocktailRepository->getRandomDrinks();
    }

    private function getAllDrinksNames($cocktailRepository)
    {
        if (Cache::has('drinks')) {
            return Cache::get('drinks');
        }
        return $cocktailRepository->getAllDrinksNames();
    }

    private function getAllIngredientsNames($ingredientRepository)
    {
        if (Cache::has('ingredients')) {
            return Cache::get('ingredients');
        }
        return $ingredientRepository->getAllIngredientsNames();
    }

    private function getAllGlassNames($glassRepository)
    {
        if (Cache::has('glasses')) {
            return Cache::get('glasses');
        }
        return $glassRepository->getAllGlassNames();
    }

    private function getAllCategoryNames($categoryRepository)
    {
        if (Cache::has('categories')) {
            return Cache::get('categories');
        }
        return $categoryRepository->getAllCategoryNames();
    }

    private function getAllTagNames($tagRepository)
    {
        if (Cache::has('tags')) {
            return Cache::get('tags');
        }
        return $tagRepository->getAllTagNames();
    }
}
