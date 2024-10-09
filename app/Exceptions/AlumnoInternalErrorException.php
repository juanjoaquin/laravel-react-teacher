<?php

namespace App\Exceptions;

use Exception;

class AlumnoInternalErrorException extends Exception
{
    public function render($request)
    {
        return response()->json(['error' => 'Error internal server'], 500);
    }
}
