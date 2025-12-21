import axios from "axios";
import { useEffect, useState } from "react";
import type { House } from "../types/global.types";
import { HouseCard } from "../components/HouseCard";

const HousesPage = () => {
  const [houses, sethouses] = useState<House []> ();
  const [isLoadinghouses, setIsLoadinghouses] = useState<boolean>(false)

  useEffect(()=> {
    populatehouses()
  }, [])

  async function populatehouses() {
    setIsLoadinghouses(true);
    const response = await axios.get('https://potterapi-fedeperin.vercel.app/en/houses');
    console.log(response);
    sethouses(response.data);
    setIsLoadinghouses(false);
  }
  return (

    <div className="min-h-screen bg-slate-800 p-2">
      <div className="bg-slate-900 h-full text-white flex flex-col gap-8 justify-center items-center rounded">
      <h1 className="font-bold text-5xl">Houses</h1>
      <div className="p-10">
        { 
          isLoadinghouses ? (
            <p>Loading...</p>
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
          )
        }
      </div>
      

      </div>

    </div>
  )
}

export default HousesPage