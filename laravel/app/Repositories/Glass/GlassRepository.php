<?php


namespace App\Repositories\Glass;


use App\Models\Glass;

class GlassRepository
{
    public function getAllGlassNames()
    {
        return Glass::all()->sortBy('name')->pluck('name');
    }
}
