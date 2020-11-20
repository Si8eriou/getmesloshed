<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Drink extends Model
{
    protected $table = 'drinks';

    protected $primaryKey = 'id';

    public $timestamps = true;

    protected $fillable = [
      'glassID', 'categoryID', 'instruction'
    ];

    public function ingredients() {
        return $this->hasMany(DrinkIngredientRelationship::class, 'drinkID');
    }

    public function tags() {
        return $this->hasMany(DrinkTagRelationship::class, 'drinkID');
    }

    public function glass() {
        return $this->belongsTo(Glass::class, 'glassID', 'id');
    }

    public function category() {
        return $this->belongsTo(Category::class, 'categoryID', 'id');
    }
}
