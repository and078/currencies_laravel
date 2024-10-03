<?php

namespace App\Enums;

/**
 *
 */
class FetchDataClientConfigEnum
{
    public const BASE_URL =  'https://point.md/curs/methods/money/newrates/';
    public const TIMEOUT_IN_SECS = 2.0;
    public const VERIFY_STATUS_BOOL = false;


    /**
     * Retrieves enum values
     *
     * @return array
     */
    public static function getValues(): array
    {
        return [
            self::BASE_URL,
            self::TIMEOUT_IN_SECS,
            self::VERIFY_STATUS_BOOL,
        ];
    }

    /**
     * Retrieves mapped enum values
     *
     * @return array
     */
    public static function getDictionary(): array
    {
        return [
            'baseUrl' => self::BASE_URL,
            'timeout' => self::TIMEOUT_IN_SECS,
            'verifyStatus' => self::VERIFY_STATUS_BOOL,
        ];
    }
}
