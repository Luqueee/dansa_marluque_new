import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
import tailwind from '@astrojs/tailwind';
import { VitePWA } from 'vite-plugin-pwa';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://dansamarluque.com',
    image: {
        domains: ['cdn.dansamarluque.com', 'dansamarluque.com'],
    },
    favicon: 'https://cdn.dansamarluque.com/logo.ico',
    build: {
        inlineStylesheets: 'always',
    },
    compressHTML: true,
    prefetch: true,
    devToolbar: {
        enabled: false,
    },
    integrations: [
        react(),
        tailwind({
            applyBaseStyles: false,
        }),
        starlight({
            title: 'Dansa Mar Luque Docs',
            defaultLocale: 'root',

            // https://starlight.astro.build/guides/sidebar/

            social: {
                github: 'https://github.com/Luqueee/dansa_marluque_new',
            },
            disable404Route: true,
            favicon: 'https://cdn.dansamarluque.com/logo.ico',

            head: [
                {
                    tag: 'meta',
                    attrs: {
                        property: 'og:image',
                        content: 'https://cdn.dansamarluque.com' + '/icon.png',
                    },
                },
                {
                    tag: 'meta',
                    attrs: {
                        property: 'twitter:image',
                        content: 'https://cdn.dansamarluque.com' + '/icon.png',
                    },
                },
            ],
        }),
    ],
    vite: {
        build: {
            cssMinify: 'lightningcss',
        },

        plugins: [
            VitePWA({
                registerType: 'autoUpdate',
                manifest,
                workbox: {
                    globDirectory: '.vercel/output/static',
                    globPatterns: ['**/*.{html,js,css,woff,woff2,ttf,eot,ico}'],
                    runtimeCaching: [
                        {
                            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|avif)$/,
                            handler: 'CacheFirst',
                            options: {
                                cacheName: 'images',
                                expiration: {
                                    maxEntries: 100,
                                    maxAgeSeconds: 30 * 24 * 60 * 60,
                                },
                            },
                        },
                        {
                            urlPattern: /\.(?:woff|woff2|ttf|eot|ico)$/,
                            handler: 'CacheFirst',
                            options: {
                                cacheName: 'fonts',
                                expiration: {
                                    maxEntries: 10,
                                    maxAgeSeconds: 30 * 24 * 60 * 60,
                                },
                            },
                        },
                    ],
                    navigateFallback: null,
                },
            }),
        ],
    },
    adapter: vercel(),
    output: 'server',
});
