<?php

namespace App\Exceptions;

use Exception;

class GradeNotFoundException extends Exception
{
    public function render($request)
    {
        return response()->json([
            'error' => "The grade has not been posted",
            'request' => 'failed',
            'status' => 404
        ], 404);
    }
}
