<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Alumnos extends Model
{
    protected $guarded = [];

    public function grade(): HasOne
    {
        return $this->hasOne(Grades::class, 'alumno_id');
    }

    public function asistencia(): HasMany
    {
        return $this->hasMany(Asistencia::class, 'alumno_id');
    }
}