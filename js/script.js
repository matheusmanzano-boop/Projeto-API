const urlPokemon = "https://pokeapi.co/api/v2/pokemon?limit=151";
const listaPokemon = document.getElementById("lista-pokemon");




async function CarregarPokemon() {
    try {
        const resposta = await fetch(urlPokemon);
        const dados = await resposta.json();

        for(let pokemon of dados.results) {

            const res = await fetch(pokemon.url);
            const pokeData = await res.json();

            const pokemonDiv = document.createElement("div");
            pokemonDiv.classList.add("col-md-3", "mb-4");

          
           pokemonDiv.innerHTML = `
                <div class="card shadow h-100 text-center">
                    <img src="${pokeData.sprites.front_default}" class="card-img-top p-3 bg-light" alt="${pokeData.name}">
                    <div class="card-body">
                        <h5 class="card-title text-capitalize">${pokeData.name}</h5>
                        <p class="card-text">Tipo: ${pokeData.types.map(t => t.type.name).join(", ")}</p>
                    </div>
                </div>
            `;
            listaPokemon.appendChild(pokemonDiv);
        }
        
        
    } catch (error) {
        console.error("Erro ao carregar os pokemons:", error);
    }
}
CarregarPokemon();
