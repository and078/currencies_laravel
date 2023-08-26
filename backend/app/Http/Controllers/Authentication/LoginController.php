<?php

namespace App\Http\Controllers\Authentication;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function __invoke (Request $request)
    {
        $fields = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

        $user = User::where('email', $fields['email'])->first();

        if(!$user || !Hash::check($fields['password'], $user->password))
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
