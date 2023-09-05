<?php

namespace App\Http\Controllers\Admin;

use App\Actions\AdminSearchUserByIdAction;
use App\Http\Controllers\Controller;
use App\Actions\AdminSearchUserAction;
use App\Http\Requests\AdminSearchUserByIdRequest;
use App\Http\Requests\AdminSearchUserRequest;
use App\Models\Calculation;
use App\Models\User;

class AdminSearchUserByIdController extends Controller
{
    public function __invoke (AdminSearchUserByIdAction $action, AdminSearchUserByIdRequest $request)
    {
        return $action->handle($request->validated());
    }
}
