import { useEffect, useState } from "react"
import { CharacterCard } from "../components/CharacterCard"
import type { Character } from "../types/global.types"
import { fetchCharacters } from "../services/api/hattyPotter.api";


const CharactersPage = () => {
  const [characters, setCharacters] = useState<Character []> ();
  const [isLoadingCharacters, setIsLoadingCharacters] = useState<boolean>(false)

  useEffect(()=> {
    populateCharacters()
  }, [])

  async function populateCharacters() {
    setIsLoadingCharacters(true);

    const response = await fetchCharacters();

    setCharacters(response);
    setIsLoadingCharacters(false);
  }
  return (

    <div className="min-h-screen bg-slate-800 p-2">
      <div className="bg-slate-900 h-full text-white flex flex-col gap-8 justify-center items-center rounded">
        <h1 className="font-bold text-5xl">Characters</h1>
        <div className="p-10">
          { 
            isLoadingCharacters ? (
              <p>Loading...</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {characters?.map((character, index) => (
                  <CharacterCard
                    key={`${character.fullName}-${index}`}
                    character={character}
                    onClick={() => console.log(character)}
                  />
                ))}
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default CharactersPage