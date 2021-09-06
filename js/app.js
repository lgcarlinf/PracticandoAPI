let boton = document.querySelector("#boton");
let contenido = document.querySelector("#contenido");
boton.addEventListener("click", getPokemon);

function getPokemon() {
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then((res) => res.json())
    .then((data) => {
      let randomPoke = random(0, 20);
      let namePokemon = data.results[randomPoke].name;

      fetch(data.results[randomPoke].url)
        .then((resp) => resp.json())
        .then((data) => {
          let imgPokemon = data.sprites.other.dream_world.front_default;
          contenido.innerHTML = `<h1>${namePokemon.toUpperCase()}</h1>  <img src="${imgPokemon}" width="250" height="250" class="m-3">`;
        });
    });
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
