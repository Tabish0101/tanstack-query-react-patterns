import { HouseCard } from "../components/HouseCard";
import Skeleton from "../components/Skeleton";
import { useHouses } from "../services/queries";

const HousesPage = () => {
  const { data: houses, isLoading: isLoadinghouses } = useHouses();

  const s = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <div className="min-h-screen bg-slate-800 p-2">
      <div className="bg-slate-900 h-full text-white flex flex-col gap-8 justify-center items-center rounded">
        <h1 className="font-bold text-5xl">Houses</h1>
        <div className="p-10">
          {isLoadinghouses ? (
            <div className="grid gap-6 grid-cols-6">
              {s.map((index) => {
                return <Skeleton key={index} />;
              })}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {houses?.map((house, index) => (
                <HouseCard
                  key={`${house.house}-${index}`}
                  house={house}
                  onClick={() => console.log(house)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HousesPage;
