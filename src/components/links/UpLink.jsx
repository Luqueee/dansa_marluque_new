import { useState, useEffect } from 'react';
import { UpArrowIcon } from '@/components/ui/icons';

export default function UpArrowLink() {
    const [url, setUrl] = useState('');

    useEffect(() => {
        setUrl(`${window.location.origin}${window.location.pathname}`);
    }, [url]);

    return (
        <a
            href={`${url}#inicio`}
            className=" text-white hover:scale-125 transition-all duration-300 p-4">
            <UpArrowIcon />
        </a>
    );
}
