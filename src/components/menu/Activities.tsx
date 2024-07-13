const activities = [
    { name: 'hiphop', url: '/actividades/hiphop' },
    { name: 'Funky', url: '/actividades/funky' },
    { name: 'Flamenco', url: '/actividades/flamenco' },
    { name: 'Dancemusic', url: '/actividades/dancemusic' },
    { name: 'Fitness', url: '/actividades/fitness' },
    { name: 'Jumping', url: '/actividades/jumping' },
];

export const DownArrow = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a3a3a3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down ">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 9l6 6l6 -6" />
        </svg>
    );
};

export const UpArrow = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a3a3a3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up ">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 15l6 -6l6 6" />
        </svg>
    );
};
import { type DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type Checked = DropdownMenuCheckboxItemProps['checked'];

export default function Activities() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-primary">
                    Actividades <DownArrow />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 text-primary">
                {activities.map((activity) => (
                    <DropdownMenuItem key={activity.name}>
                        <a
                            className=" min-h-full min-w-full"
                            href={activity.url}>
                            {activity.name}
                        </a>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
