<?php

namespace App\Actions;

use App\Models\Calculation;

class UserRequestsAction
{
    /**
     * Handles
     */
    public function handle($id)
    {
        return Calculation::where('user_id', $id)
            ->select('id',
                'current_currency',
                'usd',
                'ron',
                'rub',
                'uah',
                'gbp',
                'eur',
                'mdl',
                'created_at',
            )
            ->get()
            ->toArray();
    }
}
