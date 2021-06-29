function tagOutline(colors) {
  return {
    ".tag-outline": {
      "@apply border bg-transparent border-neutral-200 text-neutral-900": {},
      // dark
      "@apply dark:border-neutral-600 dark:text-neutral-100": {},

      ...colors.reduce(
        (styles, color) => ({
          ...styles,
          [`&[data-color="${color}"]`]: {
            [`@apply border-${color}-600 text-${color}-600`]: {},
            // dark
            [`@apply dark:border-${color}-400 dark:text-${color}-400`]: {},
            "@apply dark:border-opacity-40": {},
          },
        }),
        {}
      ),
    },
  };
}

function tagSolid(colors) {
  return {
    ".tag-solid": {
      "@apply border bg-neutral-500 border-transparent text-white": {},
      // dark
      "@apply dark:border-neutral-600 dark:text-neutral-100 dark:bg-neutral-700": {},

      ...colors.reduce(
        (styles, color) => ({
          ...styles,
          [`&[data-color="${color}"]`]: {
            [`@apply bg-${color}-500`]: {},
            // dark
            [`@apply dark:text-${color}-400 dark:border-${color}-500 dark:bg-${color}-500`]: {},
            "@apply dark:bg-opacity-15": {},
            "@apply dark:border-opacity-40": {},
          },
        }),
        {}
      ),
    },
  };
}

function tagLight(colors) {
  return {
    ".tag-light": {
      "@apply text-neutral-900 bg-neutral-100": {},
      // dark
      "@apply dark:text-neutral-100 dark:bg-neutral-700": {},

      ...colors.reduce(
        (styles, color) => ({
          ...styles,
          [`&[data-color="${color}"]`]: {
            [`@apply text-${color}-800 bg-${color}-100`]: {},
            // dark
            [`@apply dark:text-${color}-400 dark:bg-${color}-500`]: {},
            "@apply dark:bg-opacity-15": {},
          },
        }),
        {}
      ),
    },
  };
}

module.exports = Tag = (colors) => ({
  ".tag": {
    "@apply inline-flex items-center max-h-full rounded-full font-medium outline-none cursor-base whitespace-nowrap": {},

    "&-sm": {
      "@apply px-2 h-5 text-xs": {},
      minWidth: "1.25rem",
    },

    "&-md": {
      "@apply px-2 h-6 text-xs": {},
      minWidth: "1.5rem",
    },

    "&-lg": {
      "@apply px-2.5 h-7 text-sm": {},
      minWidth: "1.75rem",
    },

    "&-xl": {
      "@apply px-3 h-8 text-base": {},
      minWidth: "2rem",
    },
  },

  // variants
  ...tagOutline(colors),
  ...tagSolid(colors),
  ...tagLight(colors),

  ".tag-close-button": {
    "@apply flex items-center justify-center transition-all duration-150 rounded-full outline-none ml-1 -mr-1 opacity-50 cursor-base": {},
    "@apply hover:opacity-80 focus:outline-none active:opacity-100": {},

    "&-disabled": {
      "@apply disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none": {},
    },
  },
});
