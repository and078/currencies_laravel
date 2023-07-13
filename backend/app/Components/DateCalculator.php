<?php

namespace App\Components;
/**
 *
 */
class DateCalculator
{
    private const SIX_DAYS = 6;
    private const ELEVEN_PM_1970_IN_MS = 82800000;
    private const MILLISECONDS_IN_DAY = 86400000;

    private int $msNow;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->msNow = (int)(floor(microtime(true) * 1000));
    }

    /**
     * return today 23:00 in milliseconds since 1970
     */
    public function getToday(): int
    {
        return (int)(floor(($this->msNow - self::ELEVEN_PM_1970_IN_MS) / self::MILLISECONDS_IN_DAY)) * self::MILLISECONDS_IN_DAY + self::ELEVEN_PM_1970_IN_MS;
    }

    /**
     * return week ago 23:00 in milliseconds since 1970
     */
    public function getWeekAgoTime(): int
    {
        return $this->getToday() - (self::MILLISECONDS_IN_DAY * self::SIX_DAYS);
    }
}
