const nombres = [
  "jesus",
  "diana",
  "pedro",
  "juan",
  "anhibal",
  "dante",
  "jorge",
];

nombres.map((nombre, indice) => {
  console.log(`${indice + 1}. ${nombre.toUpperCase()}`);
});

const nuevoArreglo = nombres.filter((nombre) => {
  return nombre.length > 4;
});

const buscarNombre = (owner) =>
  nombres.find((nombre) => {
    return nombre === owner;
  });

console.log(buscarNombre("jesus"));
