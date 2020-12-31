<?php


namespace App\Repositories\Auth;


use App\Models\User;
use Illuminate\Support\Str;

class AuthRepository
{
    public function login($credentials)
    {
        $user = User::where('email', $credentials->get('email'))
            ->first();

        if ($user && $user->password === $credentials->get('password')) {
            return $user;
        }

        return false;
    }

    //TODO:: create and update need to be fixed. Check if email is already in use before creating.

    public function update($profile)
    {
        try {
            return User::update([
                'name' => $profile->get('name'),
                'email' => $profile->get('email'),
                'password' => $profile->get('password'),
                'remember_token' => Str::random(60)
            ]);
        } catch (\Exception $err) {
            return 'Email is already in use. Please select another';
        }
    }

    public function createUser($profile)
    {
        try {
            return User::create([
                'name' => $profile->get('name'),
                'email' => $profile->get('email'),
                'password' => $profile->get('password'),
                'remember_token' => Str::random(60)
            ]);
        } catch (\Exception $err) {
            return $err;
        }
    }

}
