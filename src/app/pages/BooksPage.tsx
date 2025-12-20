import { useEffect, useState } from "react"
import axios from "axios";

import BookCard from "../components/BookCard"

import type { BookType } from "../types/global.types";


const BooksPage = () => {

  const [books, setBooks] = useState<BookType[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getBooks()
  }, []);

  async function getBooks() {
    setIsLoading(true)
    const response = await axios.get('https://potterapi-fedeperin.vercel.app/en/books')
    console.log(response)
    setBooks(response.data)
    setIsLoading(false);
  }

  return (
    <div className="h-screen bg-slate-800 p-2">
      <div className="bg-slate-900 h-full text-white flex flex-col gap-8 justify-center items-center rounded">
        <h1 className="font-bold text-5xl">Books</h1>
        <div className="flex gap-4">
          {/* <BookCard book={}/>
          <BookCard/> */}
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            (books|| []).map((book) => (
              <BookCard
                key={book.index} // unique key
                book={book}
                onClick={() => console.log('Book clicked:', book.title)}
              />
            ))
          )}
        </div>
      </div>
    </div>
    
  )
}

export default BooksPage