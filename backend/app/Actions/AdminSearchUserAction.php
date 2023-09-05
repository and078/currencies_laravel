<?php

namespace App\Actions;

use App\Models\User;

class AdminSearchUserAction
{
    /**
     * @param array $searchString
     * @return array
     */
    public function handle(array $searchString)
    {
        return User::where('name', 'like', "%{$searchString['user_name']}%")
            ->select('id', 'name', 'email')
            ->get()
            ->toArray();
    }
}
