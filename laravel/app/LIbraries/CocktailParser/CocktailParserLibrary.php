<?php


namespace App\LIbraries\CocktailParser;


use App\Models\Tag;
use App\Repositories\Cocktail\CocktailRepository;
use App\LIbraries\CocktailParser\TheCocktailDbLibrary;

use App\Models\Glass;
use App\Models\Category;
use App\Models\Drink;
use App\Models\Ingredient;
use App\Models\DrinkIngredientRelationship;
use App\Models\DrinkUserRelationShip;

class CocktailParserLibrary
{
    /**
     * @var Glass
     */
    private $glass;

    /**
     * @var Category
     */
    private $category;

    /**
     * @var Drink
     */
    private $drink;

    /**
     * @var Ingredient
     */
    private $ingredient;

    /**
     * @var DrinkIngredientRelationship
     */
    private $drinkIngredientRelationship;

    /**
     * @var DrinkUserRelationShip
     */
    private $drinkUserRelationShip;

    /**
     * @var CocktailRepository
     */
    private $cocktailRepository;

    /**
     * @var TheCocktailDbLibrary
     */
    private $theCocktailDbLibrary;

    /**
     * @var array
     */
    private $cocktailDbIngredients;

    /**
     * @var array
     */
    private $cocktailDbGlasses;

    /**
     * @var array
     */
    private $cocktailDbCocktails;

    /**
     * @var array
     */
    private $cocktailDbCategories;

    /**
     * @var array
     */
    private $ingredients;

    /**
     * @var array
     */
    private $glasses;

    /**
     * @var array
     */
    private $categories;

    /**
     * @var array
     */
    private $cocktails;


    /**
     * CocktailParserLibrary constructor.
     */

    public function __construct()
    {
        $this->cocktailDbLibrary = new TheCocktailDbLibrary();
        $this->cocktailRepository = new CocktailRepository();
        $this->ingredients = $this->getAllIngredients();
        $this->glasses = $this->getAllGlasses();
        $this->cocktailDbIngredients = $this->getAllCockTailDbIngredients();
        $this->cocktailDbGlasses = $this->getAllCockTailDbGlasses();
        $this->cocktailDbCategories = $this->getAllCockTailDbCategories();
        $this->categories = $this->getAllCategories();
        $this->cocktailDbCocktails = $this->getAllCockTailDbCocktails();
        $this->cocktails = $this->getAllCocktails();
    }

    public function parseCocktailDb()
    {
        $this->parseIngredients();
        $this->parseGlasses();
        $this->parseCategories();
        $this->glasses = $this->getAllGlasses();
        $this->ingredients = $this->getAllIngredients();
        $this->categories = $this->getAllCategories();

        $this->parseCocktails();

        return $this->cocktails;
    }

    private function getAllCockTailDbIngredients()
    {
        return $this->cocktailDbLibrary->getAllDrinkIngredients();
    }

    private function getAllCockTailDbCocktails()
    {
        return $this->cocktailDbLibrary->getAllCocktails();
    }

    private function getAllCockTailDbGlasses()
    {
        return $this->cocktailDbLibrary->getAllDrinkGlasses();
    }

    private function getAllCockTailDbCategories()
    {
        return $this->cocktailDbLibrary->getAllDrinkCategories();
    }

    private function getDrinkCocktailDbAlcoholicTypes()
    {
        return $this->cocktailDbLibrary->getDrinkAlcoholicTypes();
    }

    private function getAllIngredients()
    {
        return $this->getAllDrinkIngredients();
    }

    private function getAllCocktails()
    {
        return $this->getAllDrinkCocktails();
    }

    private function getAllGlasses()
    {
        return $this->getAllDrinkGlasses();
    }

    private function getAllCategories()
    {
        return $this->getAllDrinkCategories();
    }

    private function getAllTags()
    {
        return $this->getAllDrinkTags();
    }

    private function getCurrentSavedIngredientRelationships() {
        return $this->getCurrentSavedDrinkIngredientRelationships();
    }

    private function getAllDrinkIngredients() {
        return Ingredient::all();
    }

    private function getAllDrinkCocktails() {
        return Drink::all();
    }

    private function getAllDrinkGlasses() {
        return Glass::all();
    }

    private function getAllDrinkCategories() {
        return Category::all();
    }

    private function getAllDrinkTags() {
        return Tag::all();
    }

    private function getCurrentSavedDrinkIngredientRelationships() {
        return DrinkIngredientRelationship::all();
    }

