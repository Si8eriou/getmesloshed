<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class DrinkIngredientRelationship extends Model
{
    protected $table = 'drink_ingredient_relationship';

    public $timestamps = false;

    protected $fillable = [
      'drinkID', 'glassID', 'amount', 'unit'
    ];
}
