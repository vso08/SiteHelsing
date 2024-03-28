import HelsingLogo from '../assets/logo.svg';

function Menu() {
    return (
        <main className="w-screen h-auto">
            <div className="container mx-auto px-20 pt-4 rounded-lg">
                <div className="banner grid lg:grid-cols-2">
                    <div className="py-24 md:py-56 flex text-center rounded-sm bg-gradient-to-t lg:bg-gradient-to-r from-transparent to-zinc-700">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl  font-thin me-5 text-white">Se desafie contra inimigos e mundos poderosos! </h1>
                    </div>
                    <div className="flex justify-center text-center items-center">
                        <div className="Download">
                            <button className="border px-10 md:px-20 py-5 md:py-5 rounded-2xl md:rounded-2xl text-white bg-gradient-to-r from-yellow-300 to-red-600 outline outline-black outline-1 border-black">
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Menu