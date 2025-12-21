import { useEffect, useState } from "react"
import BookCard from "../components/BookCard"
import type { BookType } from "../types/global.types";
import { fetchBooks } from "../services/api/hattyPotter.api";


const BooksPage = () => {

  const [books, setBooks] = useState<BookType[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    populateBooks();
  }, []);

  async function populateBooks() {
    setIsLoading(true);

    const response = await fetchBooks()

    setBooks(response);
    setIsLoading(false);
  }

  return (
    <div className="min-h-screen bg-slate-800 p-2">
      <div className="bg-slate-900 h-full text-white flex flex-col gap-8 justify-center items-center rounded">
        <h1 className="font-bold text-5xl">Books</h1>
        <div className=" flex p-10">
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            <div className="grid gap-6 grid-cols-6">
              {
                books?.map((book) => (
                  <BookCard
                    key={book.index} 
                    book={book}
                    onClick={() => console.log('Book clicked:', book.title)}
                  />
                ))
              }
            </div>
          )}
        </div>
      </div>
    </div>
    
  )
}

export default BooksPage