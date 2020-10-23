<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class DrinkTagRelationship extends Model
{
    protected $table = 'drink_ingredient_relationship';

    public $timestamps = false;

    protected $fillable = [
        'drinkID', 'tagID'
    ];
}
