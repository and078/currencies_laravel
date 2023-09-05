<?php

namespace App\Services;

use App\Services\Factories\FetchDataClientFactory;
use Exception;
use Symfony\Component\HttpKernel\Log\Logger;

class CurrencyFetcher
{
    private const CURRENCY_VALUE_FROM_FETCHED_ARRAY = 1;

    private int $daysAgo;

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
    public function fetchData(int $daysAgo): array
    {
        $start = $this->dateCalculator->getDaysAgoTime();

        $stop = $this->dateCalculator->getToday();

        $fetcher = $this->fetcherFactory->create();

        $result = $fetcher->getClient()->request('GET', "?start={$start}&stop={$stop}");

        $dataFromApi = json_decode($result->getBody()->getContents(), true);

        $dataFromApiReducedArray = [];

        foreach($dataFromApi as $key => $value) {
            $dataFromApiReducedArray[$key] = $value[$daysAgo][self::CURRENCY_VALUE_FROM_FETCHED_ARRAY];
        }

        unset($dataFromApi);

        return $dataFromApiReducedArray;
    }
}
