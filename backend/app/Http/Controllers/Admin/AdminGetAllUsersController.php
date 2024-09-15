<?php

namespace App\Http\Controllers\Admin;

use App\Actions\AdminGetAllUsersAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\AdminGetAllUsersRequest;

class AdminGetAllUsersController extends Controller
{
    public function __invoke(AdminGetAllUsersAction $action)
    {
        return $action->handle();
    }
}
