<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Ingredient extends Model
{
    protected $table = 'ingredients';

    protected $primaryKey = 'id';

    public $timestamps = false;

    protected $fillable = [
        'name', 'type'
    ];
}
