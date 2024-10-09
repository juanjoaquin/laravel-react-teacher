<?php

namespace App\Exceptions;

use Exception;

class AlumnoNotFoundException extends Exception
{
    public function render($request)
    {
        return response()->json([
            'error' => 'Alumno not found',
            'request' => 'failed',
            'status' => 404
        ], 404);
    }
}
