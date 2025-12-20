import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="h-screen bg-slate-800 p-2">
      <div className="h-full bg-slate-900 text-white flex justify-center items-center rounded">
        <div className="flex flex-col gap-8">
            <h1 className="font-bold text-5xl">Harry Potter</h1>
            <div className="">
                <ul className="flex flex-col gap-2 text-center">
                    <Link to="/books" className="">
                      <li className="cursor-pointer bg-slate-800 rounded px-4 py-2 hover:bg-slate-700">Books</li>
                    </Link>
                    <Link to="/characters" className="">
                      <li className="cursor-pointer bg-slate-800 rounded px-4 py-2 hover:bg-slate-700">Characters</li>
                    </Link>
                    <Link to="/houses" className="">
                      <li className="cursor-pointer bg-slate-800 rounded px-4 py-2 hover:bg-slate-700">Houses</li>
                    </Link>
                    <Link to="/spells" className="">
                      <li className="cursor-pointer bg-slate-800 rounded px-4 py-2 hover:bg-slate-700">Spells</li>
                    </Link>
                </ul>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Home