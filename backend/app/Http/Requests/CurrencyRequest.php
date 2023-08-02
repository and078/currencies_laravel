<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class CurrencyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'current_currency' => 'required|string',
            'usd' => 'required|numeric',
            'ron' => 'required|numeric',
            'rub' => 'required|numeric',
            'uah' => 'required|numeric',
            'gbp' => 'required|numeric',
            'eur' => 'required|numeric',
            'mdl' => 'required|numeric',
        ];
    }
}
