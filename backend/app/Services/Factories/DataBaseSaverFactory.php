<?php

namespace App\Services\Factories;

use App\Services\DataBaseSaver;

class DataBaseSaverFactory
{
    /**
     * creates saver to DB
     */
    public function create(
        array $arr,
        string $curr,
    ): DataBaseSaver
    {
        return new DataBaseSaver($arr, $curr);
    }
}
