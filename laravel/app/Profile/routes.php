<?php
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => '/profile'], function () {
    Route::group(['prefix' => '/profile-drink/{drink_id}'], function () {
        Route::delete('', \App\Profile\Http\ProfileDrinkController::class . '@addProfileDrink');
        Route::post('', \App\Profile\Http\ProfileDrinkController::class . '@removeProfileDrink');
    });
});
