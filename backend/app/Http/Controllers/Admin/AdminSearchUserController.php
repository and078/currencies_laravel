<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Actions\AdminSearchUserAction;
use App\Http\Requests\AdminSearchUserRequest;
use App\Models\Calculation;
use App\Models\User;

class AdminSearchUserController extends Controller
{
    public function __invoke (AdminSearchUserAction $action, AdminSearchUserRequest $request)
    {
        return $action->handle($request->validated());
    }
}
