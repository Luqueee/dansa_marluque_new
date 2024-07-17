import { ModeToggle } from '@/components/ModeToggle';
import Activities from './menu/Activities';
import { Image } from '@nextui-org/image';
import { useEffect, useState } from 'react';
import { MenuIcon } from '@/components/ui/icons';

export default function NavBar() {
    const [menu, setMenu] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [searchModal, setSearchModal] = useState(false);

    const handleMenuMobile = () => {
        setMenu(!menu);
    };

    const handleMenu = () => {
        setHidden(!hidden);
    };

    const handleSearch = () => {
        setHidden(false);
        setSearchModal(!searchModal);
    };

    useEffect(() => {
        setHidden(false);
    }, []);

    return (
        <div className="fixed right-0 top-0 flex w-full justify-center">
            <div className="w-full h-full flex bg-zinc-900 bg-opacity-20 justify-between backdrop-blur-sm z-[999999] items-center py-4 gap-4 md:lg:px-8 px-3 isolate ring-2 shadow-lg ring-zinc-900 ring-opacity-10">
                <a
                    href="/"
                    className="hover:scale-110 transition-all duration-300">
                    <Image
                        shadow="sm"
                        width={50}
                        alt="Dansa Mar Luque Image"
                        src="https://cdn.dansamarluque.com/icon.png"
                        draggable={false}
                        loading="lazy"
                        decoding="async"
                    />
                </a>
                <div
                    className={
                        !hidden
                            ? 'w-fit px-2 ml-auto flex items-center gap-2 text-white md:lg:gap-4'
                            : 'min-w-screen min-h-[100vh] inset-0 absolute px-2 flex bg-zinc-900 bg-opacity-90 backdrop-blur-md z-50 justify-center items-center gap-2 text-white md:lg:gap-4 transition-all duration-300'
                    }>
                    <div
                        className={
                            !hidden
                                ? 'md:lg:flex items-center hidden'
                                : 'min-w-screen min-h-[100vh] inset-0 absolute px-2 flex bg-zinc-900 bg-opacity-90 backdrop-blur-md z-50 justify-center items-center gap-2 text-white md:lg:gap-4 transition-all duration-300'
                        }>
                        <a
                            href="/"
                            onClick={() => setHidden(false)}
                            className=" border-b-2 border-transparent hover:border-white transition-all duration-300">
                            Inicio
                        </a>
                        <div
                            className={` ${
                                hidden ? 'flex' : 'hidden md:lg:flex'
                            } w-fit gap-2   border-b-2 border-transparent`}>
                            <Activities />
                        </div>
                        <button
                            onClick={handleMenu}
                            className={` ${
                                hidden ? 'block' : 'hidden'
                            } w-12 h-12 rounded-full bg-red-500 hover:bg-zinc-800 transition-all duration-200 flex justify-center items-center text-white`}>
                            X
                        </button>
                    </div>

                    <button
                        onClick={handleMenu}
                        className={` border-b-2 border-transparent hover:border-white transition-all duration-200 ${
                            hidden ? 'hidden' : 'md:lg:hidden block'
                        }`}>
                        <MenuIcon />
                    </button>
                </div>
            </div>
        </div>
    );
}
