<?php

namespace App\Components;

use App\Services\Factories\FetchDataClientFactory;
use Exception;
use Symfony\Component\HttpKernel\Log\Logger;

class CurrentCurrFetcher
{
    private const TODAY_OF_PREVIOUS_SEVEN_DAYS = 6;
    private const CURRENCY_VALUE_FROM_FETCHED_ARRAY = 1;

    public function __construct(
        private readonly FetchDataClientFactory $fetcherFactory,
        private readonly DateCalculator $dateCalculator,
    ) {
    }

    /**
     * Fetches data from Api
     *
     * @throws Exception
     */
    public function fetchData(): array
    {
        $start = $this->dateCalculator->getWeekAgoTime();
        $stop = $this->dateCalculator->getToday();

        $fetcher = $this->fetcherFactory->create();

        $result = $fetcher->getClient()->request('GET', "?start={$start}&stop={$stop}");
        $dataFromApi = json_decode($result->getBody()->getContents(), true);

        $dataFromApiReducedArray = [];

        foreach($dataFromApi as $key => $value) {
            // Get rid of [1], try current(), end()
            $dataFromApiReducedArray[$key] = $value[self::TODAY_OF_PREVIOUS_SEVEN_DAYS][self::CURRENCY_VALUE_FROM_FETCHED_ARRAY];
//            $temp = end($value);
//            $dataFromApiReducedArray[$key] = end($temp);
//            unset($temp);
        }

        unset($dataFromApi);

        return $dataFromApiReducedArray;
    }
}
