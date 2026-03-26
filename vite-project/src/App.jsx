import "./App.css";
import usePokemon from "./hooks/usePokemon";
import { pokemons } from "./data/pokemon";
import PokemonCard from "./components/Pokemoncard";

function App() {
  const { pokemon, index, total, next, prev, currentPokemon } = usePokemon();
  return (
    <>
      <div>
        <h1 className="title">Pokemon Viewer</h1>
        <select
          className="dropdown"
          value={index}
          onChange={(e) => currentPokemon(Number(e.target.value))}
        >
          {pokemons.map((p, i) => (
            <option key={i} value={i}>
              {p.name}
            </option>
          ))}
        </select>
        <PokemonCard pokemon={pokemon} />
        <div className="pagination">
          <button onClick={prev} disabled={index === 0}>
            Prev
          </button>
          <span className="page-info">
            {index + 1} / {total}
          </span>
          <button onClick={next} disabled={index === total - 1}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