    private function parseIngredients()
    {
        foreach ($this->cocktailDbIngredients['drinks'] as $ingredient) {
            if (!empty($this->ingredients)) {
                if (!array_key_exists($this->capatalizeWords($ingredient['strIngredient1']), $this->ingredients)) {
                    $this->saveNewIngredient($ingredient);
                }
            } else {
                $this->saveNewIngredient($ingredient);
            }
        }
    }

    private function parseGlasses()
    {
        foreach ($this->cocktailDbGlasses['drinks'] as $glass) {
            if ($glass['strGlass'] !== '') {
                if (!empty($this->glasses)) {
                    if (!array_key_exists($this->capatalizeWords($glass['strGlass']), $this->glasses)) {
                        $this->saveNewGlass($glass);
                    }
                } else {
                    $this->saveNewGlass($glass);
                }
            }
        }
    }

    private function parseCategories()
    {
        foreach ($this->cocktailDbCategories['drinks'] as $category) {
            if (!empty($this->categories)) {
                if (!array_key_exists($this->capatalizeWords($category['strCategory']), $this->categories)) {
                    $this->saveNewCategory($category);
                }
            } else {
                $this->saveNewCategory($category);
            }
        }
    }

    private function parseCocktails()
    {
        foreach ($this->cocktailDbCocktails as $letter) {
            if ($letter['drinks']) {
                foreach ($letter['drinks'] as $cocktail) {
                    if (!empty($this->cocktails)) {
                        if (!array_key_exists($this->capatalizeWords($cocktail['strDrink']), $this->cocktails)) {
                            $newCocktail = $this->saveNewCocktail($cocktail);
                            $this->saveCocktailIngredientRelation($newCocktail, $cocktail);
                            $this->saveCocktailTagRelationship($newCocktail, $cocktail);
                        }
                    } else {
                        $newCocktail = $this->saveNewCocktail($cocktail);
                        $this->saveCocktailIngredientRelation($newCocktail, $cocktail);
                    }
                }
            }
        }
    }

    private function getGlassID($cocktail)
    {
        return $this->glasses[$this->capatalizeWords($cocktail['strGlass'])]['id'];
    }

    private function getCategoryID($cocktail)
    {
        return $this->categories[$this->capatalizeWords($cocktail['strCategory'])]['id'];
    }

    private function getIngredientID($ingredient)
    {
        return $this->ingredients[$this->capatalizeWords($ingredient['name'])]['id'] ?? '';
    }

    private function saveNewCocktail($cocktail)
    {
        $newCocktail = new Drink();

        $newCocktail->glassID = $this->getGlassID($cocktail) ?? '';
        $newCocktail->name = $this->capatalizeWords($cocktail['strDrink']) ?? '';
        $newCocktail->categoryID = $this->getCategoryID($cocktail) ?? '';
        $newCocktail->instruction = $cocktail['strInstructions'] ?? '';
        $newCocktail->alcoholic = $cocktail['strAlcoholic'] ?? '';
        $newCocktail->video = $cocktail['strVideo'] ?? '';
        $newCocktail->image = $cocktail['strDrinkThumb'] ?? '';
        $newCocktail->image = $cocktail['strDrinkThumb'] ?? '';

        $newCocktail->save();

        return $newCocktail;
    }

    private function saveNewGlass($glass)
    {
        $newGlass = new Glass;

        $newGlass->name = $this->capatalizeWords($glass['strGlass']);
        $newGlass->save();
    }

    private function saveNewIngredient($ingredient)
    {
        $newIngredient = new Ingredient;

        $newIngredient->type = 0;
        $newIngredient->name = $this->capatalizeWords($ingredient['strIngredient1']);
        $newIngredient->save();
    }

    private function saveNewCategory($category)
    {
        $newCategory = new Category();

        $newCategory->name = $this->capatalizeWords($category['strCategory']);

        $newCategory->save();
    }

    private function saveCocktailIngredientRelation($newCocktail, $cocktail)
    {
        $this->deleteCocktailIngredientRelations($newCocktail->id);
        $ingredientsToSave = $this->getCocktailIngredients($cocktail);

        if ($ingredientsToSave) {
            foreach ($ingredientsToSave as $ingredient) {
                $cocktailIngredientRelationship = new DrinkIngredientRelationship();

                $cocktailIngredientRelationship->drinkID = $newCocktail->id ?? '';
                $cocktailIngredientRelationship->ingredientID = $this->getIngredientID($ingredient) ?? '';
                $cocktailIngredientRelationship->amount = $ingredient['amount'] ?? '';
                $cocktailIngredientRelationship->unit = $ingredient->unit ?? '';

                $cocktailIngredientRelationship->save();
            }
        }
    }

