<?php

namespace App\Http\Controllers;

use App\Actions\ProcessAction;
use App\Http\Requests\CurrencyRequest;

/**
 *
 * @OA\Post(
 *     path="/api/calculator",
 *     summary="Calculates currencies for actual currency",
 *     tags={"Calculation"},
 *     security={{"bearerAuth":{}}},
 *
 *     @OA\RequestBody(
 *         @OA\JsonContent(
 *             allOf={
 *                 @OA\Schema(
 *                     @OA\Property(property="current_currency", type="string", example="eur"),
 *                     @OA\Property(property="value", type="numeric", example=100),
 *                 )
 *             }
 *         )
 *     ),
 *
 *     @OA\Response(
 *         response=200,
 *         description="Ok",
 *
 *         @OA\JsonContent(
 *             @OA\Property(property="usd", type="numeric", example=5.76),
 *             @OA\Property(property="ron", type="numeric", example=25.86),
 *             @OA\Property(property="rub", type="numeric", example=524.93),
 *             @OA\Property(property="uah", type="numeric", example=236.41),
 *             @OA\Property(property="gbp", type="numeric", example=4.37),
 *             @OA\Property(property="eur", type="numeric", example=5.2),
 *             @OA\Property(property="mdl", type="numeric", example=100),
 *         ),
 *     ),
 * ),
 *
 */

class CalcController extends Controller
{
    public function __invoke(CurrencyRequest $request, ProcessAction $action)
    {
        return $action->handle($request->validated());
    }
}
