<?php


namespace App\LIbraries\CocktailParser;


use GuzzleHttp\Client;

class TheCocktailDbLibrary
{
    public function getAllDrinkCategories() {
        $client = new Client();
        $url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

        $response = $client->request('GET', $url, []);

        return $response->getBody()->getContents();
    }

    public function getAllDrinkGlasses() {
        $client = new Client();
        $url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list';

        $response = $client->request('GET', $url, []);

        return $response->getBody()->getContents();
    }

    public function getAllDrinkIngredients() {
        $client = new Client();
        $url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';

        $response = $client->request('GET', $url, []);

        return $response->getBody()->getContents();
    }

    public function getDrinkAlcoholicTypes() {
        $client = new Client();
        $url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list';

        $response = $client->request('GET', $url, []);

        return $response->getBody()->getContents();
    }

    public function getAllCocktails() {
        $cocktails = [];
        $client = new Client();
        $url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

//        foreach(range('a', 'z') as $letter) {
//            $url = $url . $letter;
        $response = $client->request('GET', $url, []);
        $response = json_decode($response->getBody()->getContents(), 1);
        array_push($cocktails, ['a' => $response]);
//        }

        dd($cocktails, count($cocktails));

        return $cocktails;
    }
}
