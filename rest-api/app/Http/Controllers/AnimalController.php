<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    # property animals
    private array $animals = array(
            array('name' => 'kucing', 'gender' => 'female'),
            array('name' => 'sapi', 'gender' => 'male'),
    );

    # method index - show data animals
    public function index(): array
    {
        return $this->animals;
    }

    # method index - add data animals
    public function store(Request $new_animal)
    {
        array_push($this->animals, $new_animal);
    }

    public function update($index, Request $new_animal): Request
    {
        return $this->animals[$index] = $new_animal;
    }

    public function destroy($index): array
    {
        return array_splice($this->animals, $index, 1);
    }
}
