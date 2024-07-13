import {
    BellIcon,
    CalendarIcon,
    FileTextIcon,
    GlobeIcon,
    InputIcon,
} from '@radix-ui/react-icons';

import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';

const features = [
    {
        Icon: FileTextIcon,
        name: 'Casal de verano',
        description: 'Descubre nuestro casal de verano.',
        href: '/',
        cta: 'Descubre nuesto casal',
        background: (
            <img
                className="absolute right-0 bottom-0  object-top opacity-50 object-cover group-hover:opacity-30 transition-all duration-300"
                draggable="false"
                loading="lazy"
                decoding="async"
                src="https://cdn.dansamarluque.com/fotocasal1.jpg"
            />
        ),
        className: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3',
    },
    {
        Icon: InputIcon,
        name: 'Hip Hop',
        description: 'Search through all your files in one place.',
        href: '/',
        cta: 'Learn more',
        background: (
            <img
                className="absolute right-0 bottom-0 object-top opacity-50 object-cover group-hover:opacity-30 transition-all duration-300"
                draggable="false"
                loading="lazy"
                decoding="async"
                src="https://cdn.dansamarluque.com/fotocasal2.jpg"
            />
        ),
        className: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3',
    },
    {
        Icon: GlobeIcon,
        name: 'Multilingual',
        description: 'Supports 100+ languages and counting.',
        href: '/',
        cta: 'Learn more',
        background: (
            <img
                className="absolute right-0 scale-150 top-8 object-bottom opacity-50 object-contain group-hover:opacity-30 transition-all duration-300"
                draggable="false"
                loading="lazy"
                decoding="async"
                src="https://cdn.dansamarluque.com/fotocasal3.jpg"
            />
        ),
        className: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4',
    },
    {
        Icon: CalendarIcon,
        name: 'Calendar',
        description: 'Use the calendar to filter your files by date.',
        href: '/',
        cta: 'Learn more',
        background: (
            <img
                className="absolute right-0 scale-150 top-8  object-top opacity-50 object-cover group-hover:opacity-30 transition-all duration-300"
                draggable="false"
                loading="lazy"
                decoding="async"
                src="https://cdn.dansamarluque.com/fotocasal4.jpg"
            />
        ),
        className: 'lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2',
    },
    {
        Icon: BellIcon,
        name: 'Notifications',
        description:
            'Get notified when someone shares a file or mentions you in a comment.',
        href: '/',
        cta: 'Learn more',
        background: (
            <img
                className="absolute right-0 md:lg:top-0 top-8 md:lg:scale-100 scale-150  object-top opacity-50 object-cover group-hover:opacity-30 transition-all duration-300"
                draggable="false"
                loading="lazy"
                decoding="async"
                src="https://cdn.dansamarluque.com/fotocasal5.jpg"
            />
        ),
        className: 'lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4',
    },
];

export function BentoIndex() {
    return (
        <BentoGrid className="lg:grid-rows-3">
            {features.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
            ))}
        </BentoGrid>
    );
}
