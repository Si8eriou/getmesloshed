<?php


namespace App\Models;


class DrinkUserRelationship
{
    protected $table = 'drink_user_relationship';

    public $timestamps = false;

    protected $fillable = [
        'drinkID', 'userID'
    ];
}
