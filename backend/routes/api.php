<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CalcController;
use App\Http\Controllers\DBQueryTestController;

Route::get('/test')->uses(DBQueryTestController::class);
Route::post('/calculator')->uses(CalcController::class);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
