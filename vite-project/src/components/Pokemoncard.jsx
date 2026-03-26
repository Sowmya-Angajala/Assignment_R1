const PokemonCard = ({ pokemon }) => {
  return (
    <div className="card">
  <img className="pokemon-img" src={pokemon.image} alt={pokemon.name} />
  <h2 className="pokemon-name">{pokemon.name}</h2>
  <p className="pokemon-desc">{pokemon.description}</p>
</div>
  );
};
export default PokemonCard;