import BookCard from "../components/BookCard";
import Skeleton from "../components/Skeleton";
import { useBooks } from "../services/queries";

const BooksPage = () => {
  const { data: books, isLoading: loadingBooks } = useBooks();

  const s = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <div className="min-h-screen bg-slate-800 p-2">
      <div className="bg-slate-900 h-full text-white flex flex-col gap-8 justify-center items-center rounded">
        <h1 className="font-bold text-5xl">Books</h1>
        <div className=" flex p-10">
          {loadingBooks ? (
            <div className="grid gap-6 grid-cols-6">
              {s.map((index) => {
                return <Skeleton key={index} />;
              })}
            </div>
          ) : (
            <div className="grid gap-6 grid-cols-6">
              {books?.map((book) => (
                <BookCard
                  key={book.index}
                  book={book}
                  onClick={() => console.log("Book clicked:", book.title)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
