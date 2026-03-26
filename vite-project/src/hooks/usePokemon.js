import { useState } from "react";
import { pokemons } from "../data/pokemon";

const usePokemon = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < pokemons.length - 1) {
      setIndex(index + 1);
    }
  };
  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  const currentPokemon = (i) => {
    setIndex(i);
  };
  return {
    pokemon: pokemons[index],
    index,
    total: pokemons.length,
    next,
    prev,
    currentPokemon,
  };
};

export default usePokemon;
