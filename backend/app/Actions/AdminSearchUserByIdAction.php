<?php

namespace App\Actions;

use App\Models\Calculation;

class AdminSearchUserByIdAction
{
    /**
     * @param array $id
     * @return array
     */
    public function handle(array $id): array
    {
        return Calculation::where('user_id', $id)
            ->select('id', 'current_currency', 'usd', 'ron', 'rub', 'uah', 'gbp', 'eur', 'mdl', 'created_at')
            ->get()
            ->toArray();
    }
}
