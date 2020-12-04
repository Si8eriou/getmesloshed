<?php


namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Repositories\Auth\AuthRepository;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request, AuthRepository $authRepo) {
        return $authRepo->login($request);
    }

    public function updateOrCreate(Request $request, AuthRepository $authRepo) {
        return $authRepo->updateOrCreate($request);
    }
}
