<?php


namespace App\Repositories\Glass;


use App\Models\Glass;
use Illuminate\Support\Facades\Cache;

class GlassRepository
{
    public function getAllGlassNames()
    {
        return Cache::rememberForever('glasses', function () {
            return Glass::all()->sortBy('name')->pluck('name');
        });
    }
}
