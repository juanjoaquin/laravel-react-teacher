<?php

namespace App\Http\Controllers;

use App\Models\Alumnos;
use App\Http\Requests\AlumnoRequest;

use App\Exceptions\AlumnoNotFoundException;
use App\Exceptions\AlumnoInternalErrorException;




class AlumnosController extends Controller
    //ESTO ES BÁSICAMENTE EL CRUD DE LOS ALUMNOS QUE MANEJA EL PROFESOR
{

    public function index()
    {
        // $alumnos = Alumnos::all(); -> Esta es la principal
        $alumnos = Alumnos::with(['grade', 'asistencia'])->get();
        return response()->json($alumnos, 200);
        
    }

    public function store(AlumnoRequest $request)
    {   
        
            $alumnos = Alumnos::create($request-> all());
            return response()->json([
                "succes" => true,
                "data" => $alumnos
            ], 201);

    }


    public function show(string $id)
    {
        try{

            // $alumnos = Alumnos::findOrFail($id); -> Está es la principal
            $alumnos = Alumnos::with(['grade', 'asistencia'])->findOrFail($id);    
            return response()->json($alumnos, 200);
        }
        
        catch (\Exception $e) {
        //    return response()->json(['error' => 'Alumno no encontrado']);
        throw new AlumnoNotFoundException();
        }
    }

    public function update(AlumnoRequest $request, string $id)
    {
        try {
            $alumnos = Alumnos::find($id);

            $alumnos-> name = $request-> name;
            $alumnos-> surname = $request-> surname;
            $alumnos-> age = $request-> age;
            $alumnos-> email = $request-> email;
            $alumnos-> nationality = $request-> nationality;
    
            $alumnos->save();
    
            return response()->json([
                "success" => true
            ], 200);
        }

        catch(\Exception $e) {
            throw new AlumnoInternalErrorException();
        }

    }

    public function destroy(string $id)
    {

        try {
            Alumnos::find($id)->delete();
            return response()->json([
                "success" => true,
                "message" => "Alumno fue borrado correctamente"
            ], 200);
        }
        catch(\Exception $e) 
        {
            throw new AlumnoNotFoundException();
        }
    }


}