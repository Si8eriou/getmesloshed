<?php


namespace App\Profile\Libraries;


use App\Profile\Exceptions\ProfileDrinkException;

class ProfileDrinkLibrary
{
    public function addProfileDrink($profile_id, $drink_id)
    {
        try {
            dd($this->request);
        } catch (ProfileDrinkException $e) {
            dd(__FILE__ . ';' . __LINE__, $e->getMessage());
        }
    }

    public function removeProfileDrink($profile_id, $drink_id)
    {
        try {
            dd($this->request);
        } catch (ProfileDrinkException $e) {
            dd(__FILE__ . ';' . __LINE__, $e->getMessage());
        }
    }
}
