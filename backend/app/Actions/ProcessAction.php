<?php

namespace App\Actions;

use App\Components\CurrentCurrFetcher;
use App\Services\Factories\DataBaseSaverFactory;
use Symfony\Component\HttpKernel\Log\Logger;
use Exception;

class ProcessAction
{

    /**
     * Constructor
     */
    public function __construct(
        private readonly CurrentCurrFetcher $fetcher,
        private  readonly DataBaseSaverFactory $dbSaverFactory,
        private readonly Logger $logger,
    ) {
    }

    /**
     * Handles
     */
    public function handle(array $inputData)
    {
        try {
            [
                'current_currency' => $currentCurrency,
            ] = $inputData;

            $inputNumber = floatval($inputData[$currentCurrency]);

            $dataFromApi = $this->fetcher->fetchData();

            $arrayToEncode = [];

            $dataFromApi['mdl'] = 1.0;

            foreach ($dataFromApi as $key => $value) {
                $arrayToEncode[$key] = round(($inputNumber * floatval($dataFromApi[$currentCurrency])) / floatval($value), 2);
            }

            $dbSaver = $this->dbSaverFactory->create($arrayToEncode, $currentCurrency);
            $dbSaver->saveToDb();

            return json_encode($arrayToEncode);
        } catch (Exception $exception) {
            $this->logger->log('error', $exception);
        }
    }
}
