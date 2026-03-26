const PokemonCard = ({ pokemon }) => {
  return (
    <div >
      <img className ="pokemon-img"src={pokemon.image} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
      <p>{pokemon.description}</p>
    </div>
  );
};
export default PokemonCard;
