const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./app/**/*.{ts,tsx,mdx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.trueGray,
      },

      minWidth: (theme) => ({
        64: theme('spacing.64'),
      }),

      typography: (theme) => {
        const getFontSize = ([fontSize, { lineHeight }]) => ({
          fontSize,
          lineHeight,
        });

        return {
          DEFAULT: {
            css: {
              color: theme('colors.gray.300'),

              a: {
                color: theme('colors.indigo.400'),
                textDecoration: 'none',
              },

              strong: {
                color: theme('colors.gray.200'),
              },

              h1: {
                color: theme('colors.gray.100'),
                margin: 0,
                ...getFontSize(theme('fontSize.6xl')),
              },

              h3: {
                color: theme('colors.gray.500'),
                marginBottom: 0,
                ...getFontSize(theme('fontSize.sm')),
                textTransform: 'uppercase',
              },
            },
          },
        };
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
