
const BookCard = () => {
  return (
    <div
      className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/50 overflow-hidden group bg-slate-700"
    //   onClick={onClick}
    >
      <div className="relative aspect-[2/3] overflow-hidden bg-muted">
        <img
        //   src={book.cover || "/placeholder.svg"}
        //   alt={book.title}
        //   fill
          className="object-cover transition-transform group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-card-foreground line-clamp-2 text-balance"> Title </h3>
          {/* <Badge variant="secondary" className="shrink-0">
            #{book.number}
          </Badge> */}
        </div>
        <p className="text-sm text-muted-foreground">Release date</p>
      </div>
    </div>
  )
}

export default BookCard