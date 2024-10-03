<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

/**
 * @OA\Info(
 *     title="Currencies calculator Api",
 *     version="1.0.0"
 * ),
 * @OA\PathItem(
 *     path="api/"
 * ),
 * @OA\SecurityScheme(
 *     securityScheme="bearerAuth",
 *     type="http",
 *     scheme="bearer"
 * ),
 */

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;
}
