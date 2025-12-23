import { CharacterCard } from "../components/CharacterCard";
import { useCharacters } from "../services/queries";
import Skeleton from "../components/Skeleton";

const CharactersPage = () => {
  const { data: characters, isLoading: isLoadingCharacters } = useCharacters();

  const s = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <div className="min-h-screen bg-slate-800 p-2">
      <div className="bg-slate-900 h-full text-white flex flex-col gap-8 justify-center items-center rounded">
        <h1 className="font-bold text-5xl">Characters</h1>
        <div className="p-10">
          {isLoadingCharacters ? (
            <div className="grid gap-6 grid-cols-6">
              {s.map((index) => {
                return <Skeleton key={index} />;
              })}
            </div>
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
          )}
        </div>
      </div>
    </div>
  );
};

export default CharactersPage;
