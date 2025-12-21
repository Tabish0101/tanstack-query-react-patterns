
import type { House } from "../types/global.types"

interface HouseCardProps {
  house: House
  onClick: () => void
}

const houseStyles: Record<string, { bg: string; text: string; border: string }> = {
  Gryffindor: { bg: "bg-red-500/10", text: "text-red-300", border: "border-red-500/50" },
  Slytherin: { bg: "bg-emerald-500/10", text: "text-emerald-300", border: "border-emerald-500/50" },
  Hufflepuff: { bg: "bg-amber-500/10", text: "text-amber-300", border: "border-amber-500/50" },
  Ravenclaw: { bg: "bg-blue-500/10", text: "text-blue-300", border: "border-blue-500/50" },
}

export function HouseCard({ house, onClick }: HouseCardProps) {
  const style = houseStyles[house.house] || { bg: "bg-card", text: "text-foreground", border: "border-border" }

  return (
    <div
      className={`cursor-pointer rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg ${style.border} hover:border-opacity-100 overflow-hidden group ${style.bg}`}
      onClick={onClick}
    >
      <div className="p-6 space-y-4 text-center">
        <div className="text-6xl mb-4">{house.emoji}</div>
        <h3 className={`text-2xl font-bold ${style.text}`}>{house.house}</h3>
        <p className="text-sm text-muted-foreground">Founded by {house.founder}</p>
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {house.colors.map((color, index) => (
            <div key={index} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs">
              {color}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
