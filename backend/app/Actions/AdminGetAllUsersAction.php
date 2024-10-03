<?php

namespace App\Actions;

use App\Models\User;

class AdminGetAllUsersAction
{
    /**
     * @return array
     */
    public function handle(): array
    {
        return User::all()->toArray();
    }
}
