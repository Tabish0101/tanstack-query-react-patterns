import { SpellCard } from "../components/SpellsCard";
import Skeleton from "../components/Skeleton";
import { useSpells } from "../services/queries";

const SpellsPage = () => {
  const { data: spells, isLoading: isLoadingSpells } = useSpells();

  const s = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <div className="min-h-screen bg-slate-800 p-2">
      <div className="bg-slate-900 h-full text-white flex flex-col gap-8 justify-center items-center rounded">
        <h1 className="font-bold text-5xl">Spells</h1>
        <div className="p-10">
          {isLoadingSpells ? (
            <div className="grid gap-6 grid-cols-6">
              {s.map((index) => {
                return <Skeleton key={index} />;
              })}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {spells?.map((spell, index) => (
                <SpellCard key={`${spell.spell}-${index}`} spell={spell} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpellsPage;
