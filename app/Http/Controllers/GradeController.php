<?php

namespace App\Http\Controllers;

use App\Exceptions\GradeInternalErrorException;
use App\Exceptions\GradeNotFoundException;
use App\Http\Requests\GradeRequest;
use App\Models\Grades;
use Illuminate\Http\Request;




class GradeController extends Controller
{

    public function index()
    {
        $grades = Grades::with('alumnos')->get();
        return response()->json($grades, 200);
    }

    public function store(GradeRequest $request)
    {

        $grades = Grades::create($request->all());
        return response()->json([
            "succes" => true,
            "data" => $grades
        ], 201);
    }


    public function show(string $id)
    {

        //lleva try catch
        try {
            $grade = Grades::with('alumnos')->findOrFail($id);
            return response()->json($grade, 200);
        } catch (\Exception $e) {
            throw new GradeNotFoundException();
        }
    }

    public function update(Request $request, string $id)
    {

        try {
            $grade = Grades::find($id);
            $grade->update($request->all());
            // $grade->grade = $request -> grade;
            // $grade->subject = $request-> subject;
    
            // $grade->save();
    
            return response()->json([
                "success" => true,
                "data" => $grade
            ], 200);
        }

        catch (\Exception $e) {
            throw new GradeInternalErrorException();
        }
        

    }

    public function destroy(string $id)
    {
        Grades::find($id)->delete();
        return response()->json([
            "success" => true,
            "message" => "La nota fue borrada",
        ], 200);
    }
}