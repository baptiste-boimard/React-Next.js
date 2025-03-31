async function getPokemon() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    if (!res.ok) throw new Error('Erreur API Pokémon')
    return res.json()
  }
  
  export default async function PokemonPage() {
    const data = await getPokemon()
  
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Liste de Pokémon</h1>
        <ul className="list-disc pl-5">
          {data.results.map((poke: any, i: number) => (
            <li key={i}>{poke.name}</li>
          ))}
        </ul>
      </div>
    )
  }
  