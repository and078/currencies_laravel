<?php

namespace App\Components;

use App\Components\DateCalculator;
use App\Components\FetchDataClient;

class CurrentCurrFetcher
{
    public static function fetchData()
    {
        $dateCalculator = new DateCalculator();
        $start = $dateCalculator->getWeekAgoTime();
        $stop = $dateCalculator->getToday();

        $fetch = new FetchDataClient();
        $result = $fetch->client->request('GET', "?start={$start}&stop={$stop}");
        $dataFromApi = json_decode($result->getBody()->getContents(), true);

        $dataFromapiReduced = array();
        foreach($dataFromApi as $key => $value) {
            $dataFromapiReduced[$key] = $value[6][1];
        }

        unset($dataFromApi);

        return $dataFromapiReduced;
    }
}
