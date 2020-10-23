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
}
