<?php

namespace App\Actions\Authentication;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class LoginAction
{
    public function handle(array $request)
    {
        $user = User::where('email', $request['email'])->first();

        if(!$user || !Hash::check($request['password'], $user->password))
        {
            return response([
                'message' => 'Bad credentials',
            ], 401);
        }

        $token = $user->createToken('myAppToken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token,
        ];

        return response($response, 201);
    }
}

