<?php

namespace App\Http\Controllers\Authentication;

use App\Http\Controllers\Controller;
use App\Models\User;
// use Illuminate\Http\Request;
use App\Http\Requests\RegisterRequest;
use App\Actions\Authentication\RegisterAction;

/**
 * @OA\Post(
 *     path="/api/register",
 *     summary="User register",
 *     tags={"Register"},
 *
 *     @OA\RequestBody(
 *         @OA\JsonContent(
 *             allOf={
 *                 @OA\Schema(
 *                     @OA\Property(property="name", type="string", example="name"),
 *                     @OA\Property(property="email", type="string", example="email@email.com"),
 *                     @OA\Property(property="password", type="string", example="password"),
 *                     @OA\Property(property="password_confirmation", type="string", example="password"),
 *                 )
 *             }
 *         ),
 *     ),
 *
 *     @OA\Response(
 *         response=200,
 *         description="Ok",
 *
 *         @OA\JsonContent(
 *             @OA\Property(property="user", type="object",
 *                 @OA\Property(property="name", type="string", example="name"),
 *                 @OA\Property(property="email", type="string", example="email@email"),
 *                 @OA\Property(property="updated_at", type="string", example="023-09-13T14:02:36.000000Z"),
 *                 @OA\Property(property="created_at", type="string", example="2023-09-13T14:02:36.000000Z"),
 *                 @OA\Property(property="id", type="integer", example=1),
 *             ),
 *             @OA\Property(property="token", type="string", example="Bearer_token"),
 *         )
 *     ),
 * ),
 */

class RegisterController extends Controller
{
    public function __invoke (RegisterRequest $request, RegisterAction $action)
    {
        // // move to a separate form request
        // $fields = $request->validate([
        //     'name' => 'required|string',
        //     'email' => 'required|string|unique:users,email',
        //     'password' => 'required|string|confirmed'
        // ]);


        // // move to factory
        // $user = User::create([
        //     'name' => $fields['name'],
        //     'email' => $fields['email'],
        //     'password' => bcrypt($fields['password']),
        // ]);

        // $token = $user->createToken('myAppToken')->plainTextToken;

        // $response = [
        //     'user' => $user,
        //     'token' => $token,
        // ];

        // return response($response, 200);
        return $action->handle($request->validated());
    }
}
