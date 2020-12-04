<?php


namespace App\Repositories\Auth;


use App\Models\User;
use Illuminate\Support\Str;

class AuthRepository
{
    public function login($credentials)
    {
        return User::where('email', $credentials->get('email'))
            ->where('password', $credentials->get('password'))
            ->first();
    }

    public function updateOrCreate($profile)
    {
        try {
            return User::updateOrCreate([
                'name' => $profile->get('name'),
                'email' => $profile->get('email'),
                'password' => $profile->get('password'),
                'remember_token' => Str::random(60)
            ]);
        } catch (\Exception $err) {
            return 'Email is already in use. Please select another';
        }
    }

}
