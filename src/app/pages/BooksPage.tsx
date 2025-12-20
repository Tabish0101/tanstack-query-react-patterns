import BookCard from "../components/BookCard"

const Books = () => {
  return (
    <div className="bg-slate-900 h-full text-white flex justify-center items-center rounded">
      <div className="flex gap-4">
        <BookCard/>
        <BookCard/>
      </div>
    </div>
  )
}

export default Books