<?php


namespace App\Repositories\Auth;


use App\Models\User;
use Illuminate\Support\Str;

class AuthRepository
{
    public function login($credentials)
    {
        $user = $this->getUserFromEmail($credentials->get('email'));

        if ($user && $user->password === $credentials->get('password')) {
            return $user;
        }

        return false;
    }

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
            if (!$this->isEmailAlreadyInUse($profile['email'])) {
                $user = User::create([
                    'name' => $profile['name'],
                    'email' => $profile['email'],
                    'password' => $profile['password'],
                    'remember_token' => Str::random(60)
                ]);

                return [
                    'success' => true,
                    'message' => 'Created user successfully',
                    'user' => $user
                ];
            } else {
                return [
                    'success' => false,
                    'message' => 'Email already in use.'
                ];
            }
        } catch (\Exception $err) {
            return [
                'success' => false,
                'message' => 'exception throw',
                'exception' => $err
            ];
        }
    }

    private function getUserFromEmail($email)
    {
        return User::where('email', $email)
            ->first();
    }

    private function isEmailAlreadyInUse($email)
    {
        return (!!$this->getUserFromEmail($email));
    }

}
