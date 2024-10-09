<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Asistencia extends Model
{
    protected $guarded = [];

    public function alumnos(): BelongsTo
    {
        return $this->belongsTo(Alumnos::class, 'alumno_id');
    }
}