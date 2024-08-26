<?php

use App\Http\Controllers\Admin\AdminSearchUserByIdController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RequestsController;
use App\Http\Controllers\CalcController;
use App\Http\Controllers\DBQueryTestController;
use App\Http\Controllers\Authentication\RegisterController;
use App\Http\Controllers\Authentication\LogoutController;
use App\Http\Controllers\Authentication\LoginController;
use App\Http\Controllers\Admin\AdminSearchUserController;
use App\Http\Controllers\Admin\AdminGetAllUsersController;


Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::group(['middleware' => 'admin'], function () {
        Route::get('/admin/all_users')->uses(AdminGetAllUsersController::class);
        Route::post('/admin/search_user')->uses(AdminSearchUserController::class);
        Route::post('/admin/search_user_by_id')->uses(AdminSearchUserByIdController::class);
    });
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/calculator')->uses(CalcController::class);
    Route::post('/logout')->uses(LogoutController::class);
    Route::post('/requests')->uses(RequestsController::class);
});

Route::post('/register')->uses(RegisterController::class);
Route::post('/login')->uses(LoginController::class);
Route::get('/test')->uses(DBQueryTestController::class);


