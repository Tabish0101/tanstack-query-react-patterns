import type { Character } from "../types/global.types"

interface CharacterCardProps {
  character: Character
  onClick: () => void
}

const houseColors: Record<string, string> = {
  Gryffindor: "bg-red-500/20 text-red-300 border-red-500/30",
  Slytherin: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  Hufflepuff: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  Ravenclaw: "bg-blue-500/20 text-blue-300 border-blue-500/30",
}

export function CharacterCard({ character, onClick }: CharacterCardProps) {
  return (
    <div
      className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/50 overflow-hidden group"
      onClick={onClick}
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={character.image || "/placeholder.svg?height=400&width=400&query=wizard portrait"}
          alt={character.fullName}
        //   fill
          className="object-cover transition-transform group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-card-foreground line-clamp-1">{character.fullName}</h3>
        {character.nickname && <p className="text-sm text-muted-foreground line-clamp-1">{character.nickname}</p>}
        {character.hogwartsHouse && (
          <span className={`px-2.5 text-sm border-1 py-0.5 rounded-full ${houseColors[character.hogwartsHouse]}` || "bg-secondary"}>
            {character.hogwartsHouse}
          </span>
        )}
      </div>
    </div>
  )
}
