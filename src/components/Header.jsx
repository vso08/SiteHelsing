import { useEffect, useState } from 'react';
import reactLogo from '../assets/react.svg';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const BackgroundColor = {
        background: isScrolled ? 'rgba(17, 17, 17, 0.9)' : 'rgba(17, 17, 17, 1)',
        transition: 'background-color 0.3s ease-in-out'
    };

    const NavLgBgColor = {
        background: 'rgba(0, 0, 0, 0.9)',
        padding: '0',
        margin: '0'
    };

    return (
        <header>
            <nav className="border-black flex justify-center relative lg:fixed w-screen z-5 lg:justify-between p-0 mt-0" style={BackgroundColor}>
                <div className="Logo ps-0 xl:ps-40 lg:ps-40">
                    <img src={reactLogo} className='w-12 h-12' alt="React Logo" />
                </div>
                <div className='w-full justify-between hidden lg:block pe-20 lg:pe-40 '>
                    <ul className="list-none p-3 gap-10 xl:gap-20 visible flex flex-row w-full justify-end text-white text-sm xl:text-xl lg:text-lg">
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

            <nav className={` w-screen fixed lg:relative text-white ${isScrolled ? 'top-0' : 'top-12'}`} style={NavLgBgColor}>
                <div className='w-full visible lg:hidden pe-0 lg:pe-40'>
                    <ul className="list-none p-3 gap-28 lg:gap-40 visible flex flex-row w-full justify-center text-sm sm:text-lg ">
                        <li>
                            <a href="" className=''>História</a>
                        </li>
                        <li>
                            <a href="">Cenários</a>
                        </li>
                        <li>
                            <a href="">Chefões</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
