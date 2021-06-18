<?php


namespace App\Profile\Http;


use App\Http\Controllers\Controller;
use App\Profile\Exceptions\ProfileDrinkException;
use App\Profile\Libraries\ProfileDrinkLibrary;
use Illuminate\Http\Request;

class ProfileDrinkController extends Controller
{
    /**
     * @var ProfileDrinkLibrary
     */
    private $profileDrinkLibrary;


    public function __construct(Request $request, ProfileDrinkLibrary $profileDrinkLibrary)
    {
        parent::__construct($request);
        $this->profileDrinkLibrary = $profileDrinkLibrary;
    }


    public function addProfileDrink()
    {
        try {
            dd($this->request->getUser());

            $response = $this->profileDrinkLibrary->addProfileDrink();

        } catch (ProfileDrinkException $e) {
            dd(__FILE__ . ';' . __LINE__, $e->getMessage());
        }
    }

    public function removeProfileDrink()
    {
        try {
            dd($this->request->getUser());
        } catch (ProfileDrinkException $e) {
            dd(__FILE__ . ';' . __LINE__, $e->getMessage());
        }
    }
}
