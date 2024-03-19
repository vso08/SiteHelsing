import reactLogo from '../assets/react.svg';




const Header = () => {

    const BackgroundColor = {
        background: 'rgba(17,17,17,255)'
    }

    const NavLgBgColor = {
        background: 'rgba(0, 0, 0, 0.9)',
        padding: '0',
        margin: '0'
    }

    return (

        <header className=''>
            <nav className="border-black flex justify-between relative lg:fixed w-screen z-5 x-" style={BackgroundColor}>
                <div className="Logo ps-20 lg:ps-40">
                    <img src={reactLogo} style={{ width: '50px', height: '50px' }} alt="React Logo" />
                </div>
                <div className='w-full justify-between hidden lg:block pe-20 lg:pe-40 '>
                    <ul className="list-none p-3 gap-40 visible flex flex-row w-full justify-end text-white">
                        <li>
                            <a href="" className=''>História</a>
                        </li>
                        <li>
                            <a href="">Cenários</a>
                        </li>
                        <li>
                            <a href="">Chefões</a>
                        </li>
                        <li>
                            <button className='border px-10 rounded-xl text-white bg-gradient-to-r from-yellow-300 to-red-600 outline outline-black outline-1 border-black'>
                                Download
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            <nav className="flex justify-between w-screen fixed lg:relative text-white" style={NavLgBgColor}>
                <div className='w-full justify-between visible lg:hidden pe-20 lg:pe-40 '>
                    <ul className="list-none p-3 gap-20 lg:gap-40 visible flex flex-row w-full justify-end">
                        <li>
                            <a href="" className=''>História</a>
                        </li>
                        <li>
                            <a href="">Cenários</a>
                        </li>
                        <li>
                            <a href="">Chefões</a>
                        </li>
                        <li>
                            <button className='border px-10 rounded-xl text-white bg-gradient-to-r from-yellow-300 to-red-600 outline outline-black outline-1 border-black hidden lg:visible'>
                                Download
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

        </header>
    );
};

export default Header;