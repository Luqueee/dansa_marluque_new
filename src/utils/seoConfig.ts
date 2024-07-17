// Type imports
import type { ManifestOptions } from 'vite-plugin-pwa';

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
    baseURL: 'https://dansamarluque.com/', // Production URL.
    description:
        'Web Oficial de Estudi de Dansa Mar Luque donde ofrecemos amplios estilos de danza',
    type: 'website',
    image: {
        url: 'https://cdn.dansamarluque.com/og.png',
        alt: 'Dansa Mar Luque',
        width: 705,
        height: 606,
    },
    siteName: 'Dansa Mar Luque',
    twitter: {
        card: 'summary_large_image',
    },
};

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
    name: 'Estudi de Dansa Mar Luque',
    short_name: 'Dansa Mar Luque',
    description:
        'Web Oficial de Estudi de Dansa Mar Luque donde ofrecemos amplios estilos de danza',
    theme_color: '#d5ff00',
    background_color: '#d5ff00',
    display: 'fullscreen',
    icons: [
        {
            src: '/img/icons/favicon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
        },
        {
            src: '/img/icons/favicon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
        },
        {
            src: '/img/icons/favicon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
        },
    ],
};
