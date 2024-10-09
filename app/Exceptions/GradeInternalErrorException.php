<?php

namespace App\Exceptions;

use Exception;

class GradeInternalErrorException extends Exception
{
    public function render($request)
    {
        return response()->json([
            'error' => 'Internal error server',
            'status' => 500
        ], 500);
    }
}
