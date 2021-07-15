module.exports = Radio = (colors) => ({
  ".form-radio": {
    "@apply shadow-sm": {},
    backgroundColor: "inherit",
    "@apply border-neutral-300 hover:border-neutral-300": {},
    "&[aria-invalid=true]": {
      // "@apply border-red-600 hover:border-red-600": {},
      "--tw-border-opacity": "1",
      "borderColor": "rgba(220, 38, 38, var(--tw-border-opacity))",
    },
    "&[aria-invalid=true]:hover": {
      "--tw-border-opacity": "1",
      "border-color": "rgba(220, 38, 38, var(--tw-border-opacity))",
    },
    // dark colors
    "@apply dark:border-neutral-500 dark:hover:border-neutral-400": {},
    ".dark &[aria-invalid=true]": {
      // "@apply dark:border-red-400 dark:hover:border-red-400": {},
      "--tw-border-opacity": "1",
      "borderColor": "rgba(248, 113, 113, var(--tw-border-opacity))",
    },
    ".dark &[aria-invalid=true]:hover": {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(248, 113, 113, var(--tw-border-opacity))",
    },

    "@media (prefers-color-scheme: dark)": {
      "&[aria-invalid=true]": {
        // "@apply border-red-600 hover:border-red-600": {},
        "--tw-border-opacity": "1",
        "borderColor": "rgba(220, 38, 38, var(--tw-border-opacity))",
      },
      "&[aria-invalid=true]:hover": {
        "--tw-border-opacity": "1",
        "border-color": "rgba(220, 38, 38, var(--tw-border-opacity))",
      },
    },

    // colors
    ...colors.reduce(
      (styles, color) => ({
        ...styles,
        [`&[data-color="${color}"]`]: {
          [`@apply text-${color}-600`]: {},
          [`@apply focus:border-${color}-600 focus:ring-${color}-600`]: {},
          [`@apply dark:text-${color}-500`]: {},
          [`@apply dark:focus:border-${color}-400 dark:focus:ring-${color}-400`]: {},
        },
      }),
      {}
    ),

    "@apply dark:focus:ring-offset-neutral-900": {},

    // sizing
    "&-sm": {
      "@apply w-3 h-3": {},
    },

    "&-md": {
      "@apply w-4 h-4": {},
    },

    "&-lg": {
      "@apply w-5 h-5": {},
    },

    "&-xl": {
      "@apply w-6 h-6": {},
    },

    // disabled
    "&-disabled": {
      "@apply disabled:shadow-none disabled:border-neutral-300 disabled:bg-neutral-300 disabled:hover:text-neutral-300": {},
      "@apply dark:disabled:border-transparent dark:disabled:bg-whiteAlpha-200 dark:disabled:hover:text-whiteAlpha-200": {},
    },

    // label
    "&-label": {
      "@apply ml-2 select-none text-sm": {},
      "@apply text-neutral-900": {},
      // dark colors
      "@apply dark:text-neutral-100": {},
  
      "&-sm": {
        "@apply text-xs": {},
      },
  
      "&-md": {
        "@apply text-sm": {},
      },
  
      "&-lg": {
        "@apply text-base": {},
      },
  
      "&-xl": {
        "@apply text-lg": {},
      },
    },
  },
});