    private function saveTag($allTags, $tag)
    {
        if (!array_key_exists($tag, $allTags)) {
            $newTag = new Tag;

            $newTag->name = $tag;
            $newTag->save();

            return $newTag;
        }

        return false;
    }

    private function saveCocktailTagRelationship($newCocktail, $cocktail)
    {
        $tags = explode(',', $cocktail['strTags']);
        $allTags = $this->getAllTags();

        if (!empty($tags)) {
            foreach ($tags as $tag) {
                if (!empty($allTags)) {
                    $newTag = $this->saveTag($allTags, $tag);
                    if ($newTag) {
                        $tagRelation = new \CreateTagsDrinkRelationTable();

                        $tagRelation->drinkID = $newCocktail->id;
                        $tagRelation->tagID = $newTag->id;
                    }
                }
            }
        }
    }

    private function getCocktailIngredients($cocktail)
    {
        $ingredientsToSave = [];

        if ($cocktail['strIngredient1']) {
            array_push($ingredientsToSave, ['name' => $cocktail['strIngredient1'], 'amount' => $cocktail['strMeasure1']]);
        }
        if ($cocktail['strIngredient2']) {
            array_push($ingredientsToSave, ['name' => $cocktail['strIngredient2'], 'amount' => $cocktail['strMeasure2']]);
        }
        if ($cocktail['strIngredient3']) {
            array_push($ingredientsToSave, ['name' => $cocktail['strIngredient3'], 'amount' => $cocktail['strMeasure3']]);
        }
        if ($cocktail['strIngredient4']) {
            array_push($ingredientsToSave, ['name' => $cocktail['strIngredient4'], 'amount' => $cocktail['strMeasure4']]);
        }
        if ($cocktail['strIngredient5']) {
            array_push($ingredientsToSave, ['name' => $cocktail['strIngredient5'], 'amount' => $cocktail['strMeasure5']]);
        }
        if ($cocktail['strIngredient6']) {
            array_push($ingredientsToSave, ['name' => $cocktail['strIngredient6'], 'amount' => $cocktail['strMeasure6']]);
        }
        if ($cocktail['strIngredient7']) {
            array_push($ingredientsToSave, ['name' => $cocktail['strIngredient7'], 'amount' => $cocktail['strMeasure7']]);
        }
        if ($cocktail['strIngredient8']) {
            array_push($ingredientsToSave, ['name' => $cocktail['strIngredient8'], 'amount' => $cocktail['strMeasure8']]);
        }
        if ($cocktail['strIngredient9']) {
            array_push($ingredientsToSave, ['name' => $cocktail['strIngredient9'], 'amount' => $cocktail['strMeasure9']]);
        }
        if ($cocktail['strIngredient10']) {
            array_push($ingredientsToSave, ['name' => $cocktail['strIngredient10'], 'amount' => $cocktail['strMeasure10']]);
        }
        if ($cocktail['strIngredient11']) {
            array_push($ingredientsToSave, ['name' => $cocktail['strIngredient11'], 'amount' => $cocktail['strMeasure11']]);
        }
        if ($cocktail['strIngredient12']) {
            array_push($ingredientsToSave, ['name' => $cocktail['strIngredient12'], 'amount' => $cocktail['strMeasure12']]);
        }
        if ($cocktail['strIngredient13']) {
            array_push($ingredientsToSave, ['name' => $cocktail['strIngredient13'], 'amount' => $cocktail['strMeasure13']]);
        }
        if ($cocktail['strIngredient14']) {
            array_push($ingredientsToSave, ['name' => $cocktail['strIngredient14'], 'amount' => $cocktail['strMeasure14']]);
        }
        if ($cocktail['strIngredient15']) {
            array_push($ingredientsToSave, ['name' => $cocktail['strIngredient15'], 'amount' => $cocktail['strMeasure15']]);
        }

        return $ingredientsToSave;
    }

    private function capatalizeWords($word)
    {
        return implode(
            ' ',
            array_map(
                'ucfirst',
                array_map(
                    'strtolower',
                    explode(' ',
                        trim($word)
                    )
                )
            )
        );
    }

    private function deleteCocktailIngredientRelations($drinkID) {
        $this->cocktailRepository->deleteCocktailIngredientRelations($drinkID);
    }
}
