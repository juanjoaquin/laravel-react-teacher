<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AlumnosController;
use App\Http\Controllers\AsistenciaController;
use App\Http\Controllers\GradeController;



Route::get('/alumnos', [AlumnosController::class, 'index']);
Route::post('/alumno', [AlumnosController::class, 'store']);
Route::get('/alumno/{id}', [AlumnosController::class, 'show']);
Route::put('/alumno/{id}', [AlumnosController::class, 'update']);
Route::delete ('/alumno/{id}', [AlumnosController::class, 'destroy']);

Route::get('/grades', [GradeController::class, 'index']);
Route::post('/grade', [GradeController::class, 'store']);
Route::get('/grade/{id}', [GradeController::class, 'show']);
Route::put('/grade/{id}', [GradeController::class, 'update']);
Route::delete('/grade/{id}', [GradeController::class, 'destroy']);

Route::get('/asistencias', [AsistenciaController::class, 'index']);
Route::post('/asistencia', [AsistenciaController::class, 'store']);
Route::get('/asistencia/{id}', [AsistenciaController::class, 'show']);
Route::put('/asistencia/{id}', [AsistenciaController::class, 'update']);
Route::delete('/asistencia/{id}', [AsistenciaController::class, 'delete']);





