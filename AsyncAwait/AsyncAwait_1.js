const URL = "https://pokeapi.co/api/v2/";

async function obtenerPokemon() {
  const respuesta = await fetch(`${URL}pokemon/1`);
  const data = respuesta.json();

  return data;
}

obtenerPokemon()
  .then((pokemon) => {
    console.log(pokemon);
  })
  .catch(() => {
    console.error("La peticion tuvo una falla");
  });
