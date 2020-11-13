<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class DrinkIngredientRelationship extends Model
{
    protected $table = 'drink_ingredient_relationship';

    public $timestamps = false;

    protected $fillable = [
      'drinkID', 'ingredientID', 'amount', 'unit'
    ];

    public function ingredient() {
        return $this->hasOne(Ingredient::class, 'id', 'ingredientID');
    }
}
