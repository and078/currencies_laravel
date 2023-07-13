<?php

namespace App\Services\Factories;

use App\Components\DataBaseSaver;

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
