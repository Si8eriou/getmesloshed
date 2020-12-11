<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => '/cocktail'], function () {
    Route::get('/doSomething', 'App\Http\Controllers\Cocktail\CocktailController@doParser');
});

Route::group(['prefix' => 'search'], function () {
    Route::get('search', 'App\Http\Controllers\Search\SearchController@search');
    Route::get('getSearchInfo', 'App\Http\Controllers\Search\SearchController@getSearchInfo');
});

Route::group(['prefix' => 'auth'], function () {
    Route::get('updateOrCreate', 'App\Http\Controllers\Auth\AuthController@updateOrCreate');
    Route::get('login', 'App\Http\Controllers\Auth\AuthController@login');
});
