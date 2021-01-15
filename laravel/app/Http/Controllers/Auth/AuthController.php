<?php


namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Repositories\Auth\AuthRepository;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request, AuthRepository $authRepo)
    {
        return response()->json($authRepo->login($request));
    }

    public function update(Request $request, AuthRepository $authRepository)
    {
        return response()->json($authRepository->update($request->all()));
    }

    public function create(Request $request, AuthRepository $authRepository)
    {
        return response()->json($authRepository->createUser($request->all()));
    }
}
