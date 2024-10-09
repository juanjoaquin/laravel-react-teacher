<?php

namespace App\Http\Controllers;

use App\Http\Requests\AsistenciaRequest;
use App\Models\Asistencia;
use Illuminate\Http\Request;



class AsistenciaController extends Controller
{
    public function index()
    {
        $asistencia = Asistencia::with('alumnos')->get();
        return response()->json($asistencia, 200);
    }

    public function store(AsistenciaRequest $request)
    {
        $asistencia = Asistencia::create($request->all());
        return response()->json([
            "success" => true,
            "data" => $asistencia,
            "status" => 200
        ], 200);
    }

    public function show(string $id)
    {
        $asistencia = Asistencia::with('alumnos')->findOrFail($id);
        return response()->json($asistencia, 200);

    }

    public function update(AsistenciaRequest $request, string $id)
    {
        
        $asistencia = Asistencia::find($id);

        $asistencia->update($request->all());

        return response()->json([
            "success" => true,
            "status" => 200
        ], 200);
    }

    public function delete(string $id)
    {
        Asistencia::find($id)->delete();
        return response()->json([
            "success" => true,
            "message" => "La asistencia fue eliminada correctamente"
        ], 200);
    }
}
