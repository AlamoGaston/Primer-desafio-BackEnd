class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._libros = libros;
    this._mascotas = mascotas;
  }
  getFullName() {
    return `${this._nombre} ${this._apellido}`;
  }

  addMascotas(nomMas) {
    this._mascotas.push(nomMas);
  }

  countMascotas() {
    return `Tiene ${this._mascotas.length} mascotas.`;
  }

  addBook(nomLib, autor) {
    this._libros.push({ nombre: nomLib, escritor: autor });
  }

  getBooks() {
    return this._libros.map((libro) => libro.nombre);
  }
}

const nombre = "Gaston";

const apellido = "Alamo";

const mascotas = ["caballo", "gato"];

const libros = [
  {
    nombre: "Berserk",
    escritor: "Kentaro Miura",
  },
  {
    nombre: "El gato negro",
    escritor: "Edgar Allan Poe",
  },
];

const newUsuario = new Usuario(nombre, apellido, libros, mascotas);

console.log(newUsuario.getFullName());
console.log(newUsuario.getBooks());
console.log(newUsuario.countMascotas());
