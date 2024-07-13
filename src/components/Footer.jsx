import { WhatsappIcon, UpArrowIcon } from './ui/icons';
import { useState, useEffect } from 'react';
export default function Footer() {
    const [url, setUrl] = useState('');

    useEffect(() => {
        setUrl(`${window.location.origin}${window.location.pathname}`);
    }, []);

    return (
        <footer
            className="min-w-full h-20 my-4 px-2 flex justify-center"
            id="footer">
            <div className="min-w-full min-h-full bg-zinc-900/20 flex gap-4 justify-between items-center px-4 rounded-md backdrop-blur-sm">
                <p>Estudi de dansa Mar Luque</p>
                <div className=" flex">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://wa.me/34654350567"
                        className=" text-green-400 hover:scale-125 transition-all duration-300 py-4 px-1">
                        <WhatsappIcon />
                    </a>
                    <a
                        href={`${url}#inicio`}
                        className=" text-white hover:scale-125 transition-all duration-300 p-4">
                        <UpArrowIcon />
                    </a>
                </div>
            </div>
        </footer>
    );
}
