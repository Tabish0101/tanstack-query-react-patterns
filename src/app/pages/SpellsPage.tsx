import axios from "axios";
import { useEffect, useState } from "react";
import { SpellCard } from "../components/SpellsCard";
import type { Spell } from "../types/global.types";

const SpellsPage = () => {
  const [spells, setspells] = useState<Spell []> ();
  const [isLoadingspells, setIsLoadingspells] = useState<boolean>(false)

  useEffect(()=> {
    populatespells()
  }, [])

  async function populatespells() {
    setIsLoadingspells(true);
    const response = await axios.get('https://potterapi-fedeperin.vercel.app/en/spells');
    console.log(response);
    setspells(response.data);
    setIsLoadingspells(false);
  }
  return (

    <div className="min-h-screen bg-slate-800 p-2">
      <div className="bg-slate-900 h-full text-white flex flex-col gap-8 justify-center items-center rounded">
      <h1 className="font-bold text-5xl">Spells</h1>
      <div className="p-10">
        { 
          isLoadingspells ? (
            <p>Loading...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {spells?.map((spell, index) => (
                <SpellCard
                  key={`${spell.spell}-${index}`}
                  spell={spell}
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

export default SpellsPage