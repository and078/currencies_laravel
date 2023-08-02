<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CalcController;
use App\Http\Controllers\DBQueryTestController;
use App\Http\Controllers\Authentication\RegisterController;
use App\Http\Controllers\Authentication\LogoutController;
use App\Http\Controllers\Authentication\LoginController;



Route::group(['middleware' =>['auth:sanctum']], function () {
    Route::get('/test')->uses(DBQueryTestController::class);
    Route::post('/calculator')->uses(CalcController::class);
    Route::post('/logout')->uses(LogoutController::class);
});

Route::post('/register')->uses(RegisterController::class);
Route::post('/login')->uses(LoginController::class);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
