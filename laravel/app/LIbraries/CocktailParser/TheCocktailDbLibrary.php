<?php


namespace App\LIbraries\CocktailParser;

use GuzzleHttp\Client;

class TheCocktailDbLibrary
{

    /**
     * @var mixed
     */
    private $cocktailDbApiToken;

    public function __construct()
    {
        $this->cocktailDbApiToken = env('COCKTAIL_DB_API_TOKEN');
    }

    public function getAllDrinkCategories()
    {
        $client = new Client();
        $url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

        $response = $client->request('GET', $url, []);

        return json_decode($response->getBody()->getContents(), 1);
    }

    public function getAllDrinkGlasses()
    {
        $client = new Client();
        $url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list';

        $response = $client->request('GET', $url, []);

        return json_decode($response->getBody()->getContents(), 1);
    }

    public function getAllDrinkIngredients()
    {
        $client = new Client();
        $url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';

        $response = $client->request('GET', $url, []);

        return json_decode($response->getBody()->getContents(), 1);
    }

    public function getDrinkAlcoholicTypes()
    {
        $client = new Client();
        $url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list';

        $response = $client->request('GET', $url, []);

        return json_decode($response->getBody()->getContents(), 1);
    }

    public function getAllCocktails()
    {
        $cocktails = [];
        $client = new Client();

        foreach(range('a', 'z') as $letter) {
            $url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' . $letter;
            $response = $client->request('GET', $url, []);
            $response = json_decode($response->getBody()->getContents(), 1);

            $cocktails[$letter] = $response;
        }

        return $cocktails;
    }
}
