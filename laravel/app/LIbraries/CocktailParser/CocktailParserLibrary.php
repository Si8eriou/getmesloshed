<?php


namespace App\LIbraries\CocktailParser;


use App\Repositories\Cocktail\CocktailRepository;
use App\LIbraries\CocktailParser\TheCocktailDbLibrary;

class CocktailParserLibrary
{
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
        $this->cocktailDbIngredients = $this->getAllCockTailDbIngredients();
        $this->cocktailDbGlasses = $this->getAllCockTailDbGlasses();
        $this->cocktailDbCocktails = $this->getAllCockTailDbCocktails();
        $this->cocktailDbCategories = $this->getAllCockTailDbCategories();
        $this->ingredients = $this->getAllIngredients();
        $this->glasses = $this->getAllGlasses();
        $this->categories = $this->getAllCategories();
        $this->cocktails = $this->getAllCocktails();
    }

    public function parseCocktailDb() {
        $this->parseIngredients();
        $this->parseGlasses();
        $this->glasses = $this->getAllGlasses();
        $this->ingredients = $this->getAllIngredients();
        $this->parseCocktails();
    }

    private function getAllCockTailDbIngredients() {
        return $this->theCocktailDbLibrary->getAllDrinkIngredients();
    }

    private function getAllCockTailDbCocktails() {
        return $this->theCocktailDbLibrary->getAllCocktails();
    }

    private function getAllCockTailDbGlasses() {
        return $this->theCocktailDbLibrary->getAllDrinkGlasses();
    }

    private function getAllCockTailDbCategories() {
        return $this->theCocktailDbLibrary->getAllDrinkCategories();
    }

    private function getDrinkCocktailDbAlcoholicTypes() {
        return $this->theCocktailDbLibrary->getDrinkAlcoholicTypes();
    }

    private function getAllIngredients() {
        return [false];
    }

    private function getAllCocktails() {
        return [false];
    }

    private function getAllGlasses() {
        return [false];
    }

    private function getAllCategories() {
        return [false];
    }

    private function parseIngredients() {
        foreach($this->cocktailDbIngredients as $ingredient) {
            if (!array_key_exists($ingredient, $this->ingredients)) {
                $this->saveNewIngredient($ingredient);
            }
        }
    }

    private function parseGlasses() {
        foreach($this->cocktailDbGlasses as $glass) {
            if (!array_key_exists($glass, $this->glasses)) {
                $this->saveNewGlass($glass);
            }
        }
    }

    private function parseCocktails() {
        foreach($this->cocktailDbCocktails as $cocktail) {
            if (!array_key_exists($cocktail, $this->cocktails)) {
                $newCocktail = $this->saveNewCocktail($cocktail);
                $this->saveCocktailIngredientRelation($newCocktail,$cocktail);
            }
        }
    }

    private function getGlassID($glass) {
        return $this->ingredients[$glass->name]['id'];
    }

    private function getCategoryID($category) {
        return $this->ingredients[$category->name]['id'];
    }

    private function getIngredientID($ingredient) {
        return $this->ingredients[$ingredient->name]['id'];
    }

    private function saveNewCocktail($cocktail) {
//        $newCocktail = new Cocktail;

        $newCocktail->glass_id = $this->getGlassID($cocktail);
        $newCocktail->name = $cocktail->name;
        $newCocktail->category = $this->getCategoryID($cocktail);
        $newCocktail->instruction = $cocktail->strInstructions;
        $newCocktail->alcoholic = $cocktail->strAlcoholic;
        $newCocktail->video = $cocktail->strVideo;
        $newCocktail->image = $cocktail->strDrinkThumb;

        $drink->save();

        return $newCocktail;
    }

    private function saveNewGlass($glass) {
        //        $glass = new Glass;

//        $glass->name = $glass->strGlass;
//        $glass->save();
    }

    private function saveNewIngredient($ingredient) {
//        $ingredient = new Ingredient;

//        $ingredient->type = 0;
//        $ingredient->name = $ingredient->strIngredient1;
//        $ingredient->save();
    }

    private function saveCocktailIngredientRelation($newCocktail, $cocktail) {
        $ingredientsToSave = $this->getCocktailIngredients($cocktail);

        if ($ingredientsToSave) {
            foreach ($ingredientsToSave as $ingredient) {
                //        $cocktailIngredientRelationship = new CocktailIngredientRelationship;

                $cocktailIngredientRelationship->cocktail_id = $newCocktail->id;
                $cocktailIngredientRelationship->ingredient_id = $this->getIngredientID($ingredient);
                $cocktailIngredientRelationship->measure = $ingredient->measure;
            }
        }
    }

    private function saveCocktailTagRelationship($cocktail) {
        $tags = preg_split(",", $cocktail->strTags);

        if ($tags) {
            foreach ($tags as $tag) {
//                $newTag = new Tag;

                $tag->name = $tag;
                $tag->save();
            }
        }
    }

    private function getCocktailIngredients($cocktail) {
        $ingredientsToSave = [];

        if ($cocktail->strIngredient1) {
            array_push($ingredientsToSave, ['name' => $cocktail->strIngredient1, 'measure' => $cocktail->strMeasure1]);
        }
        if ($cocktail->strIngredient2) {
            array_push($ingredientsToSave, [$cocktail->strIngredient2, $cocktail->strMeasure2]);
        }
        if ($cocktail->strIngredient3) {
            array_push($ingredientsToSave, [$cocktail->strIngredient3, $cocktail->strMeasure3]);
        }
        if ($cocktail->strIngredient4) {
            array_push($ingredientsToSave, [$cocktail->strIngredient4, $cocktail->strMeasure4]);
        }
        if ($cocktail->strIngredient5) {
            array_push($ingredientsToSave, [$cocktail->strIngredient5, $cocktail->strMeasure5]);
        }
        if ($cocktail->strIngredient6) {
            array_push($ingredientsToSave, [$cocktail->strIngredient6, $cocktail->strMeasure6]);
        }
        if ($cocktail->strIngredient7) {
            array_push($ingredientsToSave, [$cocktail->strIngredient7, $cocktail->strMeasure7]);
        }
        if ($cocktail->strIngredient8) {
            array_push($ingredientsToSave, [$cocktail->strIngredient8, $cocktail->strMeasure8]);
        }
        if ($cocktail->strIngredient9) {
            array_push($ingredientsToSave, [$cocktail->strIngredient9, $cocktail->strMeasure9]);
        }
        if ($cocktail->strIngredient10) {
            array_push($ingredientsToSave, [$cocktail->strIngredient10, $cocktail->strMeasure10]);
        }
        if ($cocktail->strIngredient11) {
            array_push($ingredientsToSave, [$cocktail->strIngredient11, $cocktail->strMeasure11]);
        }
        if ($cocktail->strIngredient12) {
            array_push($ingredientsToSave, [$cocktail->strIngredient12, $cocktail->strMeasure12]);
        }
        if ($cocktail->strIngredient13) {
            array_push($ingredientsToSave, [$cocktail->strIngredient13, $cocktail->strMeasure13]);
        }
        if ($cocktail->strIngredient14) {
            array_push($ingredientsToSave, [$cocktail->strIngredient14, $cocktail->strMeasure14]);
        }
        if ($cocktail->strIngredient15) {
            array_push($ingredientsToSave, [$cocktail->strIngredient15, $cocktail->strMeasure15]);
        }

        return $ingredientsToSave;
    }
}
