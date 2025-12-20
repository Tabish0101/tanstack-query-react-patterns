
const Home = () => {
  return (
    <div className="h-full bg-slate-900 text-white flex justify-center items-center rounded">
        <div className="space-y-4">
            <h1 className="font-bold text-5xl">Harry Potter</h1>
            <div className="">
                <ul className="space-y-2 text-center">
                    <li className="cursor-pointer bg-slate-800 rounded px-4 py-2 hover:bg-slate-700">Books</li>
                    <li className="cursor-pointer bg-slate-800 rounded px-4 py-2 hover:bg-slate-700">Characters</li>
                    <li className="cursor-pointer bg-slate-800 rounded px-4 py-2 hover:bg-slate-700">Houses</li>
                    <li className="cursor-pointer bg-slate-800 rounded px-4 py-2 hover:bg-slate-700">Spells</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Home