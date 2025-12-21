import { Sparkles } from 'lucide-react';
import type { Spell } from "../types/global.types"

interface SpellCardProps {
  spell: Spell
}

export function SpellCard({ spell }: SpellCardProps) {
  return (
    <div className="transition-all rounded border-1 border-slate-600 duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/50 group">
      <div className="p-5 space-y-3">
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-primary/10 p-2 shrink-0 transition-transform group-hover:scale-110">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg text-card-foreground mb-1 line-clamp-1">{spell.spell}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{spell.use}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
