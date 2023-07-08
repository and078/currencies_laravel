<?php

namespace App\Actions;

use App\Components\CurrentCurrFetcher;

class ProcessAction
{
    public function handle($inputData)
    {
        $currentCurrency = $inputData['current_currency'];

        $inputNumber = floatval($inputData[$currentCurrency]);

        $dataFromApi = CurrentCurrFetcher::fetchData();

        $arrayToEncode = array();

        $dataFromApi['mdl'] = 1.0;

        foreach($dataFromApi as $key => $value) {
            $arrayToEncode[$key] = ($inputNumber * floatval($dataFromApi[$currentCurrency])) / floatval($value);
        }

        return json_encode($arrayToEncode);
    }
}
