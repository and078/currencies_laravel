<?php

namespace App\Http\Controllers\Authentication;

use App\Http\Controllers\Controller;
// use App\Models\User;
use App\Http\Requests\LoginRequest;
use App\Actions\Authentication\LoginAction;
// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Hash;

/**
 * @OA\Post(
 *     path="/api/login",
 *     summary="User login",
 *     tags={"Login"},
 *
 *     @OA\RequestBody(
 *         @OA\JsonContent(
 *             allOf={
 *                 @OA\Schema(
 *                     @OA\Property(property="email", type="string", example="email@email"),
 *                     @OA\Property(property="password", type="string", example="password"),
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
 *                 @OA\Property(property="id", type="integer", example=1),
 *                 @OA\Property(property="name", type="string", example="name"),
 *                 @OA\Property(property="email", type="string", example="email@email"),
 *                 @OA\Property(property="role", type="string", example="role"),
 *                 @OA\Property(property="email_verified_at", type="string", example=null),
 *                 @OA\Property(property="created_at", type="string", example="2023-09-13T14:02:36.000000Z"),
 *                 @OA\Property(property="updated_at", type="string", example="023-09-13T14:02:36.000000Z"),
 *             ),
 *             @OA\Property(property="token", type="string", example="Bearer_token"),
 *         )
 *     ),
 * ),
 */

class LoginController extends Controller
{
    public function __invoke (LoginRequest $request, LoginAction $action)
    {
        return $action->handle($request->validated());
    }
}
