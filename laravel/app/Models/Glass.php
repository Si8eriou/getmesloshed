<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Glass extends Model
{
    protected $table = 'glass';

    protected $primaryKey = 'id';

    public $timestamps = false;

    protected $fillable = [
      'name'
    ];
}
