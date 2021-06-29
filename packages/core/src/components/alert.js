function alertSubtle(colors) {
  return {
    ".alert-subtle": {
      "@apply border rounded-base": {},
      "@apply text-neutral-900": {},

      ...colors.reduce(
        (styles, color) => ({
          ...styles,
          [`&[data-color="${color}"]`]: {
            [`@apply bg-${color}-50 border-${color}-500`]: {},

            [`@apply dark:text-${color}-300 dark:bg-${color}-500`]: {},
            "@apply dark:bg-opacity-15": {},
            "@apply dark:border-opacity-40": {},
          },
        }),
        {}
      ),
    },
  };
}

function alertSolid(colors) {
  return {
    ".alert-solid": {
      "@apply border rounded-base": {},
      "@apply text-white": {},

      ...colors.reduce(
        (styles, color) => ({
          ...styles,
          [`&[data-color="${color}"]`]: {
            [`@apply bg-${color}-500 border-${color}-700 border-opacity-20`]: {},

            [`@apply dark:bg-${color}-600 dark:border-${color}-500`]: {},
            "@apply dark:border-opacity-40": {},
          },
        }),
        {}
      ),
    },
  };
}

function alertLeftAccent(colors) {
  return {
    ".alert-left-accent": {
      "@apply border-l-2 rounded-none": {},
      "@apply text-neutral-900": {},

      ...colors.reduce(
        (styles, color) => ({
          ...styles,
          [`&[data-color="${color}"]`]: {
            [`@apply bg-transparent border-${color}-500`]: {},

            [`@apply dark:text-${color}-300`]: {},
          },
        }),
        {}
      ),
    },
  };
}

function alertCloseButton(colors) {
  return {
    ".alert-close-button": {
      "@apply absolute right-4 cursor-base focus:outline-none": {},
      "@apply text-neutral-600 hover:text-neutral-700": {},

      ...colors.reduce(
        (styles, color) => ({
          ...styles,
          [`&[data-color="${color}"]`]: {
            [`@apply dark:text-${color}-300 dark:hover:text-${color}-400`]: {},
          },
        }),
        {}
      ),
    },
  };
}

module.exports = Alert = (colors) => ({
  ".alert": {
    "@apply w-full flex items-center px-4 py-3 relative overflow-hidden text-sm": {},
  },

  // variants
  ...alertSubtle(colors),
  ...alertSolid(colors),
  ...alertLeftAccent(colors),

  // close button
  ...alertCloseButton(colors),
});
