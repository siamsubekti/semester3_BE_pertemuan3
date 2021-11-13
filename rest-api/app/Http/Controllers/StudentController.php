<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class StudentController extends Controller
{

    # method index - show data animals
    public function index(): JsonResponse
    {
        $data = Student::all();
        return response()->json($data,200);
    }

    public function show($id): JsonResponse
    {
        $data = Student::find($id);

        if ($data === null) {
            $errorMessage = [
                'message' => 'data not found',
            ];

            return response()->json($errorMessage, 404);
        } else {

            return response()->json($data, 200);
        }
    }

    public function create(Request $request) {}
    public function update(Request $request, $id) {
        $nama = $request->nama;
        $nim = $request->nim;
        $jurusan = $request->jurusan;
        $email = $request->email;

        $data = Student::find($id);

        $data->update([
            'nama' => ($nama != null) ? $nama : $data->nama,
            'nim' => ($nim != null) ? $nim : $data->nim,
            'email' => ($email != null) ? $email : $data->email,
            'jurusan' => ($jurusan != null) ? $jurusan : $data->jurusan
        ]);

        if ($data) {
            $data->update([
                'nama' => $nama,
                'nim' => $nim,
                'email' => $email,
                'jurusan' => $jurusan,
            ]);

            return response()->json($data, 200);
        } else {
            $errorMessage = [
                'message' => 'data not found',
            ];

            return response()->json($errorMessage, 404);
        }
    }

    public function destroy($id) {
        $data = Student::find($id);

        if ($data) {
            $data->delete();

            $successMessage = ['message'=> 'deleted successfully'];

            return response()->json($successMessage, 204);
        } else {
            $errorMessage = [
                'message' => 'data not found',
            ];

            return response()->json($errorMessage, 404);
        }
    }
}
