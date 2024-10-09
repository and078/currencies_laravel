<?php

namespace App\Actions\Authentication;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class RegisterAction
{
    public function handle (array $request)
    {
        // move to factory
        $user = User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => bcrypt($request['password']),
        ]);

        $token = $user->createToken('myAppToken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token,
        ];

        return response($response, 200);
    }
}
