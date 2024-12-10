import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'false',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        container: {
            center: true,
            padding : '16px',
          },
        extend: {
            screens: {
                '2xl' : '1320px',
              },
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'dark-alt': '#5B5B5B',
                'primary': {
                    '50': '#edfcf4',
                    '100': '#d3f8e2',
                    '200': '#aaf0c9',
                    '300': '#73e2ac',
                    '400': '#3bcc8a',
                    '500': '#17b271',
                    '600': '#0b905b',
                    '700': '#09734b',
                    '800': '#0a5b3c',
                    '900': '#094b34',
                    '950': '#042a1d',
                },
            }
        },
    },

    plugins: [forms, typography],
};
