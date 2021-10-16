<?php

# membuat class Animal
class Animal
{
  # property animals
  private $animals = [];

  # method constructor - mengisi data awal
  # parameter: data hewan (array)
  public function __construct($new_animals)
  {
    $this->animals = $new_animals;
  }

  # method index - menampilkan data animals
  public function index()
  {
    foreach ($this->animals as $animal) {
        print_r($animal);
        echo "<br>";
    }
  }

  # method store - menambahkan hewan baru
  # parameter: hewan baru
  public function store($new_animal)
  {
    # gunakan method array_push untuk menambahkan data baru
    return array_push($this->animals, $new_animal);
  }

  # method update - mengupdate hewan
  # parameter: index dan hewan baru
  public function update($index, $new_animal)
  {
    return $this->animals[$index] = $new_animal;
  }

  # method delete - menghapus hewan
  # parameter: index
  public function destroy($index)
  {
    # gunakan method unset atau array_splice untuk menghapus data array
    return array_splice($this->animals, $index, 1);
  }
}

# membuat object
# kirimkan data hewan (array) ke constructor
$animal = new Animal([]);

echo "Index - Menampilkan seluruh hewan <br>";
$animal->index();
echo "<br>";

echo "Store - Menambahkan hewan baru <br>";
$animal->store('burung');
$animal->index();
echo "<br>";

echo "Update - Mengupdate hewan <br>";
$animal->update(0, 'Kucing Anggora');
$animal->index();
echo "<br>";

echo "Destroy - Menghapus hewan <br>";
$animal->destroy(1);
$animal->index();
echo "<br>";